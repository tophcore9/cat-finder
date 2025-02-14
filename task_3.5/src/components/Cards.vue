<template>
    <div class="wrapper cards">
        <Card
            :theme="theme"
            :api-store="apiStore"
            v-for="(item, index) in items"
            :key="index"
            :cat="item"
            @showModal="showModal"
        />

        <h2 v-if="items?.length === 0">There are no cats :&lpar;</h2>

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
import { defineComponent, type PropType } from 'vue';
import Card from '@/components/Card.vue';
import type ThemeStore from '@/stores/theme';
import type { CatsStore } from '@/stores/catsAPI';

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
        theme: {
            type: Object as PropType<ThemeStore>,
            required: true,
        },
        items: {
            type: Array<Object>,
            required: false,
        },
        apiStore: {
            type: Object as PropType<CatsStore>,
            required: true,
        },
    },
    methods: {
        showModal(image: string) {
            /* Show a modal window with the picture of the cat */
            this.currentImage = image;
            this.isModalShown = !this.isModalShown;
        },
    },
});
</script>

<style scoped>
@import url(../assets/css/cards.css);
</style>
