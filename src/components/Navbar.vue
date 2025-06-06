<template>
  <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <!-- Marca o título -->
      <router-link class="navbar-brand" to="/">MiApp</router-link>

      <!-- Botón toggle para dispositivos móviles -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menú colapsable -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/users">Usuarios</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register-user">Registrar Usuario</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Productos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register-product">Registrar Producto</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Opcional: si quieres personalizar algo */
</style>
