
<script setup lang="ts">

  const route = useRoute();
  const uri = route.params.uri + '/';
  const config = useRuntimeConfig();
  const {data, pending, refresh, error} = await useFetch(config.public.wpGraphqlUrl, {
    method: 'get',
    query: {
        query: `
        query PostQuery($uri: String!) {
            nodeByUri(uri: $uri) {
                ... on Post {
                    id
                    title
                    rawExcerpt
                    date
                    content
                    featuredImage {
                      node {
                        id
                        altText
                        sourceUrl
                        mimeType
                        mediaDetails {
                          height
                          width
                        }
                      }
                    }
                }
            }
        }
        `,
        variables: {
            uri: uri
        }
    },
    
    transform(data:any){
        return data.data.nodeByUri
    }

  })
  // console.log(data);
  // !Important information about pagination (edges between collections of posts,etc.)
  // https://www.wpgraphql.com/docs/connections

  // Declare date transform function from plugins/format-date.ts to avoid namespace conflicts with date formats between WP and Nuxt.
  const formatDate = useNuxtApp().$formatDate;

  const seoInfo = data.value;

  useSeoMeta({
    title: seoInfo.title,
    description: seoInfo.rawExcerpt,
    twitterCard: seoInfo.featuredImage.node.sourceUrl,
    twitterTitle: seoInfo.title,
    twitterDescription: seoInfo.rawExcerpt,
    twitterImage: seoInfo.featuredImage.node.sourceUrl,
    twitterImageAlt: seoInfo.featuredImage.node.altText,
    ogTitle: seoInfo.title,
    ogDescription: seoInfo.rawExcerpt,
    ogImageUrl: seoInfo.featuredImage.node.sourceUrl,
    ogImageSecureUrl: seoInfo.featuredImage.node.sourceUrl,
    ogImageType: seoInfo.featuredImage.node.mimeType,
    ogImageWidth: seoInfo.featuredImage.node.mediaDetails.width,
    ogImageHeight: seoInfo.featuredImage.node.mediaDetails.height,
    ogImageAlt: seoInfo.featuredImage.node.altText,
  })
</script>

<template>
  <div>
    <TheHeader></TheHeader>
    <main class="bg-gray-100 container mx-auto mt-6 p-6 rounded-lg">
      <h1>{{ data.title }} + Catch All</h1>
      <div class="text-2xl mt-4">{{ formatDate(data.date) }}</div>
      <div>{{ data.rawExcerpt }}</div>
      <div>{{ data.featuredImage.node.sourceUrl}}</div>
      <article class="mt-4 space-y-2" v-html="data.content"></article>
    </main>
  </div>
</template>
