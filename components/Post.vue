<script setup lang="ts">

    // define the props that this component will accept
    const props = defineProps<{
        post: Record<'title' | 'date' | 'excerpt' | 'uri', string>
    }>();

    // Declare function from plugins/format-date.ts to avoid namespace conflicts
    const formatDate = useNuxtApp().$formatDate;

</script>

<template>
    <NuxtLink :to='post.uri'>
        <div class="flex
        items-center
        bg-gradient-to-r
        from-cyan-500
        to-blue-500
        p-8
        rounded-lg
        text-white
        transition-all
        duration-500
        hover:-translate-y-1
        hover:scale-105"
        >
            <div>
                <h2 class="font-bold text-2xl">{{ post.title }}</h2>
                <p>{{ formatDate(post.date) }}</p>
            </div>
        </div>
    </NuxtLink>
</template>