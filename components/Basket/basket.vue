<template>
  <div class="">
    <ul class="grid gap-10">
      <li
        class=""
        v-for="(item, indexItem) in items"
        :key="`item__${indexItem}`"
      >
        <Product-item :item="item" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useBasket } from '@/stores/basket';

const store = useBasket();
const { items } = storeToRefs(store);
</script>
