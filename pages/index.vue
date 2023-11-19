<script setup lang="ts">
    const route = useRoute()
    const config = useRuntimeConfig();
    const { data, refresh, pending } = await useFetch(config.public.wpGraphqlUrl, {
        method: 'get',
        query: {
            query: `
                query FrontpageQuery {
                    posts(first:10){
                        nodes {
                            title
                            date
                            rawExcerpt
                            uri                    
                        }
                    }
                    generalSettings {
                        title
                        description
                        url
                    }
                }`
            },
            transform( data:any ) {
                // add additional typing that will help Nuxt auto-complete code as you type
                return data.data.posts.nodes as Array<Record<'title' | 'date' | 'excerpt' | 'uri', string>>;
            }
        }
    );
    useHead({
        bodyAttrs: {
            class: 'home'
        },
    })
    // Frontpage - data from General Settings
    useSeoMeta({
        title: 'test',
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