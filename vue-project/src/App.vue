<script>
export default {
  //data() {
  //return {
  //isNotFound: false,
  //};
  //},
  //watch: {
  // Observar cambios en la ruta para determinar si el componente actual es NotFound
  //$route(to) {
  //this.isNotFound = to.name === "NotPage";
  //},
  //},
};
</script>
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-auto bg-light sticky-top">
        <div
          class="d-flex flex-sm-column flex-nowrap flex-row align-items-center bg-light sticky-top"
        >
          <div
            class="p-3"
            title="Menu"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-original-title="Menu"
          >
            <span class="fs-5 d-none d-sm-block">Menu</span>
          </div>

          <ul
            class="nav nav-pills nav-flush flex-row flex-nowrap flex-sm-column mb-auto mx-auto text-center w-100 justify-content-between px-3 align-items-center"
            id="menu"
          >
            <li class="nav-item">
              <router-link class="nav-link align-middle px-2 py-3" to="/"
                ><i class="fs-4 bi-house"></i
                ><span
                  class="ms-1 d-none d-sm-inline align-text-bottom"
                  title="Home"
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
                title="Eventos"
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
                title="Ejercicios"
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

      <div class="col-sm p-3 min-vh-100">
        <router-view></router-view>
      </div>
    </div>
  </div>
  <!--
  <header>
    <router-link to="/">Home</router-link>
    <router-link to="/Eventos">Calendario</router-link>
    <router-link to="/Ejercicios">Ejercicios</router-link>
  </header>
  <router-view></router-view>-->
</template>

<!-- Agrega el resto de tus etiquetas de script y estilo -->

<style scoped></style>
