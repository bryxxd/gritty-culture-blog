export const useFeaturedAlbum = () => {
  const { graphqlFetch } = useWordPress()
  
  // Fetch the currently featured album
  const getFeaturedAlbum = async () => {
    const query = `
      query GetFeaturedAlbum($first: Int!) {
        featuredAlbums(
          first: $first
          where: { orderby: { field: DATE, order: DESC } }
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

    // No WPGraphQL Meta Query plugin installed, so fetch recent albums
    // and pick the featured one client-side instead of filtering server-side.
    const { data } = await graphqlFetch(query, { first: 10 })
    const nodes = data.featuredAlbums.nodes || []
    return nodes.find((album: any) => !!album.albumFields?.album_is_featured) || null
  }
  
  return {
    getFeaturedAlbum,
  }
}