<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  props: {
    friend: Object,
    subtitle: String,
    subtitle2: String,
    subtitleColor: String,
    subtitleSize: Number,
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    getName() {
      return this.friend.name;
    },
  },
};
</script>

<template>
  <li class="card">
    <h2>{{ getName() }}</h2>
    <button @click="toggleDetails()">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>

    <slot name="subtitle"></slot>
    <!-- Muestra el contenido del slot 'subtitle' -->

    <slot name="subtitle2"></slot>
    <!-- Muestra el contenido del slot 'subtitle2' -->

    <!--
    <span :style="{ color: subtitleColor, fontSize: subtitleSize + 'px' }">{{
      subtitle
    }}</span>
    <span>{{ subtitle2 }}</span>-->
  </li>
</template>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

button:hover,
button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
