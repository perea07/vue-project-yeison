<template>
  <div class="container my-4">
    <!-- Input de búsqueda -->
    <div class="row mb-4">
      <div class="col-md-6 mx-auto">
        <input
          v-model="search"
          @input="resetToFirstPage"
          type="text"
          class="form-control"
          placeholder="Buscar por nombre o ID"
        />
      </div>
    </div>

    <!-- Cards de productos -->
    <div class="row">
      <div
        class="col-sm-12 col-md-6 col-lg-4 mb-4"
        v-for="product in paginatedProducts"
        :key="product.id"
      >
        <ProductCard :product="product" />
      </div>
    </div>

    <!-- Paginación -->
    <div class="d-flex justify-content-center mt-4 gap-2">
      <button class="btn btn-outline-secondary" @click="prevPage" :disabled="page === 1">
        Anterior
      </button>
      <button
        class="btn btn-primary"
        @click="nextPage"
        :disabled="page >= totalPages"
      >
        Siguiente
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ProductCard from '../components/ProductCard.vue';

export default {
  components: { ProductCard },
  data() {
    return {
      products: [],
      search: '',
      page: 1,
      limit: 6
    };
  },
  computed: {
    filteredProducts() {
      if (!this.search) return this.products;

      const term = this.search.toLowerCase();

      return this.products.filter(p => {
        const title = p.title ? p.title.toLowerCase() : '';
        return title.includes(term) || p.id.toString() === this.search;
      });
    },
    paginatedProducts() {
      const start = (this.page - 1) * this.limit;
      return this.filteredProducts.slice(start, start + this.limit);
    },
    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.limit);
    }
  },
  async mounted() {
    try {
      const res = await axios.get('https://api.escuelajs.co/api/v1/products');
      this.products = res.data;
    } catch (error) {
      console.error('Error al cargar productos:', error);
    }
  },
  methods: {
    nextPage() {
      if (this.page < this.totalPages) this.page++;
    },
    prevPage() {
      if (this.page > 1) this.page--;
    },
    resetToFirstPage() {
      this.page = 1;
    }
  }
};
</script>
