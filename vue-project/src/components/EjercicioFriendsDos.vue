<script>
import FriendContact from "./FriendContactRout.vue";
import { usecontactosUsuarios } from "./store/EjercicioContactos";

export default {
  components: {
    FriendContact,
  },
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  setup() {
    const usuarios = usecontactosUsuarios();

    return { usuarios };
  },
  methods: {
    addContact() {
      this.usuarios.addContact({
        name: this.name,
        phone: this.phone,
        email: this.email,
      });
    },
  },
};
</script>

<template>
  <div>
    <header>
      <h1>FriendList</h1>
    </header>
    <section id="app">
      <form @submit.prevent="addContact">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required />

        <label for="phone">Phone:</label>
        <input type="text" id="phone" v-model="phone" required />

        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />

        <button type="submit">Add Contact</button>
      </form>
      <ul>
        <friend-contact
          v-for="friend in usuarios.friends"
          :key="friend.id"
          :friend="friend"
        >
          Click me!
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
