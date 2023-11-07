import { defineStore } from "pinia";
import { fetchData } from "@/services/useApi";
import { Event } from "../types/types";

type CartEvents = string[];
type CartTitles = string[];

interface GroupedEvents {
  [date: string]: Event[];
}

export const useEventsStore = defineStore("events", {
  state: () => ({
    groupedEvents: {} as Record<string, Event[]>,
    cartItemCount: 0,
    cartEvents: [] as CartEvents,
    cartTitles: [] as CartTitles,
  }),
  actions: {
    async fetchEvents(inputValue = "") {
      try {
        const data = await fetchData();

        const groupedEventsData: GroupedEvents = data.reduce(
          (acc: GroupedEvents, event: Event) => {
            const date = new Date(event.date).toLocaleDateString();

            if (!acc[date]) {
              acc[date] = [];
            }

            if (
              !inputValue ||
              (event.title.toLowerCase().includes(inputValue.toLowerCase()) &&
                !this.cartEvents.some((cartEvent) => cartEvent === event._id))
            ) {
              acc[date].push(event);
            }

            return acc;
          },
          {} as GroupedEvents
        );

        const sortedGroupedEvents: GroupedEvents = Object.values(
          groupedEventsData
        )
          .flat()
          .sort((a, b) => {
            const dateA = new Date(a.date).getTime();
            const dateB = new Date(b.date).getTime();
            return dateA - dateB;
          })
          .reduce((acc: GroupedEvents, event: Event) => {
            const date = new Date(event.date).toLocaleDateString();
            if (!acc[date]) {
              acc[date] = [];
            }
            acc[date].push(event);
            return acc;
          }, {} as GroupedEvents);

        this.groupedEvents = sortedGroupedEvents;
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
});
