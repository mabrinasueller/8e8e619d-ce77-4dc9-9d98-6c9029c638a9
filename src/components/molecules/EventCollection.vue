<template>
  <div>
    <!-- <button @click="getData">Get Data</button> -->
    <div>
      <div v-if="responseData" class="event-card__container">
        <div v-for="(events, date) in groupedEvents" :key="date">
          <h2>{{ date }}</h2>
          <p>{{ events }}</p>
          <EventComponent :event="events"></EventComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { fetchData } from "@/services/useApi";
import { Event } from "../../types/types";
import EventComponent from "@/components/molecules/EventComponent.vue";

const responseData = ref<Event[]>([]);

const groupedEvents = ref<Record<string, Event[]>>({});

onMounted(async () => {
  const data = await fetchData();

  const groupedEventsData: Record<string, Event[]> = data.reduce(
    (acc: Record<string, Event[]>, event: Event) => {
      const date = new Date(event.date).toLocaleDateString();

      if (!acc[date]) {
        acc[date] = [];
      }

      acc[date].push(event);

      return acc;
    },
    {}
  );

  console.log(typeof groupedEvents.value);

  const flattenedEvents: Event[] = Object.values(groupedEvents).reduce(
    (acc, events) => {
      return acc.concat(events);
    },
    []
  );

  flattenedEvents.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateA - dateB;
  });

  groupedEvents.value = groupedEventsData;
});
</script>

<style lang="scss">
@import "@/scss/styles.scss";
</style>
