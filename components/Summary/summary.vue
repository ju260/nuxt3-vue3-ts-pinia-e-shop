<template>
  <div class="">
    <h2 class="text-xl">Récapitulatif</h2>
    <section class="bg-slate-300 px-2 py-2 text-left">
      <p>
        Total <strong>{{ total }} €</strong>
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useBasket } from '@/stores/basket';

const { items } = storeToRefs(useBasket());
const total = computed(() => items.value.reduce((prev, cur) => prev + cur.price?.base?.amount * cur.qty, 0));

</script>

