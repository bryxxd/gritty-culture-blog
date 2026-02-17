export const useCinemaSelects = () => {
  const { graphqlFetch } = useWordPress()
  
  // Fetch all cinema selects
  const getCinemaSelects = async (limit = 8) => {
    const query = `
      query GetCinemaSelects($first: Int!) {
        cinemaSelects(
          first: $first
          where: { orderby: { field: DATE, order: DESC } }
        ) {
          nodes {
            title
            cinemaFields {
              cinema_mood
              cinema_year
              cinema_why_watch
              
            }
          }
        }
      }
    `
    const { data } = await graphqlFetch(query, { first: limit })
    return data.cinemaSelects.nodes
  }
  
  return {
    getCinemaSelects,
  }
}
