<template>
  <div class="cart-icon" @click="showCart">
    <font-awesome-icon :icon="faShoppingCart" />
    <div class="cart-count">{{ store.cartItemCount }}</div>
    <div
      class="cart-container"
      v-show="isCartVisible"
      :class="cartContainerClass"
    >
      <div v-if="store.cartItemCount > 0">
        <ul>
          <li v-for="title in store.cartTitles" :key="title">
            {{ title }}
          </li>
        </ul>
      </div>
      <p v-else>Your cart is empty.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useEventsStore } from "@/stores/events";

const store = useEventsStore();

library.add(faShoppingCart);

let isCartVisible = ref(false);

const cartContainerClass = computed(() => {
  return isCartVisible.value ? "cart-container block" : "cart-container";
});

const showCart = () => {
  isCartVisible.value = !isCartVisible.value;
};
</script>

<style type="scss">
@import "@/scss/shopping-cart.scss";
</style>
