<script>
export default {
  data() {
    return {
      isNotFound: false,
    };
  },
  watch: {
    // Observar cambios en la ruta para determinar si el componente actual es NotFound
    $route(to) {
      this.isNotFound = to.name === "NotPage";
    },
  },
};
</script>
<template>
  <div class="row sticky-top g-0">
    <header
      class="col-sm-auto sticky-top bg-light"
      :class="{ 'd-none': isNotFound }"
    >
      <theme-button />
      <div
        class="p-3"
        title=""
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-bs-original-title="Menu"
      >
        <span class="fs-5 d-none d-md-block">Menu</span>
      </div>
      <ul
        class="nav nav-pills flex-sm-column sticky-top justify-content-around"
      >
        <li class="nav-item">
          <router-link class="nav-link align-middle px-2 py-3" to="/"
            ><i class="fs-4 bi-house"></i
            ><span
              class="ms-1 d-none d-md-inline align-text-bottom"
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
            <span class="ms-1 d-none d-md-inline align-text-bottom"
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
            ><span class="ms-1 d-none d-md-inline align-text-bottom"
              >Ejercicios</span
            ></router-link
          >
        </li>
      </ul>
    </header>
    <router-view class="flex-fill min-vh-100 p-3 flex-basis"></router-view>
  </div>
</template>

<!-- Agrega el resto de tus etiquetas de script y estilo -->

<style scoped>
.flex-basis {
  flex-basis: 0% !important;
}

/* Define styles for the default root window element */
:root {
  --background-color-primary: #ebebeb;
  --background-color-secondary: #fafafa;
  --accent-color: #cacaca;
  --text-primary-color: #222;
  --element-size: 4rem;
}

/* Define styles for the root window with dark - mode preference */
:root.dark-theme {
  --background-color-primary: #1e1e1e;
  --background-color-secondary: #2d2d30;
  --accent-color: #3f3f3f;
  --text-primary-color: #ddd;
}
</style>
