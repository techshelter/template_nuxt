<template lang="pug">
div(class="bg-red-500") {{result}}
</template>

<script setup>
import { useQuery } from "@vue/apollo-composable"
import { GET_BOOKS_INFO } from "~/gql/books"
import { capitalize } from 'lodash-es'
const { result, loading } = useQuery(GET_BOOKS_INFO)
</script>