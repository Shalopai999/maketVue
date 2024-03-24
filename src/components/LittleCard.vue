<template>
    <div class="littleCard" v-for="card in filterListCards" :key="card.id">
        <div class="littleCardImg">
            <img class="littleCardImg" :src="require('@/assets/img/' + card.imageurl)" alt="img">
            <p class="littleCardDesign">{{ card.title }}</p>
        </div>
        <h2 class="littleCardTitle">{{ card.description }}</h2>
        <div class="littleCardMore">
            <p class="littleCardDate">{{ card.date }}</p>
            <button class="litleCardBtn"><img src="@/assets/img/Vector2.svg" alt=""></img></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LittleCard',
    props: ['quantity'],
    data() {
        return {
            cards: [
                {
                    id: 0,
                    imageurl: 'littleCard1.jpg',
                    title: 'Kitchan Design',
                    description: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022'
                },
                {
                    id: 1,
                    imageurl: 'littleCard2.jpg',
                    title: 'Living Design',
                    description: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '22 December,2022'
                },
                {
                    id: 2,
                    imageurl: 'littleCard3.jpg',
                    title: 'Interior Design',
                    description: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022'
                },
                {
                    id: 3,
                    imageurl: 'littleCard4.jpg',
                    title: 'Kitchan Design',
                    description: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022'
                },
                {
                    id: 4,
                    imageurl: 'littleCard5.jpg',
                    title: 'Living Design',
                    description: 'Low Cost Latest Invented Interior Designing Ideas.',
                    date: '22 December,2022'
                },
                {
                    id: 5,
                    imageurl: 'littleCard6.jpg',
                    title: 'Interior Design',
                    description: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022'
                },
            ]
        };
    },
    computed: {
        filterListCards() {
            return this.cards.filter((item) => item.id < this.quantity)
        }
    }
}
</script>

<style scoped>
.littleCard {
    padding: 16px;
    height: 521px;
    max-width: 382px;
    border-radius: 70px;
    border: 1px solid #F4F0EC;
    margin-bottom: 30px;
}

.littleCardImg {
    /* background-image: url(@/assets/img/littleCard1.jpg); */
    /* background-repeat: no-repeat; */
    /* background-position: center center; */
    /* background-attachment: fixed; */
    /* -webkit-background-size: cover; */
    /* -moz-background-size: cover; */
    /* -o-background-size: cover; */
    /* background-size: cover; */
    height: 340px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 16px;
    margin-top: 10px;
    border-radius: 50px 50px 0 0;
    max-height: 290px;
    position: relative;
}



.littleCardDesign {
    font-family: Jost;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.01em;
    text-align: left;
    position: absolute;
    top: 228px;
    left: 20px;
    border-radius: 8px 8px 8px 0px;
    background: #fff;
    padding: 8px 10px 8px 10px;
    color: #4d5053;
    font-size: 16px;
    font-style: normal;
    line-height: 150%;
    letter-spacing: 0.16px;
    text-transform: capitalize;
}

.littleCardTitle {
    /* font-family: DM Serif Display; */
    font-size: 25px;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0.02em;
    text-align: left;
    max-width: 285px;
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