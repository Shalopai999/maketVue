<template>
    <div class="banner">
        <div class="banner__info">
            <h1 class="banner__info__title">Articles & News</h1>
            <p class="banner__info__text">Home / Blog</p>
        </div>

    </div>
</template>

<script>

</script>

<style scoped>
.banner {
    background-image: url("@/assets/img/projectDetailsBanner.jpg");
    height: 356px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 200px;
}

.banner__info {
    display: flex;
    background: #fff;
    padding: 40px 78px;
    border-radius: 36px 36px 0 0;
    flex-direction: column;
    align-items: center;
}

.banner__info__text {
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #4D5053;
}

.banner__info__title {
    font-size: 50px;
    font-weight: 400;
    line-height: 62.5px;
    text-align: left;
    color: #292F36;
}
</style>