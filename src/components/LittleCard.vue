<template>
    <div class="littleCard">
        <div class="littleCardImg">
            <div class="littleCardDesign">Kitchan Design</div>
        </div>
        <div class="littleCardTitle">Let’s Get Solution For Building Construction Work</div>
        <div class="littleCardMore">
            <div class="littleCardDate">26 December,2022</div>
            <button class="litleCardBtn"><img src="@/assets/img/Vector2.svg" alt=""></img></button>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.littleCard {
    padding: 21px;
    height: 521px;
    max-width: 382px;
    border-radius: 70px;
    border: 1px solid #F4F0EC;
}

.littleCardImg {
    background-image: url(@/assets/img/littleCard1.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    /* background-attachment: fixed; */
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 340px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 16px;
    border-radius: 50px 50px 0 0;
    max-height: 290px;
}



.littleCardDesign {
    font-family: Jost;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.01em;
    text-align: left;
}

.littleCardTitle {
    font-family: DM Serif Display;
    font-size: 25px;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0.02em;
    text-align: left;
    max-width: 305px;
    margin-bottom: 20px;
}

.littleCardDate {
    font-family: Jost;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.01em;
    text-align: left;
}

.littleCardMore {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    /* color: #292F36; */
    transition: all 0.3s;
    cursor: pointer;
}
</style>