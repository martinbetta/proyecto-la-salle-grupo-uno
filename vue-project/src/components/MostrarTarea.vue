<template>
  <li class="list-group-item">
    <p class="d-inline">Tarea asignada:</p>
    <p class="d-inline m-2">{{ tareaActual }}</p>
    <p class="d-inline m-2" v-if="usuarioAsignadoActual">
      Asignado a: {{ usuarioAsignadoActual }}
    </p>
    <input v-model="tareaEdicion" v-if="editar" @blur="guardarEdicion" />
    <button
      type="button"
      class="btn position-absolute top-50 translate-middle-y end-0 me-3"
      @click="editar = true"
    >
      <i class="bi bi-pencil"></i>
    </button>
    <button
      type="button"
      class="btn-close position-absolute end-0"
      aria-label="Close"
      v-if="eliminartarea"
      @click="$emit('onClickTareaEliminada')"
    ></button>
    <!-- Mostrar otras propiedades relevantes aquí -->
  </li>
</template>

<script>
export default {
  data() {
    return {
      tareaActual: this.text,
      tareaEdicion: this.text,
      editar: false,
      usuarioAsignadoActual: this.usuarioAsignado,
    };
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    eliminartarea: {
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    usuarioAsignado: {
      type: String,
      default: "", // Valor predeterminado para el caso de que no haya usuario asignado
    },
  },
  methods: {
    guardarEdicion() {
      this.tareaActual = this.tareaEdicion;
      this.editar = false;
      this.$emit("editarTarea", {
        id: this.id, // Incluir el ID de la tarea actualizada
        text: this.tareaActual, // Incluir el campo text actualizado
        userId: this.usuarioAsignadoActual, // Incluir el ID del usuario asignado actual
      });
    },
  },
};
</script>
