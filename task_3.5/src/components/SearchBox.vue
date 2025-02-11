<template>
    <input
        type="text"
        class="search-box"
        placeholder="Search by name"
        :style="{
            backgroundImage: `url(${themeStore.searchIconUrl})`,
            borderColor: themeStore.borderColor,
            backgroundColor: themeStore.elementColor,
        }"
    />
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
.search-box {
    padding-left: 32px;
    border-width: 1px;
    border-style: solid;
    height: 36px;
    width: 440px;
    border-radius: 20px;
    
    background-repeat: no-repeat;
    background-position: 8px center;
}
.search-box:focus {
    outline: 0;
    border: 1px solid #92540A !important;
}
</style>