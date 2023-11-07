<template>
  <header>
    <div class="header-input-group">
      <InputSearch></InputSearch>
      <div class="search-icon">
        <font-awesome-icon :icon="faSearch" />
      </div>
      <div class="filter-icon">
        <font-awesome-icon :icon="faFilter" />
      </div>
    </div>
    <ShoppingCart></ShoppingCart>
  </header>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import InputSearch from "@/components/molecules/InputSearch.vue";
import ShoppingCart from "@/components/molecules/ShoppingCart.vue";

library.add(faSearch, faFilter);
</script>

<style scoped lang="scss">
@import "@/scss/header.scss";
</style>
