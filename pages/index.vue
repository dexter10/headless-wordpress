<script setup lang="ts">
import { stringLiteral } from '@babel/types';

const route = useRoute() // Remove later
const config = useRuntimeConfig();
const canonicalUrl = config.public.site.url + route.path;
const defaultLocale = config.public.site.defaultLocale + route.path;

// Posts query (for multiple nuxt-graphql-client queries use useAsyncGql)
// !Important information about pagination (edges between collections of posts,etc.)
// https://www.wpgraphql.com/docs/connections

// Could also be written in /composables
// See https://github.com/harlan-zw/harlanzw.com/blob/main/composables/usePosts.ts
const { data: posts } = await useAsyncGql({
    operation: 'Posts',
    variables: { first: 10 },
});

// Deconstruct posts
const postsPaged: any = posts.value.posts?.nodes;

// SEO query from WP general settings for frontpage blogs
const { data: settings } = await useAsyncGql({
    operation: 'GeneralSettings',
});

// Deconstruct settings
const setting: any = settings.value.generalSettings;

// console.log(setting);


// useHead({
//     bodyAttrs: {
//         class: 'home'
//     },
// }),
useSeoMeta({
    title: setting?.title,
    description: setting?.description,
    twitterCard: 'summary_large_image',
    twitterTitle: setting?.title,
    twitterDescription: setting?.description,
    twitterImage: setting?.featuredImageUrl,
    twitterImageAlt: setting?.featuredImageAlt,
    ogTitle: setting?.title,
    ogUrl: canonicalUrl,
    ogLocale: defaultLocale,
    ogDescription: setting?.description,
    ogImageUrl: setting?.featuredImageUrl,
    ogImageSecureUrl: setting?.featuredImageUrl,
    ogImageType: setting?.featuredImageMime,
    ogImageWidth: setting?.featuredImageWidth,
    ogImageHeight: setting?.featuredImageHeight,
    ogImageAlt: setting?.featuredImageAlt,
})
</script>

<template>
    <div>
        <TheHeader></TheHeader>
        <div class="grid gap-8 grid-cols-1 lg:grid-cols-3 p-6">
            <Post v-for="post in postsPaged" :key:any="post.uri" :post="post"></Post>
        </div>
    </div>
</template>