export const useFeaturedAlbum = () => {
  const { graphqlFetch } = useWordPress()
  
  // Fetch the currently featured album
  const getFeaturedAlbum = async () => {
    const query = `
      query GetFeaturedAlbum {
        featuredAlbums(
          first: 1
          where: { 
            orderby: { field: DATE, order: DESC }
            metaQuery: {
              metaArray: {
                key: "album_is_featured"
                value: "1"
                compare: EQUAL_TO
              }
            }
          }
        ) {
          nodes {
            id
            title
            albumFields {
              album_artist
              album_cover {
                node {
                  sourceUrl
                  altText
                }
              }
              album_url
              album_is_featured
            }
          }
        }
      }
    `
    
    const { data } = await graphqlFetch(query)
    return data.featuredAlbums.nodes || null
  }
  
  return {
    getFeaturedAlbum,
  }
}