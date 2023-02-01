<template>
  <div>
    <div class="grid grid-cols-4 gap-10">
      <div class="col-span-2 grid-cols-1">
        <Basket v-if="showBasket" />
      </div>
      <Summary v-if="showBasket" class="col-span-2 grid-cols-4" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useBasket } from '../../stores/basket';

const { fetchItems } = useBasket();
const showBasket = ref(false);

async function getBasket() {
  console.log('eee');
  try {
    await fetchItems();
    showBasket.value = true;
  } catch (error) {
    console.error(error);
  }
}
await getBasket();
</script>
