<template>
  <div class="mt-1">
    <form class="text-center" @submit.prevent="crearTarea">
      <div>
        <label class="p-2 mb-2" for="tarea">Tarea:</label>
        <input type="text" id="tarea" v-model="text" />
      </div>
      <div>
        <label class="p-2 mb-2" for="usuario">Usuario asignado:</label>
        <select id="usuario" v-model="usuarioAsignado">
          <option :value="null" disabled>-- Seleccione un usuario --</option>
          <option
            v-for="usuario in usuarios"
            :key="usuario.id"
            :value="usuario.id"
          >
            {{ usuario.name }}
          </option>
        </select>
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
      usuarioAsignado: null, // Variable para almacenar el ID del usuario seleccionado
    };
  },
  props: {
    usuarios: {
      type: Array,
      required: true,
    },
  },
  methods: {
    crearTarea() {
      const nuevaTarea = {
        text: this.text,
        // Agrega más propiedades relevantes aquí
        userId: this.usuarioAsignado, // Guarda el ID del usuario seleccionado en la tarea
      };

      this.$emit("crearTarea", nuevaTarea);

      console.log(nuevaTarea);

      this.text = ""; // Reiniciar el campo del formulario
      this.usuarioAsignado = null;

      // Reiniciar otros campos relevantes aquí
    },
  },
};
</script>
