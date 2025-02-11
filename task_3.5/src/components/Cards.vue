<template>
    <div class="wrapper block cards">
        <Card
            :theme-store="themeStore"
            v-for="(cat, index) in cats"
            :key="index"
            :image-url="cat.url"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Card from '@/components/Card.vue';

export default defineComponent({
    components: {
        Card,
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
</style>
