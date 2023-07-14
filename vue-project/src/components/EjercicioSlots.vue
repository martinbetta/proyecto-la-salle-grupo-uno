<script>
import FriendContact from "./FriendContactEjercicio.vue";

export default {
  components: {
    FriendContact,
  },
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
      subtitleSize: 24,
      subtitleColor: "green",
    };
  },
};
</script>

<template>
  <div>
    <header class="text-center">
      <h1>FriendList</h1>
    </header>
    <section id="app">
      <ul>
        <friend-contact
          v-for="friend in friends"
          :key="friend.id"
          :friend="friend"
        >
          <template #subtitle>
            <span
              :style="{ color: subtitleColor, fontSize: subtitleSize + 'px' }"
              >Texto de Subtítulo</span
            >
          </template>
          <!-- Contenido del slot 'subtitle' -->
          <template #subtitle2>
            <span
              :style="{ color: subtitleColor, fontSize: subtitleSize + 'px' }"
              >Texto de Subtítulo 2</span
            >
          </template>
          <!-- Contenido del slot 'subtitle2' -->
        </friend-contact>
      </ul>
    </section>
  </div>
</template>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
