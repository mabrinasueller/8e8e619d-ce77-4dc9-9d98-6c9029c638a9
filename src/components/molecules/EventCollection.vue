<template>
  <div>
    <div>
      <div class="event-card__container">
        <div v-for="(events, date) in store.groupedEvents" :key="date">
          <div class="event-card__date" ref="headline">
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
import { Event } from "../../types/types";
import EventComponent from "@/components/molecules/EventComponent.vue";
import { useEventsStore } from "@/stores/events";

const store = useEventsStore();
const inputValue = ref("");

const filterEvents = async () => {
  await store.fetchEvents(inputValue.value);
};

const formatDate = (inputDate: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  const dateParts: string[] = inputDate.split(".");
  const year: number = parseInt(dateParts[2], 10);
  const month: number = parseInt(dateParts[1], 10) - 1;
  const day: number = parseInt(dateParts[0], 10);

  const formattedDate: string = new Date(year, month, day).toLocaleDateString(
    "en-US",
    options
  );

  return formattedDate.toUpperCase().replace(/,/g, "");
};

onMounted(filterEvents);
</script>

<style lang="scss">
@import "@/scss/styles.scss";
</style>
