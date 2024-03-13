<template>
    <div class="homepage">
        <div class="container">
            <div class="section">
                <div class="section__content">
                    <h1 class="section__title">Let Your Home</h1>
                    <h1 class="section__title">Be Unique</h1>
                    <p class="section__text">There are many variations of the passages of
                        lorem Ipsum fromavailable, majority.</p>
                    <button class="section__btn">Get Started <img src="@/assets/img/arrow.svg" alt=""></button>
                </div>
            </div>
            <div class="subtitle">
                <div class="subtitle__box">
                    <h1 class="subtitle__title">Follow Our Projects</h1>
                    <p class="subtitle__text">It is a long established fact that a reader will be distracted by the of
                        readable content of page lookings at its layouts points.</p>
                </div>
            </div>
            <div class="homepage__productCards">
                <div class="productCard productCard__1"><img src="@/assets/img/card1.jpg">
                    <div class="productCardInfo">
                        <div class="productCardContent">
                            <h3 class="productCardTitle">Modern Kitchan</h3>
                            <p class="productCardText">Decor / Artchitecture</p>
                        </div>
                        <div><button class="productCardBtn"><img src="@/assets/img/Vector.svg" alt=""></button></div>
                    </div>

                </div>
                <div class="productCard productCard__4"><img src="@/assets/img/card4.jpg">
                    <div class="productCardInfo">
                        <div class="productCardContent">
                            <h3 class="productCardTitle">Modern Kitchan</h3>
                            <p class="productCardText">Decor / Artchitecture</p>
                        </div>
                        <div><button class="productCardBtn"><img src="@/assets/img/Vector.svg" alt=""></button></div>
                    </div>

                </div>
                <div class="productCard productCard__3"><img src="@/assets/img/card3.jpg">
                    <div class="productCardInfo">
                        <div class="productCardContent">
                            <h3 class="productCardTitle">Modern Kitchan</h3>
                            <p class="productCardText">Decor / Artchitecture</p>
                        </div>
                        <div><button class="productCardBtn"><img src="@/assets/img/Vector.svg" alt=""></button></div>
                    </div>

                </div>
                <div class="productCard productCard__2"><img src="@/assets/img/card2.jpg">
                    <div class="productCardInfo">
                        <div class="productCardContent">
                            <h3 class="productCardTitle">Modern Kitchan</h3>
                            <p class="productCardText">Decor / Artchitecture</p>
                        </div>
                        <div><button class="productCardBtn"><img src="@/assets/img/Vector.svg" alt=""></button></div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">

</script>

<style scoped>
.section {
    background-image: url(@/assets/img/ImageHomepage1.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    /* background-attachment: fixed; */
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 758px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 96px;
}

.section__title {
    font-family: "DM Serif Display", serif;
    font-size: 65px;
    font-weight: 400;
    color: #292F36;
}

.section__text {
    font-family: "Jost", sans-serif;
    font-size: 22px;
    color: #4D5053;
    font-weight: 400;
    margin: 18px 0 30px 0;
}

.section__content {
    margin-left: 60px;
    max-width: 434px;
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
    /* color: #292F36; */
    transition: all 0.3s;
    cursor: pointer;
}

.subtitle {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 94px;
}

.subtitle__box {
    max-width: 737px;
}

.subtitle__title {
    font-family: DM Serif Display;
    font-size: 50px;
    font-weight: 400;
    line-height: 63px;
    letter-spacing: 0.02em;
    text-align: center;
}

.subtitle__text {
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: center;
}

.homepage__productCards {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    margin-bottom: 96px;
}

.productCard {}

.productCardTitle {
    font-family: DM Serif Display;
    font-size: 25px;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0.02em;
    text-align: left;
}

.productCardText {
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: left;
}

.productCardInfo {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.productCardContent {
    margin-top: 20px;
}

.productCardBtn {
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 35px;
    border: none;
    background-color: #F4F0EC;
}

.productCardBtn:hover {
    background-color: #bababa;
    /* color: #292F36; */
    transition: all 0.3s;
    cursor: pointer;
}

.productCard__1 {
    padding: 0 50px 50px 0;
}

.productCard__2 {
    padding: 50px 0 0 50px;
}

.productCard__3 {
    padding: 50px 50px 0 0;
}

.productCard__4 {
    padding: 0 0 50px 50px;
}
</style>