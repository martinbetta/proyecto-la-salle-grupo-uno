<template>
  <div class="text-center">
    <h1>Lista de Tareas</h1>
    <div class="row justify-content-center">
      <ul class="col-xl-2 bg-secondary">
        <li v-for="tarea in tareas" :key="tarea.id">{{ tarea.nombre }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tareas: [
        { id: 1, nombre: "Hacer la compra" },
        { id: 2, nombre: "Limpiar la casa" },
        { id: 3, nombre: "Estudiar para el examen" },
      ],
    };
  },
};
</script>
