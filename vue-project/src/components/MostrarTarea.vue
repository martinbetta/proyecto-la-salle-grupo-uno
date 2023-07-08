<template>
  <li class="list-group-item" @click="$emit('onClickTareaEliminada')">
    <p class="d-inline">Tarea asignada:</p>
    <p class="d-inline m-2">{{ tareacreada }}</p>

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
