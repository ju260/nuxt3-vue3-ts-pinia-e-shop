<template>
  <div class="my-2 border-2 p-2">
    <span v-if="isProductSales"
      ><span class="text-sm"
        >remise de:<span class="font-bold"> -{{ percentage }}%</span></span
      ><br />
      <span class="text-sm"
        >ancien prix:
        <span class="font-bold">{{ oldPriceFormatted }}</span></span
      ><br />
      <span class="text-sm"
        >prix soldé:
        <span class="font-bold">{{ currentPriceFormatted }}</span></span
      ><br />
    </span>
    <span class="font-bold" v-else>{{ currentPriceFormatted }}</span>
  </div>
</template>

<script setup lang="ts">
import Product from '@/types/product';
import { useProductPrice } from '@/composables/useProductPrice';

interface Props {
  item: Product;
}
const props = defineProps<Props>();
const { oldPriceFormatted, percentage, isProductSales, currentPriceFormatted } =
  useProductPrice(props.item);
</script>
