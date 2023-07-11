<template>
  <li class="list-group-item">
    <p class="d-inline">Tarea asignada:</p>
    <p class="d-inline m-2">{{ tareaActual }}</p>
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
      tareaActual: this.tareacreada,
      tareaEdicion: this.tareacreada,
      editar: false,
    };
  },
  props: {
    tareacreada: {
      type: String,
      required: true,
    },
    eliminartarea: {
      required: true,
    },
  },
  methods: {
    guardarEdicion() {
      this.tareaActual = this.tareaEdicion;
      this.editar = false;
      this.$emit("editarTarea", this.tareaActual);
    },
  },
};
</script>
