<template>
    <header class="header block">
        <div class="wrapper">
            <button @click="theme.toggleTheme">{{ theme.currentTheme }}</button>
        </div>
    </header>
    <main class="cards">
        <div class="card"></div>
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
