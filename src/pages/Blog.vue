<template>
    <Header />
    <BlogBanner />
    <BlogLatestPost />
    <div>
        <div class="container">
            <h1 class="latestPostTitle">Articles & News</h1>
            <div class="articlesNews__cards">
                <LittleCard :quantity="6"></LittleCard>
            </div>
            <div class="BlogSwiper">
                <button class="litleCardBtn">01</img></button>
                <button class="litleCardBtn">02</img></button>
                <button class="litleCardBtn">03</img></button>
                <button class="litleCardBtn"><img src="@/assets/img/Vector2.svg" alt=""></img></button>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import LittleCard from '@/components/LittleCard.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import BlogBanner from '@/components/BlogBanner.vue';
import BlogLatestPost from '@/components/BlogLatestPost.vue';

export default {
    // name: 'Homepage',
    components: {
        LittleCard,
        Header,
        Footer,
        BlogBanner,
        BlogLatestPost,
    },
}

</script>

<style scoped>
.latestPostTitle {
    font-size: 50px;
    font-weight: 400;
    line-height: 62.5px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #292F36;
    margin-bottom: 26px;
}

.articlesNews__cards {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    justify-content: space-between;
}

.BlogSwiper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 200px;
}

.litleCardBtn {
    width: 52px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 26px;
    border: none;
    background-color: #fff;
    margin: 10px;
    border: 1px solid #F4F0EC;
    font-family: Jost;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;

}

.litleCardBtn:hover {
    background-color: #F4F0EC;
    transition: all 0.3s;
    cursor: pointer;
}
</style>