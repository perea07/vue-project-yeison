<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-header bg-success text-white">
            <h5 class="mb-0">Registrar Producto</h5>
          </div>
          <div class="card-body">
            <form @submit.prevent="registerProduct">
              <div class="mb-3">
                <label for="title" class="form-label">Nombre del producto</label>
                <input
                  v-model="product.title"
                  type="text"
                  id="title"
                  class="form-control"
                  placeholder="Ej: Camiseta"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="price" class="form-label">Precio</label>
                <input
                  v-model.number="product.price"
                  type="number"
                  id="price"
                  class="form-control"
                  placeholder="Ej: 49.99"
                  min="0"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="description" class="form-label">Descripción</label>
                <input
                  v-model="product.description"
                  type="text"
                  id="description"
                  class="form-control"
                  placeholder="Ej: Camiseta oversize"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="category" class="form-label">Categoría</label>
                <select
                  v-model.number="product.categoryId"
                  id="category"
                  class="form-select"
                  required
                >
                  <option disabled value="">Selecciona una categoría</option>
                  <option v-for="cat in categories" :key="cat.id" :value="cat.id">
                    {{ cat.name }}
                  </option>
                </select>
              </div>

              <div class="mb-3">
                <label for="image" class="form-label">Imagen (URL)</label>
                <input
                  v-model="product.image"
                  type="text"
                  id="image"
                  class="form-control"
                  placeholder="https://..."
                  required
                />
              </div>

              <button type="submit" class="btn btn-success w-100">Registrar Producto</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      product: {
        title: '',
        price: null,
        description: '',
        categoryId: '',
        image: ''
      },
      categories: []
    };
  },
  methods: {
    async registerProduct() {
      try {
        const payload = {
          title: this.product.title,
          price: this.product.price,
          description: this.product.description,
          categoryId: this.product.categoryId,
          images: [this.product.image]
        };

        const res = await axios.post('https://api.escuelajs.co/api/v1/products/', payload);
        alert('Producto registrado con ID: ' + res.data.id);

        // Resetear formulario
        this.product = {
          title: '',
          price: null,
          description: '',
          categoryId: '',
          image: ''
        };
      } catch (error) {
        console.error('Error al registrar el producto:', error.response?.data || error);
        alert('Ocurrió un error al registrar el producto.');
      }
    },
    async loadCategories() {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/categories');
        this.categories = response.data;
      } catch (error) {
        console.error('Error al cargar categorías:', error);
        alert('Error al cargar categorías.');
      }
    }
  },
  mounted() {
    this.loadCategories();
  }
};
</script>

<style scoped>
.card {
  border-radius: 12px;
}
</style>
