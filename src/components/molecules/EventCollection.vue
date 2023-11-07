<template>
  <div>
    <div>
      <div class="event-card__container">
        <div v-for="(events, date) in store.groupedEvents" :key="date">
          <div class="event-card__date sticky" ref="headline">
            {{ formatDate(date) }}
          </div>
          <div class="event-card__wrapper">
            <EventComponent :events="events"></EventComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import EventComponent from "@/components/molecules/EventComponent.vue";
import { useEventsStore } from "@/stores/events";
import { formatDate } from "@/utils/dateUtils";

const store = useEventsStore();
const inputValue = ref("");

const filterEvents = async () => {
  await store.fetchEvents(inputValue.value);
};

onMounted(filterEvents);
</script>

<style lang="scss">
@import "@/scss/styles.scss";
</style>
