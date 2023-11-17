
<script setup lang="ts">

  const route = useRoute();
  const uri = route.params.uri + '/';
  const config = useRuntimeConfig();
  const {data, pending, refresh, error} = await useFetch(config.public.wordpressUrl, {
    method: 'get',
    query: {
        query: `
        query PostQuery($uri: String!) {
            nodeByUri(uri: $uri) {
                ... on Post {
                    id
                    title
                    excerpt
                    date
                    content
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

  // Declare function from plugins/format-date.ts to avoid namespace conflicts
  const formatDate = useNuxtApp().$formatDate;  

  // useHead({
  //   title: data.value.title
  // })

  // Get data from WP general settings for homepage and for pages/posts from the SEO plugin
  useSeoMeta({
      title: data.value.title,
      description: data.value.excerpt,
      twitterCard: 'summary_large_image',
      twitterTitle: 'UseSeoMeta - My Amazing Site',
      twitterDescription: 'UseSeoMeta - My Amazing Site',
      twitterImage: 'UseSeoMeta - My Amazing Site',
      twitterImageAlt: 'UseSeoMeta - My Amazing Site',
      ogTitle: 'UseSeoMeta - My Amazing Site',
      ogDescription: 'UseSeoMeta - This is my amazing site, let me tell you all about it.',
      ogImageUrl: 'https://example.com/image.png',
      ogImageSecureUrl: 'https://example.com/image.png',
      ogImageType: 'image/jpeg',
      ogImageWidth: '1200',
      ogImageHeight: '640',
      ogImageAlt: 'Image Alt',

  })
</script>

<template>
   <div>
     <TheHeader></TheHeader>
       <main class="bg-gray-100 container mx-auto mt-6 p-6 rounded-lg">
           <h1>{{ data.title }} + Catch All</h1>
           <div class="text-2xl mt-4">{{ formatDate(data.date) }}</div>
           <article class="mt-4 space-y-2" v-html="data.content"></article>
       </main>
   </div>
</template>
