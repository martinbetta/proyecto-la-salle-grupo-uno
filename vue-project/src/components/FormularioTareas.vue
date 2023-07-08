<template>
  <div class="mt-1">
    <form class="text-center" @submit.prevent="crearTarea">
      <div>
        <label class="p-2 mb-2" for="tarea">Tarea:</label>
        <input type="text" id="tarea" v-model="tarea" />
      </div>
      <button class="btn btn-primary mb-2" type="submit">Crear</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tarea: "",
    };
  },
  methods: {
    crearTarea() {
      const nuevaTarea = {
        id: Date.now(),
        tareacreada: this.tarea, //tareacreada se utilizara en el componente mostrarTarea.
        // Agrega más propiedades relevantes aquí
      };

      this.$emit("crearTarea", nuevaTarea);
      console.log(nuevaTarea);
      // Reiniciar los campos del formulario
      this.tarea = "";

      // Reiniciar otros campos relevantes aquí
    },
  },
};
</script>
