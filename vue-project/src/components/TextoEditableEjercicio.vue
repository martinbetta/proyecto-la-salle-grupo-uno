<template>
  <h2 class="text-center">Input editable</h2>
  <div class="text-center mb-5">
    <div v-if="!isEditMode" @click="enableEditMode">{{ text }}</div>
    <input v-else type="text" v-model="text" @blur="disableEditMode" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditMode: false,
      text: "Haz clic aquí para editar",
    };
  },
  methods: {
    enableEditMode() {
      this.isEditMode = true;
    },
    disableEditMode() {
      this.isEditMode = false;
    },
  },
};
</script>
