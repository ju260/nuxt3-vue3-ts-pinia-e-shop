<template>
  <div class="border-b-1 text-left" v-if="item">
    <article class="flex">
      <div class="relative mr-2 flex w-7/12 justify-center">
        <Product-item-image
          class="absolute max-h-full object-contain"
          :srcset-obj="item.images[0]"
        />
      </div>
      <div>
        <p>
          <span class="text-base underline">ref: {{ item.reference }}</span>
        </p>
        <h3>{{ item.name }}</h3>
        <p>
          <Product-item-price :item="item" />
        </p>
        <div class="flex">
          <button
            data-test="removeQty"
            class="rounded border border-blue-500 bg-transparent py-1 px-1 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
            @click="removeQty"
          >
            -
          </button>
          <input
            class="w-10 text-center"
            type="number"
            min="1"
            :value="itemQty"
            disabled
          />
          <button
            data-test="addQty"
            class="rounded border border-blue-500 bg-transparent py-1 px-1 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
            @click="addQty"
          >
            +
          </button>
        </div>
        <button
          data-test="delete"
          class="mt-2 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          @click="removeItem(item.reference)"
        >
          Supprimer
        </button>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect, onMounted } from 'vue';
import { useBasket } from '@/stores/basket';
import Product from '@/types/product';

const {
  deleteItem: deleteBasketItem,
  updateItem: updateItemQuantity,
  items: getItems,
} = useBasket();

const itemQty = ref<number>(0);

interface Props {
  item: Product;
}

const props = defineProps<Props>();

function addQty() {
  itemQty.value++;
}
function removeQty() {
  itemQty.value > 1 && itemQty.value--;
}

async function removeItem(itemRef: string) {
  try {
    await deleteBasketItem({ itemRef });
  } catch (err) {
    console.error('deleteItem error', err);
  }
}

const getOrderItems = computed(() => getItems);

onMounted(() => {
  itemQty.value = props.item?.qty;
});

watchEffect(async () => {
  try {
    const patch = { qty: itemQty.value };
    await updateItemQuantity({
      itemRef: props.item?.reference,
      patch,
    });
  } catch (error) {
    console.error(error);
  }
});
</script>
