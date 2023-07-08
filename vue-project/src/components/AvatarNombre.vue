<template>
  <li class="list-group-item">
    <img
      class="rounded-circle d-inline m-2 border border-black avatar clickable"
      :src="avatar"
      alt="Avatar"
      @click="$emit('onClickAvatar')"
    />
    <p class="d-inline m-2">{{ nombre }}</p>
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
  },
};
</script>
<style>
.avatar {
  width: 10vh;
  height: 10vh;
}
</style>
