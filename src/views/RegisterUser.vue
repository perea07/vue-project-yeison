<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-header bg-primary text-white">
            <h5 class="mb-0">Registrar Usuario</h5>
          </div>
          <div class="card-body">
            <form @submit.prevent="registerUser">
              <div class="mb-3">
                <label for="name" class="form-label">Nombre</label>
                <input
                  v-model="user.name"
                  type="text"
                  id="name"
                  class="form-control"
                  placeholder="Ingresa tu nombre"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Correo electrónico</label>
                <input
                  v-model="user.email"
                  type="email"
                  id="email"
                  class="form-control"
                  placeholder="Ingresa tu email"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary w-100">Registrar</button>
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
      user: { name: '', email: '' }
    };
  },
  methods: {
    async registerUser() {
      try {
        const res = await axios.post('https://jsonplaceholder.typicode.com/posts', this.user);
        alert('Usuario registrado con ID: ' + res.data.id);
        this.user.name = '';
        this.user.email = '';
      } catch (error) {
        alert('Ocurrió un error al registrar el usuario.');
      }
    }
  }
}
</script>
