<template>
  <div class="card">
    <img :src="product.images[0]" :alt="product.title" />
    <h3>{{ product.title }}</h3>
    <p>${{ product.price }}</p>
  </div>
</template>

<script>
export default {
  props: ['product']
}
</script>