export const useWordPress = () => {
  const config = useRuntimeConfig()
  
  const graphqlFetch = async (query: string, variables = {}) => {
    try {
      const response = await $fetch(config.public.wpGraphqlUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      })
      
      return response
    } catch (error) {
      console.error('GraphQL Error:', error)
      throw error
    }
  }
  
  return {
    graphqlFetch,
  }
}
