<template>
    <header class="header" :style="{backgroundColor: theme.headerColor}">
        <div class="wrapper block">
            <button @click="theme.toggleTheme">{{ theme.currentTheme }}</button>
        </div>
    </header>
    <main class="main cards" :style="{backgroundColor: theme.bodyColor}">
        <div class="wrapper block">
            <div class="card"></div>
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useThemeStore } from '@/stores/theme';

export default defineComponent({
    data() {
        return {
            theme: useThemeStore()
        }
    },
    methods: {

    },
});
</script>

<style>
@import url(./assets/css/main.css);
</style>
