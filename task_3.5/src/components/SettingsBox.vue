<template>
    <button
        class="settings-box"
        :style="{
            borderColor: themeStore.borderColor,
            backgroundImage: `url(${themeStore.settingsIconUrl})`,
            backgroundColor: themeStore.elementColor,
        }"
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
</style>