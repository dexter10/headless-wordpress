<script setup lang="ts">

// Test on: https://cards-dev.twitter.com/validator
// Test on: https://developers.facebook.com/tools/debug/

const props = defineProps({
    bodyClass: {
        type: String,
        default: 'home',
    },
})
// const { post } = defineProps(['post']);

useHead({
    bodyAttrs: {
        class: props.bodyClass,
    },
})
// useSeoMeta({
// title: this.title,
// description: setting?.description,
// twitterCard: 'summary_large_image',
// twitterTitle: setting?.title,
// twitterDescription: setting?.description,
// twitterImage: setting?.featuredImageUrl,
// twitterImageAlt: setting?.featuredImageAlt,
// ogTitle: setting?.title,
// ogUrl: canonicalUrl,
// ogLocale: defaultLocale,
// ogDescription: setting?.description,
// ogImageUrl: setting?.featuredImageUrl,
// ogImageSecureUrl: setting?.featuredImageUrl,
// ogImageType: setting?.featuredImageMime,
// ogImageWidth: setting?.featuredImageWidth,
// ogImageHeight: setting?.featuredImageHeight,
// ogImageAlt: setting?.featuredImageAlt,
// })

</script>

<template>
    <!-- <NuxtLink :to='post.uri'></NuxtLink> -->
</template>