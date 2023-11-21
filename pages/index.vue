<script setup lang="ts">
import { stringLiteral } from '@babel/types';

    const route = useRoute()
    const config:any = useRuntimeConfig();

    // Posts useFetch
    const { data :posts, error, refresh, pending } = await useFetch(config.public.wpGraphqlUrl, {
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
                }`
            },
            transform( data:any ) {
                return data.data.posts.nodes as Array<Record<'title' | 'date' | 'rawExcerpt' | 'uri', string>>;
            }
        }
    );
    
    // SEO fetching from General Settings with Default featured image plugin installed
    const { data :settings } = await useFetch(config.public.wpGraphqlUrl, {
        method: 'get',
        query: {
            query: `
                query SettingsQuery {
                    generalSettings {
                        title
                        description
                        url
                        featuredImageUrl
                        featuredImageAlt
                        featuredImageMime
                        featuredImageWidth
                        featuredImageHeight
                    }
                }`
            },
            deep: false,
            // transform( data:any ) {
                // No need to type the output for SEO below
            // }
        }
    );

    // Frontpage - data from General Settings if page is
    const setting           = settings.value.data.generalSettings;
    const title             = setting.title;
    const description       = setting.description;
    const featuredImgUrl    = setting.featuredImageUrl;
    const featuredImgAlt    = setting.featuredImageAlt;
    const featuredImgMime   = setting.featuredImageMime;
    const featuredImgWidth  = setting.featuredImageWidth;
    const featuredImgHeight = setting.featuredImageHeight;

    useHead({
        title: title,
        bodyAttrs: {
            class: 'home'
        },
    }),
    useSeoMeta({
        title: title,
        description: description,
        twitterCard: featuredImgUrl,
        twitterTitle: title,
        twitterDescription: description,
        twitterImage: featuredImgUrl,
        twitterImageAlt: featuredImgAlt,
        ogTitle: title,
        ogDescription: description,
        ogImageUrl: featuredImgUrl,
        ogImageSecureUrl: featuredImgUrl,
        ogImageType: featuredImgMime,
        ogImageWidth: featuredImgWidth,
        ogImageHeight: featuredImgHeight,
        ogImageAlt: featuredImgAlt,
    })
</script>

<template>
  <div>
    <TheHeader></TheHeader>
    <div class="grid gap-8 grid-cols-1 lg:grid-cols-3 p-6">
      <p>Current route: {{ route.path }}home</p>
      <div v-if="error">{{ error.message }}</div>
      <Post v-for="post in posts" :key="post.uri" :post="post"></Post>
    </div>
  </div>
</template>