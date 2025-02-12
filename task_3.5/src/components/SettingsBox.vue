<template>
    <button
        class="settings-box"
        :style="{
            borderColor: isSettingsOpened ? '#FFC682' : themeStore.borderColor,
            backgroundImage: isSettingsOpened
                ? `url(/src/assets/icons/settings-clicked.svg)`
                : `url(${themeStore.settingsIconUrl})`,
            backgroundColor: themeStore.elementColor,
        }"
        @click="openSettings"
    ></button>
    <div v-if="isSettingsOpened">
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
                color: themeStore.textColor
            }"
        />
        <input
            type="checkbox"
            @change="apiStore.toggleFavoriteCats"
        />
    </div>
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
.settings-box {
    width: 36px;
    height: 36px;

    border-width: 1px;
    border-style: solid;
    border-radius: 50%;

    background-repeat: no-repeat;
    background-position: center;

    opacity: 0.7;
}
.settings-box:hover {
    cursor: pointer;
    opacity: 1;
}

.limit {
    padding-left: 16px;

    height: 36px;
    width: min-content;

    border-width: 1px;
    border-style: solid;
    border-radius: 20px;
}
.limit:focus {
    outline: 0;
    border: 1px solid #ffc682 !important;
}
</style>
