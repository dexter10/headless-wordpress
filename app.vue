<script setup lang="ts">
// Get route info in app.vue
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const $route = useRoute();
const $router = useRouter();

onMounted(async () => {
    await $router.isReady();
    const query = $route.name;
    console.log($route.name);
    return query
});

// Replace with social icons from Harlan
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
    <Html dir="ltr">

    <Head>
        <SeoHead :bodyClass?="$route.name" />
    </Head>

    <Body class="bg-gray-500 text-gray-800 dark:text-gray-600 antialiased">
        <!-- <LoadingTime></LoadingTime> -->
        <NuxtLoadingIndicator :height="5" />
        <NuxtPage />
    </Body>

    </Html>
</template>