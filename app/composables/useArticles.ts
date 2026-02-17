export const useArticles = () => {
  const { graphqlFetch } = useWordPress();

  // Fetch all articles
  const getArticles = async (limit = 10) => {
    const query = `
      query GetArticles($first: Int!) {
        articles(first: $first, where: { orderby: { field: DATE, order: DESC }  }) {
          nodes {
            title
            slug
            date
            featuredImage {
              node {
                sourceUrl
                altText
                mediaDetails {
                  width
                  height
                }
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
    const { data } = await graphqlFetch(query, { first: limit });
    return data.articles.nodes;
  };

  // Fetch single article by slug
  const getArticleBySlug = async (slug: string) => {
    const query = `
      query GetArticleBySlug($slug: ID!) {
        article(id: $slug, idType: SLUG) {
          title
          content
          date
          featuredImage {
            node {
              sourceUrl
              altText
              mediaDetails {
                width
                height
              }
            }
          }
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
