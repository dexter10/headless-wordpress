<script setup lang="ts">
    const route = useRoute()
    const config = useRuntimeConfig();
    const { data, refresh, pending } = await useFetch(config.public.wordpressUrl, {
        method: 'get',
        query: {
            query: `
                query NewQuery {
                    posts(first:10){
                        nodes {
                            title
                            date
                            excerpt
                            uri
                        }
                    }
                }`
            },
            transform( data:any ) {
                // add additional typing that will help Nuxt auto-complete code as you type
                return data.data.posts.nodes as Array<Record<'title' | 'date' | 'excerpt' | 'uri', string>>;
            }
        }
    );
    // console.log( data.value?.[1]);
    useHead({
        bodyAttrs: {
            class: 'home'
        },
    })
    // Get data from WP general settings for homepage and for pages/posts from the SEO plugin
    useSeoMeta({
        title: 'UseSeoMeta - My Amazing Site',
        description: 'Custom headless Wordpress and Nuxt websites.',
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
    <div class="grid gap-8 grid-cols-1 lg:grid-cols-3 p-6">
      <p>Current route: {{ route.path }}home</p>
      <Post v-for="post in data" :key="post.uri" :post="post"></Post>
    </div>
  </div>
</template>