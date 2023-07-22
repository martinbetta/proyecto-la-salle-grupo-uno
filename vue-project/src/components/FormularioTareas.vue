<template>
  <div class="mt-1">
    <form class="text-center" @submit.prevent="crearTarea">
      <div>
        <label class="p-2 mb-2" for="tarea">Tarea:</label>
        <input type="text" id="tarea" v-model="text" />
      </div>
      <button class="btn btn-primary mb-2" type="submit">Crear</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "", // Copiar la tarea a editar si existe
    };
  },

  methods: {
    crearTarea() {
      const nuevaTarea = {
        text: this.text,
        // Agrega más propiedades relevantes aquí
      };

      this.$emit("crearTarea", nuevaTarea);

      console.log(nuevaTarea);

      this.text = ""; // Reiniciar el campo del formulario
      // Reiniciar otros campos relevantes aquí
    },
  },
};
</script>
