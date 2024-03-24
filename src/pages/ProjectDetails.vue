<template>
    <Header />
    <ProjectDetailsBanner />
    <div>
        <div class="container center">
            <div class="projectDetails__content">
                <h1 class="projectDetails__content__title">Minimal Look Bedrooms</h1>
                <p class="projectDetails__content__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquamsem vitae turpis dignissim maximus.
                    Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent
                    at
                    nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum
                    commodo.
                </p>
                <p class="projectDetails__content__text">In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras
                    amet tellus lectus. Vivamus ipsum nunc,
                    mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante
                    vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin
                    tincidunt ligula id purus porttitor.</p>
            </div>
            <ProjectDetailsSwiper />
        </div>
    </div>
    <Footer />
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import ProjectDetailsBanner from '@/components/ProjectDetailsBanner.vue';
import ProjectDetailsSwiper from '@/components/ProjectDetailsSwiper.vue';

export default {
    name: 'ProjectDetails',
    components: {
        Header,
        Footer,
        ProjectDetailsBanner,
        ProjectDetailsSwiper,
    },
}

</script>

<style scoped>
.projectDetails__content {
    width: 658px;
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
}

.projectDetails__content__title {
    font-family: DM Serif Display;
    font-size: 50px;
    font-weight: 400;
    line-height: 62.5px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #292F36;
    margin-bottom: 12px;
}

.projectDetails__content__text {
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #4D5053;
    margin-bottom: 26px;
}

.center {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>