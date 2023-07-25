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
  <div class="container-fluid">
    <h1 class="text-center">Control de eventos</h1>
    <!-- PARTE DE PRODUCTOS -->
    <div class="row">
      <section
        class="col-12 col-xl-10 bg-body-tertiary mx-auto rounded shadow mb-4 border pb-2 fondo-componente"
      >
        <GestionTareas></GestionTareas>
      </section>
    </div>
    <!-- PARTE DE MIEMBROS -->
    <div class="row">
      <section
        class="col-12 col-xl-10 bg-body-tertiary mx-auto rounded shadow border fondo-componente"
      >
        <Usuarios></Usuarios>
      </section>
    </div>
  </div>
</template>
<style scoped>
.fondo-componente {
  background-color: #f5f1eb !important;
}
</style>
