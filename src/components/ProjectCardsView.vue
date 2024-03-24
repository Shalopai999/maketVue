<template>
    <div class="container">
        <div class="project__items">
            <div class="project__item" v-for="project in projects" :key="project.id">
                <img class="project__item-img" :src="require('@/assets/img/' + project.image)" alt="">
                <div class="project__item-wrap">
                    <div class="project__item-wrap-text">
                        <h2 class="project__item-title">{{ project.title }}</h2>
                        <p class="project__item-text">{{ project.text }}</p>
                    </div>
                    <router-link to="/projectDetails" class="litleCardBtn">
                        <img src="@/assets/img/Vector2.svg" alt="row_left_blog">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectCardsView',
    props: ['projects'],
}
</script>

<style scoped>
.project__items {
    margin-top: 61px;
    margin-bottom: 61px;
    column-count: 2;
}

.project__item {
    padding-bottom: 27px;
    display: inline-block;
}

.project__item-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
}

.litleCardBtn {
    width: 52px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 26px;
    border: none;
    background-color: #F4F0EC;
}

.litleCardBtn:hover {
    background-color: #bababa;
    transition: all 0.3s;
    cursor: pointer;
}
</style>