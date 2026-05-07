<script setup lang="ts">
import { listProducts } from "@dropjdid/api-client";
import type { Product } from "@dropjdid/types";
import { onMounted, ref, computed } from "vue";

const products = ref<Product[]>([]);

onMounted(async () => {
  products.value = await listProducts();
});

const total = computed(() =>
  products.value.slice(0, 2).reduce((sum, product) => sum + product.price, 0),
);
</script>

<template>
  <section class="cart-shell">
    <p>vue Widget</p>
    <p class="section-label">mf-cart-vue</p>
    <h2>Vue cart widget</h2>
    <p class="body-copy">
      A Vue remote consumed by the React host without rewriting the shell.
    </p>
    <ul class="cart-list">
      <li v-for="product in products.slice(0, 2)" :key="product.id">
        <strong>{{ product.name }}</strong>
        <span>${{ product.price }}</span>
      </li>
    </ul>
    <footer class="cart-footer">
      <span>Estimated total</span>
      <strong>${{ total }}</strong>
    </footer>
  </section>
</template>
