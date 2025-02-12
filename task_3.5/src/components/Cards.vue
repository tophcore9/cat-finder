<template>
    <div class="wrapper block cards">
        <Card
            :theme-store="themeStore"
            v-for="(cat, index) in cats"
            :key="index"
            :image-url="cat.url"
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
.cards {
    height: 100%;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr) auto;
    gap: 32px;
}

.modal {
    position: absolute;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
}

.image {
    border-radius: 20px;
}

.image-wrapper {
    width: 100vw;
    height: calc(100vh + 124px);
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    position: fixed;
}
</style>
