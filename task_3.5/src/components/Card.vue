<template>
    <div
        class="card"
        :style="{ borderColor: themeStore.borderColor, backgroundImage: `url(${cat.url})` }"
        @click.self="showModal"
    >
        <div
            class="favorite"
            :style="{
                backgroundImage: `url(${
                    cat.isFavorite
                        ? themeStore.favoritesCheckedIconUrl
                        : themeStore.favoritesIconUrl
                })`,
                backgroundColor: themeStore.headerColor,
                borderColor: themeStore.borderColor,
            }"
            @click="changeFavorite"
        ></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        themeStore: {
            type: Object,
            required: true,
        },
        cat: {
            type: Object,
            required: true,
        },
    },
    methods: {
        showModal() {
            this.$emit('showModal', this.cat.url);
        },
        changeFavorite() {
            this.cat.isFavorite = !this.cat.isFavorite;
        },
    },
});
</script>

<style scoped>
@import url(../assets/css/card.css);
</style>
