<template>
    <Header />
    <div>
        <div class="notfound">
            <div class="notfound__content">
                <h1 class="notfound__title">404</h1>
                <p class="notfound__text">We are sorry, but the page you requested was not found</p>
                <router-link class="notfound__button" to="/">
                    <button class="section__btn">Back To Home<img src="@/assets/img/arrow.svg" alt=""></button>
                </router-link>
            </div>
            <img class="notfound__img" src="@/assets/img/404.jpg" alt="404">
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
    components: {
        Header,
    },
    name: 'NotFound'
}
</script>

<style scoped>
.notfound {
    padding-left: calc(50% - 1200px / 2);
    display: flex;
    gap: 81px;
    align-items: center;
}

.notfound__title {
    color: #CDA274;
    font-size: 250px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
}

.notfound__text {
    color: #292F36;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.35px;
    margin-top: 15px;
    margin-bottom: 23px;
}

.notfound__img {
    border-end-start-radius: 353px;
}

.section__btn {
    font-family: "Jost", sans-serif;
    font-size: 18px;
    color: #FFF;
    font-weight: 600;
    padding: 26px 48px;
    background-color: #292F36;
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #292F36;
}

.section__btn:hover {
    background-color: #808080;
    transition: all 0.3s;
    cursor: pointer;
}
</style>