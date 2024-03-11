<template>
    <div class="footer">
        <div class="container">
            <div class="box__content">
                <div class="logo__info">
                    <a class="logo" href="#"><img src="@/assets/img/Logo1.svg" alt=""> Interno</a>
                    <p class="logo__text">It is a long established fact that a reader will be distracted lookings.</p>
                    <div class="logo__icons">
                        <a class="icon" href="#"><img src="@/assets/img/twit.svg" alt=""></a>
                        <a class="icon" href="#"><img src="@/assets/img/in.svg" alt=""></a>
                    </div>
                </div>
                <div class="pages">
                    <p class="title__pages">Pages</p>
                    <a class="page" href="#">Home</a>
                    <a class="page" href="#">Project</a>
                    <a class="page" href="#">Blog</a>
                </div>
                <div class="contact">
                    <p class="title__pages">Contact</p>
                    <p class="page">55 East Birchwood Ave. Brooklyn, New York 11201 </p>
                    <p class="page">contact@interno.com</p>
                    <p class="page">(123) 456 - 7890</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.footer {
    height: 320px;
}

.logo {
    font-size: 40px;
    color: #292F36;
    /* font-weight: 400; */
}

.logo__text {
    font-family: "Jost", sans-serif;
    font-size: 22px;
    color: #4D5053;
    font-weight: 400;
    margin: 18px 0 30px 0;
}

.icon {
    margin-right: 54px;
}

.logo__info {
    max-width: 400px;
}

.box__content {
    display: flex;
    justify-content: space-between;
}

.pages {
    display: flex;
    flex-direction: column;
    width: 240px;
    /* margin-left: 120px; */
}

.page {
    font-family: "Jost", sans-serif;
    font-size: 22px;
    color: #292F36;
    margin: 18px 0;
}

.title__pages {
    font-size: 25px;
}

.contact {
    width: 258px;
}
</style>