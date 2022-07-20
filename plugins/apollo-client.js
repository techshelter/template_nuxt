import { defineNuxtPlugin } from "#app"

import { ApolloClient, InMemoryCache } from "@apollo/client/core"
import { DefaultApolloClient } from "@vue/apollo-composable"

export const newAppoloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://africafotofair-strapi.herokuapp.com/graphql'
})


export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: config.public.strapiUrl
  })
  nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient)
})