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

    <div class="d-grid gap-2 d-md-block text-end">
      <button
        class="btn btn-success mb-1 me-xl-2"
        @click="mostrarFormularioTareas"
        type="button"
      >
        Añadir tareas
      </button>

      <button
        class="btn btn-danger mb-1"
        type="button"
        @click="activarEliminacionTarea"
      >
        {{ eliminaciontarea ? "Eliminación activada" : "Quitar tarea" }}
      </button>
    </div>

    <formularioTareas v-if="tareaFormulario" @crearTarea="agregarTarea" />
    <ul
      class="list-group shadow mb-1 bg-body-tertiary rounded"
      v-for="tarea in tareas"
      :key="tarea.id"
    >
      <tareasMostrar
        :tareacreada="tarea.tareacreada"
        @on-click-tarea-eliminada="eliminarTarea(tarea)"
        :class="{ 'bg-danger bg-gradient': eliminaciontarea }"
        :eliminartarea="eliminaciontarea"
        @editarTarea="actualizarTarea"
      />
    </ul>
  </div>
</template>
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
      eliminaciontarea: false,
    };
  },
  methods: {
    mostrarFormularioTareas() {
      this.tareaFormulario = true;
    },
    agregarTarea(tarea) {
      tarea.id = this.tareas.length + 1;
      this.tareas.push(tarea);

      this.tareaFormulario = false;
    },
    activarEliminacionTarea() {
      this.eliminaciontarea = !this.eliminaciontarea; //Reiniciar botón eliminacion
    },

    eliminarTarea(tarea) {
      if (this.eliminaciontarea) {
        const indicetarea = this.tareas.indexOf(tarea);
        if (indicetarea !== -1) {
          this.tareas.splice(indicetarea, 1);
          this.eliminaciontarea = false;
        }
      }
    },
    actualizarTarea(tareaActualizada) {
      const index = this.tareas.findIndex(
        (tarea) => tarea.id === tareaActualizada.id
      );
      if (index !== -1) {
        this.tareas.splice(index, 1, tareaActualizada);
      }
    },
  },
};
</script>
<style scoped></style>
