<template>
  <li>
    <p class="d-inline">Tarea Creada:</p>
    <p class="d-inline">{{ tareacreada }}</p>
    <!-- Mostrar otras propiedades relevantes aquí -->
  </li>
</template>

<script>
export default {
  props: {
    tareacreada: {
      type: String,
      required: true,
    },
  },
};
</script>
