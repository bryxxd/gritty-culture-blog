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
            id
            title
            cinemaFields {
              cinemaMood
              cinemaYear
              cinemaWhyWatch
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
