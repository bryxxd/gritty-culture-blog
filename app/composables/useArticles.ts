export const useArticles = () => {
  const { graphqlFetch } = useWordPress();

  // Fetch all articles
  const getArticles = async (limit = 10, excludeIds: number[] = []) => {
    const query = `
      query GetArticles($first: Int!, $excludeIds: [ID]) {
        articles( where: { orderby: { field: DATE, order: DESC }, notIn: $excludeIds  }, first: $first) {
          nodes {
            id
            databaseId
            title
            slug
            date
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            terms {
              nodes {
                name
              }
            }
          }
        }
      }
    `;
    const { data } = await graphqlFetch(query, { first: limit , excludeIds: excludeIds.map(String) });
    return data.articles.nodes;
  };

  // Fetch single article by slug
  const getArticleBySlug = async (slug: string) => {
    const query = `
      query GetArticleBySlug($slug: ID!) {
        article(id: $slug, idType: SLUG) {
          databaseId
          title
          content
          date
          terms {
            nodes {
              name
            }
          }
          articleFields {
            article_header {
              node {
                altText 
                sourceUrl
              }
            }
            article_intro
          }
        }
      }
    `;

    const { data } = await graphqlFetch(query, { slug });
    return data.article;
  };

  return {
    getArticles,
    getArticleBySlug,
  };
};
