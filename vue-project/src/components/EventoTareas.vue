<script>
import formularioTareas from "./FormularioTareas.vue";
import tareasMostrar from "./MostrarTarea.vue";
export default {
  components: {
    formularioTareas,
    tareasMostrar,
  },
  data() {
    return {
      tareaFormulario: false,
      tareas: [],
    };
  },
  methods: {
    mostrarFormularioTareas() {
      this.tareaFormulario = true;
    },
    agregarTarea(tarea) {
      this.tareas.push(tarea);
      this.tareaFormulario = false;
    },
  },
};
</script>
<template>
  <div class="text-start">
    <h6>Tareas</h6>
    <div class="d-grid gap-2 d-md-block text-end">
      <input
        class="mb-2 border border-info rounded-pill"
        title="Buscador"
        type="search"
        placeholder="Consulta tu tarea"
        aria-label="Buscador de tareas"
      />
    </div>
    <div class="text-end">
      <div class="dropdown-center d-grid gap-2 d-md-block" role="group">
        <button
          class="btn btn-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Gestionar tareas
        </button>
        <ul class="dropdown-menu">
          <li>
            <button
              class="btn btn-success mb-1 w-100"
              @click="mostrarFormularioTareas"
              type="button"
            >
              Añadir tareas
            </button>
          </li>
          <li>
            <button class="btn btn-danger mb-1 w-100" type="button">
              Quitar tareas
            </button>
          </li>
          <li>
            <button class="btn btn-warning w-100" type="button">
              Editar tareas
            </button>
          </li>
        </ul>
      </div>
    </div>
    <formularioTareas v-if="tareaFormulario" @crearTarea="agregarTarea" />
    <ul v-for="tarea in tareas" :key="tarea.id">
      <tareasMostrar :tareacreada="tarea.tareacreada" />
    </ul>
  </div>
</template>
<style scoped></style>
