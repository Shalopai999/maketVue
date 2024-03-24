<template>
    <div class="header">
        <div class="container">
            <div class="box_content">
                <div class="header__nav">
                    <div class="logo__left">
                        <a class="logo" href="#"><img src="@/assets/img/Logo1.svg" alt=""> Interno</a>
                    </div>
                    <nav>
                        <router-link class="logo__right" v-for="link in links" :key="link.id" :to="link.url">{{ link.title }}</router-link>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    id: 1,
                    title: "Home",
                    url: "/"
                },
                {
                    id: 2,
                    title: "Project",
                    url: "/project"
                },
                {
                    id: 3,
                    title: "Blog",
                    url: "/blog"
                },
            ]
        }
    },
}

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