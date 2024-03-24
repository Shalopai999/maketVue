<template>
    <Header />
    <BlogDetailsBanner />
    <div>
        <div class="container">
            <div class="blogDetails">
                <div class="blogDetails__allLeft">
                    <div class="blogDetails__left" v-for="article in filterArticle" :key="article.id">
                        <h1 class="blogDetails__title">Let’s Get Solution for Building
                            Construction Work</h1>
                        <!-- <img class="blogDetails__img" src="@/assets/img/blogDetails1.jpg" alt=""> -->
                        <img class="article__img" :src="require('@/assets/img/' + article.img)" :alt="article.img">
                        <!-- <div class="blogDetails__img1"></div> -->
                        <div class="blogDetails__dateBox">
                            <p class="blogDetails__date">26 December,2022 </p>
                            <p class="blogDetails__date">Interior / Home / Decore</p>
                        </div>
                        <p class="blogDetails__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                            turpmaximus.posuere in.Contrary to
                            popular belief.There are many variations of passages of Lorem Ipsum available, but the
                            majority
                            have
                            suffered alteration in some form, by injecthumour, or randomised words which don't look even
                            slightly believable.</p>
                        <p class="blogDetails__text">Embarrassing hidden in the middle of text. All the Lorem Ipsum
                            generators
                            on the Internet tend to
                            repeat predefined chunks as necessary.</p>
                        <div class="blogDetails__details">
                            <p class="blogDetails__detailsTitle">&#8221;</p>
                            <p class="blogDetails__detailsText">The details are not the details.
                                They make the design.</p>
                        </div>
                        <h1 class="blogDetails__title">Design sprints are great</h1>
                        <p class="blogDetails__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                            turpmaximus.posuere in.Contrary to
                            popular belief.There are many variations of passages of Lorem Ipsum available, but the
                            majority
                            have
                            suffered.</p>
                        <div>
                            <div class="blogDetails__section">
                                <p class="blogDetails__num">1</p>
                                <p class="blogDetails__text">Contrary to popular belief.There are many variations of
                                    passages of
                                    Lorem Ipsum available,
                                    but the majority have suffered.</p>
                            </div>
                            <div class="blogDetails__section">
                                <p class="blogDetails__num">2</p>
                                <p class="blogDetails__text">Contrary to popular belief.There are many variations of
                                    passages of
                                    Lorem Ipsum available,
                                    but the majority have suffered.</p>
                            </div>
                            <div class="blogDetails__section">
                                <p class="blogDetails__num">3</p>
                                <p class="blogDetails__text">Contrary to popular belief.There are many variations of
                                    passages of
                                    Lorem Ipsum available,
                                    but the majority have suffered.</p>
                            </div>
                        </div>
                        <!-- <img class="blogDetails__img" src="@/assets/img/blogDetails2.jpg" alt=""> -->
                        <div class="blogDetails__img2"></div>
                        <p class="blogDetails__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                            turpmaximus.posuere in.Contrary to
                            popular belief.There are many variations of passages of Lorem Ipsum available, but the
                            majority
                            have
                            suffered.</p>
                    </div>
                </div>
                <div class="tags">
                    <div class="tags__buttons-wrap">
                        <h2 class="tags__title">Tags</h2>
                        <div class="tags__buttons">
                            <button v-for="(btn, index) in buttonList" @click="filterClick(btn)"
                                class="tags__buttons-item" :key="index">{{ btn }}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import BlogDetailsBanner from '@/components/BlogDetailsBanner.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'BlogDetails',
    components: {
        BlogDetailsBanner,
        Header,
        Footer,
    },
    data() {
        return {
            findelement: '',
            contentsArticles: [
                {
                    id: 0,
                    title: 'Let’s Get Solution for Building Construction Work',
                    img: 'blogDetails1.jpg',
                    tag: 'Kitchen'
                },
                {
                    id: 1,
                    title: 'Low Cost Latest Invented Interior Designing Ideas.',
                    img: 'blogDetails2.jpg',
                    tag: 'Bedroom'
                },
            ],
            buttonList: [
                'Kitchen',
                'Bedroom',
                'Building',
                'Architecture',
                'Kitchen Planning',
                'Bedroom'
            ]
        }
    },

    methods: {
        filterClick(item) {
            this.findelement = item
        },
    },
    computed: {
        filterArticle() {
            return this.findelement
                ? this.contentsArticles.filter((el) => el.tag.includes(this.findelement))
                : this.contentsArticles
        },
    }
}
</script>

<style lang="scss" scoped>
.blogDetails {
    display: flex;
}

.blogDetails__allLeft {
    display: flex;
    flex-direction: column;
}

.blogDetails__left {
    max-width: 804px;
}

.blogDetails__text {
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #4D5053;
    margin-bottom: 34px;
}

.blogDetails__title {
    font-size: 50px;
    font-weight: 400;
    line-height: 62.5px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #292F36;
    margin-bottom: 20px;
}

.blogDetails__date {
    font-family: Jost;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #4D5053;
}

.blogDetails__section {
    display: flex;
}

.blogDetails__num {
    font-family: DM Serif Display;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #CDA274;
    margin-right: 14px;
}

.blogDetails__img1 {
    border-radius: 54px;
    margin-bottom: 46px;
    max-width: 804px;
    height: 540px;
    background-image: url("@/assets/img/blogDetails1.jpg");
}

.blogDetails__img2 {
    border-radius: 54px;
    margin-bottom: 46px;
    max-width: 804px;
    height: 366px;
    background-image: url("@/assets/img/blogDetails2.jpg");
}

.blogDetails__dateBox {
    display: flex;
    justify-content: space-between;
    margin-bottom: 48px;
}

.blogDetails__date {
    margin-right: 84px;
}

.blogDetails__details {
    top: 1075px;
    left: 1px;
    padding: 53px 0 53px 0;
    gap: 10px;
    border-radius: 50px;
    opacity: 0px;
    background-color: #F4F0EC;
    margin-bottom: 26px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.blogDetails__detailsTitle {
    font-size: 200px;
    font-style: italic;
    font-weight: 400;
    text-align: center;
    color: #CDA274;
    height: 133px;
    flex-shrink: 0;
    line-height: 125%;
    letter-spacing: 4px;
}

.blogDetails__detailsText {
    font-size: 25px;
    font-style: italic;
    font-weight: 400;
    line-height: 31.25px;
    letter-spacing: 0.02em;
    text-align: center;
    color: #CDA274;
    width: 45%;
}

.tags {
    margin-left: 52px;
}

.tags__buttons-wrap {
    width: 345px;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.tags__title {
    color: #292f36;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.5px;
}

.tags__buttons {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 10px;
}

.tags__buttons-item:hover {
    background-color: #292F36;
    color: #fff;
    transition: all 0.3s;
    cursor: pointer;
}

.tags__buttons-item {
    cursor: pointer;
    background: #f4f0ec;
    padding-top: 9px;
    padding-bottom: 9px;
    border-radius: 10px;
    border: none;
    color: #292f36;
    text-align: center;
    /* font-family: $familyText; */
    font-size: 18px;
    font-style: normal;
    /* font-weight: $font-400; */
    line-height: 125%;
    letter-spacing: 0.36px;
}
</style>