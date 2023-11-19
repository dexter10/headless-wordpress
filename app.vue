<script setup lang="ts">
    useHead({
        htmlAttrs: {
            lang: 'en'
        },
        link: [
            {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon.png'
            }
        ]
    })
</script>

<template>
  <NuxtLoadingIndicator :height="5"/>
  <NuxtPage />
</template>