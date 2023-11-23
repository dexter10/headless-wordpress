<script setup lang="ts">
    import { stringLiteral } from '@babel/types';

    const route = useRoute() // Remove later

    // Posts query (for multiple nuxt-graphql-client queries use useAsyncGql)
    // !Important information about pagination (edges between collections of posts,etc.)
    // https://www.wpgraphql.com/docs/connections
    const { data:posts } = await useAsyncGql({
        operation: 'Posts',
        variables: { first: 10 },
    });

    // Deconstruct posts
    // console.log(posts.value.posts, typeof posts);
    const postsPaged:any = posts.value.posts?.nodes;


    // SEO query from WP general settings for frontpage blogs
    const { data:settings } = await useAsyncGql({
        operation: 'GeneralSettings',
    });

    // Intercept titles, featured images, excerpt, etc. for per posts/page SEO
    // interface Settingstypes {
    //     title: string;
    //     description: string;
    //     featuredImageUrl: string;
    //     featuredImageAlt: string;
    //     featuredImageMime: 'image/jpeg' | 'image/gif' | 'image/png';
    //     featuredImageWidth: string;
    //     featuredImageHeight: string;
    // }
    // Deconstruct settings
    const setting:any = settings.value.generalSettings;

    console.log(settings.value, typeof settings);

    useHead({
        bodyAttrs: {
            class: 'home'
        },
        // meta: [
        //     // Use og:image:type here because of the type error in useSeoMeta - ogImageType
        //     { property: 'og:image:type', content: setting?.featuredImageMime }
        // ],
    }),
    useSeoMeta({
        title: setting?.title,
        description: setting?.description,
        twitterCard: 'summary_large_image',
        twitterTitle: setting?.title,
        twitterDescription: setting?.description,
        twitterImage: setting?.featuredImageUrl,
        twitterImageAlt: setting?.featuredImageAlt,
        ogTitle: setting?.title,
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
        <p>Current route: {{ route.path }}home</p>
        <!-- <div>{{ posts.posts?.nodes }}</div>
        <div>{{ postsPaged.nodes }}</div> -->
        <Post v-for="post in postsPaged" :key:any="post.uri" :post="post"></Post>
    </div>
  </div>
</template>


