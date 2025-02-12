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
                        ? themeStore.favoritesActiveIconUrl
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
        apiStore: {
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
            if (this.cat.isFavorite) this.apiStore.addFavorite(this.cat);
            else this.apiStore.removeFavorite(this.cat.id);
        },
    },
});
</script>

<style scoped>
@import url(../assets/css/card.css);
</style>
