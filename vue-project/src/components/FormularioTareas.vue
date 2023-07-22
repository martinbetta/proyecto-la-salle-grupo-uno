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
      tarea: "", // Copiar la tarea a editar si existe
    };
  },

  methods: {
    crearTarea() {
      const nuevaTarea = {
        tareacreada: this.tarea,
        // Agrega más propiedades relevantes aquí
      };

      fetch("https://todos-ddy8.onrender.com/users/aleh/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevaTarea),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al crear la tarea");
          }
          return response.json();
        })
        .then((data) => {
          nuevaTarea.id = data.id; // Actualizar el ID de la tarea con el ID generado por la API
          this.$emit("crearTarea", nuevaTarea);
        })
        .catch((error) => {
          console.error("Error al crear la tarea:", error);
        });

      console.log(nuevaTarea);

      this.tarea = ""; // Reiniciar el campo del formulario
      // Reiniciar otros campos relevantes aquí
    },
  },
};
</script>
