<template>
  <div class="basketView">
    <Suspense>
      <template #default>
        <Basket-view />
      </template>
      <template #fallback>
        <div>Loading... (3 seconds)</div>
      </template>
    </Suspense>
  </div>
</template>

