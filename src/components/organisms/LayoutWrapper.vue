<template>
  <div class="layout-wrapper">
    <HeaderComponent>
      <RouterLink to="/"> </RouterLink>
    </HeaderComponent>
    <main>
      <EventCollection></EventCollection>
    </main>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/molecules/HeaderComponent.vue";
import EventCollection from "@/components/molecules/EventCollection.vue";
</script>

<style scoped lang="scss">
@import "@/scss/styles.scss";
</style>
