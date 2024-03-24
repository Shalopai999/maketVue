<template>
    <section class="project">
        <ProjectTags @activTags="activTags" />
        <ProjectCardsView :projects="projectPage" />
        <div class="project__count-page">
            <div class="project__count-page-wrap">
                <router-link class="project__count-page-number" v-for="page in totalPages" :key="`p${page}`"
                    :to="`/project/${page}`">
                    <p class="project__count-page-number-text">{{ page }}</p>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
import ProjectTags from '@/components/ProjectTags.vue';
import ProjectCardsView from '@/components/ProjectCardsView.vue';
export default {
    components: {
        ProjectTags,
        ProjectCardsView,
    },
    name: 'ProjectCards',

    data() {
        return {
            quantity: 8,
            projects: [],
            projectsOne: [
                {
                    id: 1,
                    image: 'project__item_1.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 2,
                    image: 'project__item_3.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 3,
                    image: 'project__item_5.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 4,
                    image: 'project__item_7.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 5,
                    image: 'project__item_2.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 6,
                    image: 'project__item_4.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 7,
                    image: 'project__item_6.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 8,
                    image: 'project__item_6.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 9,
                    image: 'project__item_4.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 10,
                    image: 'project__item_2.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 11,
                    image: 'project__item_7.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 12,
                    image: 'project__item_5.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 13,
                    image: 'project__item_3.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 14,
                    image: 'project__item_1.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 15,
                    image: 'project__item_6.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 16,
                    image: 'project__item_8.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                }
            ],
            projectsNew: [
                {
                    id: 1,
                    image: 'project__item_2.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 2,
                    image: 'project__item_4.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 3,
                    image: 'project__item_6.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 4,
                    image: 'project__item_8.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 5,
                    image: 'project__item_1.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 6,
                    image: 'project__item_3.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 7,
                    image: 'project__item_5.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 8,
                    image: 'project__item_7.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 9,
                    image: 'project__item_2.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 10,
                    image: 'project__item_4.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 11,
                    image: 'project__item_6.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 12,
                    image: 'project__item_8.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 13,
                    image: 'project__item_1.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 14,
                    image: 'project__item_3.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 15,
                    image: 'project__item_7.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 16,
                    image: 'project__item_5.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                }
            ],
            projectsTwo: [
                {
                    id: 1,
                    image: 'project__item_5.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 2,
                    image: 'project__item_2.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 3,
                    image: 'project__item_3.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 4,
                    image: 'project__item_4.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 5,
                    image: 'project__item_1.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 6,
                    image: 'project__item_6.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 7,
                    image: 'project__item_7.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 8,
                    image: 'project__item_8.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 9,
                    image: 'project__item_5.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 10,
                    image: 'project__item_2.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 11,
                    image: 'project__item_3.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 12,
                    image: 'project__item_4.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 13,
                    image: 'project__item_1.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 14,
                    image: 'project__item_6.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 15,
                    image: 'project__item_8.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                },
                {
                    id: 16,
                    image: 'project__item_7.jpg',
                    title: 'Minimal Bedroom',
                    text: 'Decor / Artchitecture',
                }
            ]
        }
    },

    created() {
        this.projects = this.projectsOne
    },

    methods: {
        activTags(data) {
            switch (data.id) {
                case 1:
                    this.projects = this.projectsTwo
                    break
                case 2:
                    this.projects = this.projectsOne
                    break
                case 3:
                    this.projects = this.projectsNew
                    break
                case 4:
                    this.projects = this.projectsNew
                    break
            }
        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.projects.length / this.quantity)
        },
        currentPage() {
            return this.$route.params.page || 1
        },
        projectPage() {
            const pageNumber = this.currentPage
            const startIndex = (pageNumber - 1) * this.quantity
            const endIndex = startIndex + this.quantity
            return this.projects.slice(startIndex, endIndex)
        }
    }
}
</script>

<style scoped>
.project__count-page {
    margin-top: 51px;
    margin-bottom: 200px;
    display: flex;
    justify-content: center;
}

.project__count-page-wrap {
    display: flex;
    gap: 20px;
}

.project__count-page-number {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    border: 1px #cda274 solid;
    width: 52px;
    height: 52px;
    border-radius: 52px;
}

.project__count-page-number-text {
    color: #292f36;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    text-transform: capitalize;
}

.project__count-page-number:hover {
    background: #f4f0ec;
    border: none;
    width: 54px;
    height: 54px;
}

.project__count-page-svg:hover {
    fill: #f4f0ec;
}

.project__count-page-svg circle {
    stroke: none;
}
</style>