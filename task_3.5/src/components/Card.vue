<template>
    <div
        class="card"
        :style="{ borderColor: themeStore.borderColor, backgroundImage: `url(${imageUrl})` }"
        @click="showModal"
    >
        <div
            class="favorite"
            :style="{
                backgroundImage: `url(${themeStore.favoritesIconUrl})`,
                backgroundColor: themeStore.headerColor,
                borderColor: themeStore.borderColor,
            }"
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
        imageUrl: {
            type: String,
            required: true,
        },
    },
    methods: {
        showModal() {
            this.$emit('showModal', this.imageUrl);
        },
    },
});
</script>

<style scoped>
.card {
    min-height: 325px;

    border-width: 1px;
    border-style: solid;
    border-radius: 8px;

    position: relative;

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
.card:hover {
    cursor: pointer;
}

.favorite {
    width: 36px;
    height: 36px;

    border-radius: 50%;
    border-width: 1px;
    border-style: solid;

    background-position: center;
    background-repeat: no-repeat;

    position: absolute;
    top: 15px;
    right: 15px;
}
.favorite:hover {
    cursor: pointer;
    background-image: url(../assets/icons/favorites-hovered.svg) !important;
}
</style>
