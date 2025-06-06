<template>
  <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div
        class="carousel-item"
        :class="{ active: index === 0 }"
        v-for="(image, index) in images"
        :key="index"
      >
        <img :src="image" class="d-block w-100 img-fluid" alt="Imagen del slider" />
      </div>
    </div>

    <!-- Controles opcionales -->
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Anterior</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Siguiente</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        new URL('../assets/slider-1.avif', import.meta.url).href,
        new URL('../assets/slider-2.avif', import.meta.url).href,
        new URL('../assets/slider-3.avif', import.meta.url).href
      ]
    };
  }
};
</script>

<style scoped>
.carousel-inner {
  max-height: 500px;
}

.carousel-item img {
  width: 100%;
  object-fit: contain;
}

</style>
