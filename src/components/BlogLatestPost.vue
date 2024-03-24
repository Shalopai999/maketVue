<template>
    <div>
        <div class="container">
            <h1 class="latestPostTitle">Latest Post</h1>
            <div class="latestPost">
                <div class="latestPost__img"></div>
                <div class="latestPost__info">
                    <h1 class="latestPost__info__title">Low Cost Latest Invented Interior Designing Ideas</h1>
                    <p class="latestPost__info__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
                        dignissim maximus.posuere
                        in.Contrary to popular belief.</p>
                    <p class="latestPost__info__text">Lorem Ipsum is not simply random text. It has roots in a piece of
                        classica.</p>
                    <div class="latestPost__info__footer">
                        <p class="littleCardDate">26 December,2022 </p>
                        <router-link to="/blogDetails" class="litleCardBtn">
                            <img src="@/assets/img/Vector2.svg" alt="row_left_blog">
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

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

.latestPost {
    border-radius: 70px;
    border: 1px solid #F4F0EC;
    margin-bottom: 150px;
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: space-between;
}

.latestPost__img {
    background-image: url(@/assets/img/LatestPost.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 478px;
    width: 569px;
    margin: 24px;
}

.latestPost__info {
    margin: 65px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.latestPost__info__title {
    font-family: DM Serif Display;
    font-size: 25px;
    font-weight: 400;
    line-height: 31.25px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #292F36;
    margin-bottom: 22px;
}

.latestPost__info__text {
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #4D5053;
    margin-bottom: 40px;
}

.latestPost__info__footer {
    display: flex;
    justify-content: space-between;
}

.littleCardDate {
    font-family: Jost;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #4D5053;
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