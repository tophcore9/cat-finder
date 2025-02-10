<template>
    <button @click="counterStore.increment">{{ counterStore.count }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCounterStore } from '@/stores/counter.ts';

export default defineComponent({
    data() {
        return {
            counterStore: useCounterStore()
        }
    },
    methods: {

    },
});
</script>

<style scoped>

</style>
