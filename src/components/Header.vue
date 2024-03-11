<template>
    <div class="header">
        <div class="container">
            <div class="box_content">
                <div class="header__nav">
                    <div class="logo__left">
                        <a class="logo" href="#"><img src="@/assets/img/Logo1.svg" alt=""> Interno</a>
                    </div>
                    <div>
                        <a class="logo__right" href="">Home</a>
                        <a class="logo__right" href="">Project</a>
                        <a class="logo__right" href="">Blog</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.header {
    height: 160px;
}

.header__nav {
    height: 160px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 48px;
    color: #292F36;
    font-weight: 400;
}

.logo__right {
    font-size: 20px;
    color: #292F36;
    font-weight: 400;
    margin-left: 40px;
}
</style>