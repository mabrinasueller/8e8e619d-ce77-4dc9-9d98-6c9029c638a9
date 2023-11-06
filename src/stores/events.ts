import { defineStore } from "pinia";
import { reactive } from "vue";
import { fetchData } from "@/services/useApi";
import { Event } from "../types/types";
import { ref, computed } from "vue";
const api = fetchData();

export const useEventStore = defineStore("myStore", {
  state: () => ({
    // Define your store state here
  }),
  actions: {
    // Define your store actions here
  },
});
