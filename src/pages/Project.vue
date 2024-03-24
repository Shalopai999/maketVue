<template>
    <Header />
    <ProjectBanner />
    <ProjectCards />
    <Footer />
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ProjectBanner from '@/components/ProjectBanner.vue';
import ProjectCards from '@/components/ProjectCards.vue';

export default {
    name: 'Homepage',
    components: {
        Header,
        Footer,
        ProjectBanner,
        ProjectCards,
    },
}

</script>

<style scoped>

</style>