<script>
export default {
  name: "App",
  data() {
    return {
      isNotFound: false,
    };
  },
  watch: {
    // Observar cambios en la ruta para determinar si el componente actual es NotFound
    $route(to) {
      this.isNotFound = to.name === "NotFound";
    },
  },
};
</script>
<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Barra lateral -->
      <div class="col-sm-auto bg-light sticky-top">
        <!-- Contenido de la barra lateral -->
        <div
          class="d-flex flex-sm-column flex-nowrap flex-row align-items-center bg-light sticky-top"
        >
          <!-- Encabezado de la barra lateral -->
          <div
            class="p-3"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Menu"
          >
            <span class="fs-5 d-none d-sm-block">Menu</span>
          </div>
          <!-- Navegación de la barra lateral -->
          <ul
            class="nav nav-pills nav-flush flex-row flex-nowrap flex-sm-column mb-auto mx-auto text-center w-100 justify-content-between px-3 align-items-center"
            id="menu"
            v-if="!isNotFound"
          >
            <!-- Agrega aquí los elementos de tu menú -->
            <li class="nav-item">
              <router-link class="nav-link align-middle px-2 py-3" to="/"
                ><i class="fs-4 bi-house"></i
                ><span
                  class="ms-1 d-none d-sm-inline align-text-bottom"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Home"
                  >Home</span
                ></router-link
              >
            </li>
            <li>
              <router-link
                class="nav-link align-middle px-2 py-3"
                to="/Eventos"
                title=""
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                data-bs-original-title="Eventos"
              >
                <i class="fs-4 bi-table"></i>
                <span class="ms-1 d-none d-sm-inline align-text-bottom"
                  >Calendario</span
                >
              </router-link>
            </li>
            <li>
              <router-link
                class="nav-link px-2 py-3 align-middle"
                title=""
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                data-bs-original-title="Ejercicios"
                to="/Ejercicios"
                ><i class="fs-4 bi-grid"></i
                ><span class="ms-1 d-none d-sm-inline align-text-bottom"
                  >Ejercicios</span
                ></router-link
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Área de contenido (Componente desde router-view) -->
      <div class="col-sm p-3 min-vh-100">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<!-- Agrega el resto de tus etiquetas de script y estilo -->

<style scoped></style>
