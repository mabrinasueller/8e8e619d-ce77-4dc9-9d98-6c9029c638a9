<template>
  <input
    type="text"
    @input="handleInput"
    class="input"
    placeholder="Search"
    onfocus="this.placeholder=''"
    onblur="this.placeholder='Type'"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useEventsStore } from "@/stores/events";

const inputValue = ref("Search");
const store = useEventsStore();

const handleInput = (event: any) => {
  inputValue.value = event.target.value;

  filterEvents(inputValue.value);
};

const filterEvents = async (inputValue: string) => {
  try {
    await store.fetchEvents(inputValue);
  } catch (error) {
    console.error("Error filtering events:", error);
  }
};
</script>

<style scoped lang="scss">
@import "@/scss/styles.scss";
</style>
