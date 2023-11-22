<script setup lang="ts">
    import { stringLiteral } from '@babel/types';

    const route = useRoute()

    // Posts query
    const { data:posts } = await useAsyncGql({
        operation: 'Posts',
        variables: { first: 10 },
    });

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
    const setting = settings.value.generalSettings;

    console.log(setting);

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
        ogImageWidth: setting?.featuredImageWidth,
        ogImageHeight: setting?.featuredImageHeight,
    })
</script>

<template>
  <div>
    <TheHeader></TheHeader>
    <div class="grid gap-8 grid-cols-1 lg:grid-cols-3 p-6">
        <p>Current route: {{ route.path }}home</p>
        <Post v-for="post in posts.posts?.nodes" :key:any="post.uri" :post="post"></Post>
    </div>
  </div>
</template>