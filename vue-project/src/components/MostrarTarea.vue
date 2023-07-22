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
      tareaActual: this.tareacreada.tareacreada,
      tareaEdicion: this.tareacreada.tareacreada,
      editar: false,
    };
  },
  props: {
    tareacreada: {
      type: Object,
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
    //async guardarEdicion() {
    //try {
    //const tareaActualizada = {
    //tareacreada: this.tareaEdicion,
    // Agrega más propiedades relevantes aquí
    //};

    //const response = await fetch(
    //`https://todos-ddy8.onrender.com/users/aleh/todos/${this.tareacreada.id}`,
    //{
    //method: "PATCH",
    //headers: {
    //"Content-Type": "application/json",
    //},
    //body: JSON.stringify(tareaActualizada),
    //}
    //);

    //if (!response.ok) {
    //throw new Error("Error al actualizar la tarea");
    //}

    //this.tareaActual = this.tareaEdicion; // Actualizar la tarea mostrada con la tarea editada
    //this.editar = false;
    //this.$emit("editarTarea", tareaActualizada);
    //} catch (error) {
    //console.error("Error al actualizar la tarea:", error);
    //}
    //},
  },
};
</script>
