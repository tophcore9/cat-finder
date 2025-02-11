<template>
    <button
        @click="themeStore.toggleTheme"
        class="theme-picker"
        :style="{ backgroundImage: `url(${themeStore.themeIconUrl})` }"
    ></button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        themeStore: {
            type: Object,
            required: true,
        },
    },
});
</script>

<style scoped>
.theme-picker {
    width: 73px;
    height: 38px;
    border: 0;
    background-color: transparent;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    opacity: 0.7;
}
.theme-picker:hover {
    cursor: pointer;
    opacity: 1;
}
</style>
