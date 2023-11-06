<template>
  <header>
    <div class="header-input-group">
      <input type="text" placeholder="Search..." />
      <div class="search-icon">
        <font-awesome-icon :icon="faSearch" />
      </div>
      <div class="filter-icon">
        <font-awesome-icon :icon="faFilter" />
      </div>
    </div>
    <div class="cart-icon">
      <font-awesome-icon :icon="faShoppingCart" />
      <div class="cart-count">{{ cartItemCount }}</div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faSearch, faShoppingCart, faFilter);

const cartItemCount = ref(0);

const addItemToCart = () => {
  cartItemCount.value += 1;
};

const removeItemFromCart = () => {
  if (cartItemCount.value > 0) {
    cartItemCount.value -= 1;
  }
};
</script>

<style scoped lang="scss">
header {
  height: auto;
  background: #1481ba;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;

  .header-input-group {
    display: flex;
    align-items: center;
    position: relative;

    input {
      flex: 1;
      padding: 8px 12px 8px 36px;
      background-color: rgba(255, 255, 255, 0.2);
      border: none;
      outline: none;
      border-radius: 5px;

      &::placeholder {
        color: #fff;
      }
    }
    .search-icon {
      color: #fff;
      margin-left: 10px;
      position: absolute;
    }

    .filter-icon {
      color: #fff;
      margin-left: 10px;
    }
  }
  .cart-icon {
    color: #fff;
    display: flex;
    align-items: center;
    position: relative;
  }

  .cart-count {
    background-color: red;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    position: absolute;
    top: -8px;
    right: -8px;
  }
}
</style>
