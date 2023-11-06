<template>
  <div class="layout-wrapper">
    <HeaderComponent>
      <RouterLink to="/"> </RouterLink>
    </HeaderComponent>
    <main>
      <slot />
      <EventCollection></EventCollection>
    </main>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/molecules/HeaderComponent.vue";
import EventCollection from "@/components/molecules/EventCollection.vue";
import DateComponent from "@/components/molecules/DateComponent.vue";
</script>

<style scoped lang="scss">
.layout-wrapper {
  position: relative;
  min-height: 100vh;
  margin-inline: auto;
  overflow: hidden;
}
</style>
