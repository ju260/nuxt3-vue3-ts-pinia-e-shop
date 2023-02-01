<template>
  <img
    :srcset="srcsetDefinition"
    :src="srcsetObj.medium"
    alt="description image"
  />
</template>

<script setup lang="ts">
import mapSrcSetImage from '@/assets/mapSrcSetImage.json';
import { computed } from 'vue';

const srcsetDefinition = computed(() => {
  const tab = [];
  for (const [key, value] of Object.entries(props.srcsetObj)) {
    const srcSet = `${value} ${mapSrcSetImage[key]}w`;
    tab.push(srcSet);
  }
  if (tab.length === 0) return null;
  return tab.join(',');
});

interface SrcsetObj {
  xsmall: String;
  small: String;
  medium: String;
  large: String;
}

interface Props {
  srcsetObj: SrcsetObj;
}
const props = defineProps<Props>();
</script>
