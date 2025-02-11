<template>
    <header
        class="header"
        :style="{ backgroundColor: theme.headerColor }"
    >
        <div class="wrapper block header-content">
            <div class="header-sub_content">
                <img
                    :src="theme.logoUrl"
                    alt="Logo not found"
                />
                <input type="text" class="search-box" placeholder="Search by name" :style="{backgroundImage: `url(${theme.searchIconUrl})`, borderColor: theme.borderColor, backgroundColor: theme.elementColor}">
                <button class="settings-box" :style="{borderColor: theme.borderColor, backgroundImage: `url(${theme.settingsIconUrl})`, backgroundColor: theme.elementColor}"></button>
            </div>
            <button
                @click="theme.toggleTheme"
                class="theme-picker"
                :style="{ backgroundImage: `url(${theme.themeIconUrl})` }"
            ></button>
        </div>
    </header>
    <main
        class="main"
        :style="{ backgroundColor: theme.bodyColor }"
    >
        <div class="wrapper block cards">
            <div
                class="card"
                :style="{ borderColor: theme.borderColor, backgroundColor: theme.elementColor }"
                v-for="(card, index) in cards"
                :key="index"
            ></div>
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useThemeStore } from '@/stores/theme';

export default defineComponent({
    data() {
        return {
            theme: useThemeStore(),
            cards: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
        };
    },
    methods: {},
});
</script>

<style>
@import url(./assets/css/main.css);
</style>
