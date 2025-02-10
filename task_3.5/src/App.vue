<template>
    <header class="header">
        <button @click="theme.toggleTheme">{{ theme.currentTheme }}</button>
    </header>
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

<style scoped>

</style>
