<script>
import GestionTareas from "./EventoTareas.vue";
import Usuarios from "./EventoUsuarios.vue";

export default {
  name: "HomeL",
  components: {
    GestionTareas,
    Usuarios,
  },

  mounted() {},

  watch: {},
};
</script>
<template>
  <h1 class="text-center">Control de eventos</h1>
  <div class="container-fluid">
    <section class="row">
      <!-- PARTE DE PRODUCTOS -->
      <article
        class="col-12 col-xl-4 bg-body-tertiary mx-auto rounded shadow mb-4 mb-xl-0 border fondo-componente"
      >
        <GestionTareas></GestionTareas>
      </article>
      <!-- PARTE DE MIEMBROS -->
      <aside
        class="col-12 col-xl-4 bg-body-tertiary mx-auto rounded shadow border fondo-componente"
      >
        <Usuarios></Usuarios>
      </aside>
    </section>
  </div>
</template>
<style scoped>
.fondo-componente {
  background-color: #f5f1eb !important;
}
</style>
