<template>
  <li class="list-group-item">
    <img
      class="rounded-circle d-inline m-2 border border-black avatar"
      :src="avatar"
      alt="Avatar"
    />
    <p class="d-inline m-2">{{ nombre }}</p>
    <button
      type="button"
      class="btn-close position-absolute bottom-50 end-0"
      aria-label="Close"
      v-if="eliminarusuario"
      @click="$emit('onClickUsuario')"
    ></button>
  </li>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    eliminarusuario: {
      required: true,
    },
  },
};
</script>
<style>
.avatar {
  width: 10vh;
  height: 10vh;
}
</style>
