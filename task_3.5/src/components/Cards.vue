<template>
    <div class="wrapper block cards">
        <Card
            :theme-store="themeStore"
            v-for="(cat, index) in cats"
            :key="index"
            :cat="cat"
            @showModal="showModal"
        />

        <div
            class="modal"
            v-if="isModalShown"
            @click="isModalShown = false"
        >
            <div class="image-wrapper">
                <img
                    :src="currentImage"
                    class="image"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from '@/components/Card.vue';

export default defineComponent({
    components: {
        Card,
    },
    data() {
        return {
            isModalShown: false,
            currentImage: '',
        };
    },
    props: {
        themeStore: {
            type: Object,
            required: true,
        },
        cats: {
            type: Object,
            required: false,
        },
    },
    methods: {
        showModal(image: string) {
            this.currentImage = image;
            this.isModalShown = !this.isModalShown;
        },
    },
});
</script>

<style scoped>
@import url(../assets/css/cards.css);
</style>
