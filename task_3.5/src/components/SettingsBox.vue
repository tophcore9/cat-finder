<template>
    <div
        class="settings-menu"
        v-if="isSettingsOpened"
    >
        <label class="label">
            Limit:
            <input
                type="number"
                name="limit"
                class="limit"
                placeholder="Count of cats"
                v-model="apiStore.limit"
                @input="apiStore.fetchCats()"
                :style="{
                    borderColor: themeStore.borderColor,
                    backgroundColor: themeStore.elementColor,
                    color: themeStore.textColor,
                }"
            />
        </label>

        <input
            class="favorites"
            :style="{ borderColor: themeStore.borderColor, backgroundImage: `url(${themeStore.favoritesCheckedIconUrl})`, backgroundColor: themeStore.elementColor }"
            :checked="apiStore.isFavorites"
            type="checkbox"
            @change="apiStore.toggleFavoriteCats"
        />
    </div>
    <input
        type="checkbox"
        class="settings-box"
        :style="{
            borderColor: isSettingsOpened ? themeStore.activeColor : themeStore.borderColor,
            backgroundImage: isSettingsOpened
                ? `url(${themeStore.settingsActiveIconUrl})`
                : `url(${themeStore.settingsIconUrl})`,
            backgroundColor: themeStore.elementColor,
        }"
        @change="openSettings"
    />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            isSettingsOpened: false,
        };
    },
    props: {
        themeStore: {
            type: Object,
            required: true,
        },
        apiStore: {
            type: Object,
            required: true,
        },
    },
    methods: {
        openSettings() {
            this.isSettingsOpened = !this.isSettingsOpened;
        },
    },
});
</script>

<style scoped>
@import url(../assets/css/settings_box.css);
</style>
