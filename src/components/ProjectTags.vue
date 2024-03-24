<template>
    <div class="project__tags">
        <div class="project__tags-wrap">
            <div :class="{ active: tags.activTags }" class="project__tags-button"
                v-for="tags in tagsList" :key="tags.id" @click="isActive(tags)">{{
                    tags.nameTags }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectTags',

    data() {
        return {
            tagsList: [
                {
                    id: 1,
                    nameTags: 'Bathroom',
                    activTags: false,
                },
                {
                    id: 2,
                    nameTags: 'Bed Room',
                    activTags: false,
                },
                {
                    id: 3,
                    nameTags: 'Kitchan',
                    activTags: true,
                },
                {
                    id: 4,
                    nameTags: 'Living Area',
                    activTags: false,
                },
            ]
        }
    },

    methods: {
        isActive(data) {
            this.tagsList.forEach(element => {
                element.activTags = false
            })
            this.tagsList[data.id - 1].activTags = true
            this.$emit('activTags', data)
            return this.tagsList[data.id - 1].activTags
        }
    }

}
</script>

<style scoped>
.project__tags {
    margin-top: 200px;
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.project__tags-wrap {
    border-radius: 24px;
    width: 840px;
    border: 1px solid #CDA274;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 63px;
}

.project__tags-button {
    cursor: pointer;
    padding: 26px 66px;
    margin-left: -66px;
    margin-right: -66px;
    color: #292F36;
    text-align: center;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 125%;
    letter-spacing: 0.36px;
}

.project__tags-button:hover {
    color: #FFF;
    border-radius: 24px;
    background: #CDA274;
}

.active {
    color: #FFF;
    border-radius: 24px;
    background: #CDA274;
}
</style>