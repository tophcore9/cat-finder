<template>
    <div
        class="card"
        :style="{ borderColor: theme.borderColor, backgroundImage: `url(${cat.url})` }"
        @click.self="showModal"
    >
        <div
            class="favorite"
            :style="{
                backgroundImage: `url(${
                    cat.isFavorite ? theme.favoritesActiveIconUrl : theme.favoritesIconUrl
                })`,
                backgroundColor: theme.headerColor,
                borderColor: theme.borderColor,
            }"
            @click="changeFavorite"
        ></div>
    </div>
</template>

<script lang="ts">
import type { Cat, CatsStore } from '@/stores/catsAPI';
import type Theme from '@/stores/theme';
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
    props: {
        theme: {
            type: Object as PropType<Theme>,
            required: true,
        },
        apiStore: {
            type: Object as PropType<CatsStore>,
            required: true,
        },
        cat: {
            type: Object as PropType<Cat>,
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
