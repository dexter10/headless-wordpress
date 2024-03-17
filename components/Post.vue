<script setup lang="ts">

const { post } = defineProps(['post']);

// Declare function from plugins/format-date.ts to avoid namespace conflicts
const formatDate = useNuxtApp().$formatDate;

const featuredImage = post.featuredImage.node.sourceUrl;
const featuredImageURL = featuredImage.replace(/^.*\/\/[^\/]+/, '')

</script>

<template>
    <NuxtLink :to='post.uri'>
        <div class="flex
        items-center
        bg-white
        mx-3
        p-8
        rounded-lg
        shadow-xl
        transition-all
        duration-500
        hover:-translate-y-1
        hover:scale-105">
            <div class="max-w-full">
                <NuxtImg provider="wordpress" :src="featuredImageURL" loading="lazy" class="mb-2" />
                <h2 class="font-semibold text-2xl">{{ post.title }}</h2>
                <p>{{ formatDate(post.date) }}</p>
                <p>{{ post.rawExcerpt }}</p>
            </div>
        </div>
    </NuxtLink>
</template>