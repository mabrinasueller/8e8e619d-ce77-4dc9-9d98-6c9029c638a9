import { ref } from "vue";
import { useEventsStore } from "@/stores/events";
const store = useEventsStore();

export const addEvent = (id: string, title: string) => {
  store.cartItemCount += 1;
  store.cartEvents.push(id);
  store.cartTitles.push(title);

  updateEvents();
};

export const updateEvents = async () => {
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

export const filterEvents = async (inputValue: string) => {
  try {
    await store.fetchEvents(inputValue);
  } catch (error) {
    console.error("Error filtering events:", error);
  }
};
