<template>
    <button
        @click="themeStore.toggleTheme"
        class="theme-picker"
        :style="{ backgroundImage: `url(${themeStore.currentTheme.themeIconUrl})` }"
    ></button>
</template>

<script lang="ts">
import type { ThemeStore } from '@/stores/theme';
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
    props: {
        themeStore: {
            type: Object as PropType<ThemeStore>,
            required: true,
        },
    },
});
</script>

<style scoped>
.theme-picker {
    width: 70px;
    height: 36px;
    border: 0;
    background-color: transparent;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;

    opacity: 0.7;
}
.theme-picker:hover {
    cursor: pointer;
    opacity: 1;
}
</style>
