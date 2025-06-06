<template>
  <div class="py-4 container-fluid">
    <h2>Usuarios</h2>

    <div v-if="loading">Cargando usuarios...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <ul v-else-if="users.length">
      <li v-for="user in users" :key="user.id" tabindex="0">
        {{ user.name }}
      </li>
    </ul>
    <div v-else>No hay usuarios para mostrar.</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      loading: false,
      error: null,
    }
  },
  async mounted() {
    this.loading = true;
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      this.users = response.data;
    } catch (err) {
      this.error = 'Error al cargar los usuarios. Intenta más tarde.';
      console.error(err);
    } finally {
      this.loading = false;
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
  font-weight: bold;
}
</style>
