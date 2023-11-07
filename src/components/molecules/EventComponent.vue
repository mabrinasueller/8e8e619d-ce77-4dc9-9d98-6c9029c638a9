<template>
  <div v-for="event in events" :key="event._id" class="event-card__item">
    <div class="event-card__name-wrapper">
      <div class="event-card__name">
        <img
          src="../../assets/event-avatar.jpg"
          alt="Event avatar"
          class="event-card__avatar"
        />
        <div v-if="event.title">{{ event.title }}</div>
      </div>
    </div>
    <div v-if="!imageError" class="event-card__image-wrapper">
      <img
        :src="event.flyerFront"
        alt="Event Flyer"
        @error="handleImageError"
        class="event-card__image"
        loading="lazy"
      />
    </div>
    <div v-if="imageError">
      <img
        src="../../assets/event-placeholder-image.png"
        alt="Event flyer placeholder"
        class="event-card__avatar"
      />
    </div>
    <div class="event-card__info">
      <a :href="event.venue.direction" target="_blank">
        <div class="event-card__location">
          <svg
            height="24px"
            width="24px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xml:space="preserve"
          >
            <path
              style="fill: #1481ba"
              d="M87.084,192c-0.456-5.272-0.688-10.6-0.688-16C86.404,78.8,162.34,0,256.004,0s169.6,78.8,169.6,176
      c0,5.392-0.232,10.728-0.688,16h0.688c0,96.184-169.6,320-169.6,320s-169.6-223.288-169.6-320H87.084z M256.004,224
      c36.392,1.024,66.744-27.608,67.84-64c-1.096-36.392-31.448-65.024-67.84-64c-36.392-1.024-66.744,27.608-67.84,64
      C189.26,196.392,219.612,225.024,256.004,224z"
            />
          </svg>
          <div v-if="event.venue.name">
            <strong>{{ event.venue.name }}</strong>
          </div>
        </div>
      </a>
      <div class="event-card__time">
        <div v-if="event.startTime">
          <strong>Starts:</strong> {{ formatDateTime(event.startTime) }}
        </div>
        <div v-if="event.endTime">
          <strong>Ends:</strong> {{ formatDateTime(event.endTime) }}
        </div>
      </div>
      <div class="event-card__add" @click="addEvent(event._id, event.title)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="50px"
          height="50px"
          class="event-card__plus-icon"
        >
          <path
            style="fill: #1481ba"
            d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M37,26H26v11h-2V26H13v-2h11V13h2v11h11V26z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import { useEventsStore } from "@/stores/events";

const store = useEventsStore();
let imageError = ref(false);

const props = defineProps({
  events: Array,
});

const addEvent = (id: string, title: string) => {
  store.cartItemCount += 1;
  store.cartEvents.push(id);
  store.cartTitles.push(title);

  updateEvents();
};

const updateEvents = async () => {
  const eventsToRemove = store.cartEvents;
  try {
    for (const date in store.groupedEvents) {
      store.groupedEvents[date] = store.groupedEvents[date].filter(
        (event) => !eventsToRemove.includes(event._id)
      );
    }
  } catch (error) {
    console.log("error", error);
  }
};

const formatDateTime = (dateTime: string): string => {
  const date = new Date(dateTime);
  const formattedDate = date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const formattedTime = date.toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return `${formattedDate}, ${formattedTime}`;
};
</script>
