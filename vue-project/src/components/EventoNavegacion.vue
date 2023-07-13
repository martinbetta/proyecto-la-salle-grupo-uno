<template>
  <div class="col-xl-4 d-inline offset-xl-2 offset-1">
    <a href="#">Anterior</a>
  </div>
  <div class="col-xl-4 offset-xl-2 d-inline offset-2">
    <span>Evento: {{ currentEventTitle }}</span>
  </div>
  <div class="col-xl-2 d-inline offset-xl-2 offset-2">
    <a href="#">Siguiente</a>
  </div>
</template>
<script>
export default {
  props: {
    currentEventTitle: {
      type: String,
      required: true,
    },
  },
};
</script>
