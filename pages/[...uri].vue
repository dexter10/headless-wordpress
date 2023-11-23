
<script setup lang="ts">

  const route = useRoute();
  const uri = route.params.uri + '/';

  // Post query (for single nuxt-graphql-client queries use useGql() & GqlInstance())
  const GqlInstance = useGql()
  const postData:any = await GqlInstance('Post', {uri: uri})

  // console.log(postData, typeof postData);
  // Destructure postData
  const post = postData.nodeByUri;

  // Declare date transform function from plugins/format-date.ts to avoid namespace conflicts with date formats between WP and Nuxt.
  const formatDate = useNuxtApp().$formatDate;

  // const seoInfo           = post;
  // const title             = seoInfo.title;
  // const excerpt           = seoInfo.rawExcerpt;
  // const featuredImgUrl    = seoInfo.featuredImage.node.sourceUrl;
  // const featuredImgAlt    = seoInfo.featuredImage.node.altText;
  // const featuredImgWidth  = seoInfo.featuredImage.node.mediaDetails.width;
  // const featuredImgHeight = seoInfo.featuredImage.node.mediaDetails.height;

  // useSeoMeta({
  //   title: title,
  //   description: excerpt,
  //   twitterCard: featuredImgUrl,
  //   twitterTitle: title,
  //   twitterDescription: excerpt,
  //   twitterImage: featuredImgUrl,
  //   twitterImageAlt: featuredImgAlt,
  //   ogTitle: title,
  //   ogDescription: excerpt,
  //   ogImageUrl: featuredImgUrl,
  //   ogImageSecureUrl: featuredImgUrl,
  //   ogImageWidth: featuredImgWidth,
  //   ogImageHeight: featuredImgHeight,
  // })
</script>

<template>
  <div>
    <TheHeader></TheHeader>
    <main class="bg-gray-100 container mx-auto mt-6 p-6 rounded-lg">
      <h1>{{ post.title }} + Catch All</h1>
      <div class="text-2xl mt-4">{{ formatDate(post.date) }}</div>
      <div>{{ post.rawExcerpt }}</div>
      <div>{{ post.featuredImage.node.sourceUrl}}</div>
      <article class="mt-4 space-y-2" v-html="post.content"></article>
    </main>
  </div>
</template>
