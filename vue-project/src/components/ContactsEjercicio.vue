<script>
import FriendContact from "./FriendContactRout.vue";

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
    };
  },
};
</script>

<template>
  <div>
    <header>
      <h1>FriendList</h1>
    </header>
    <section id="app">
      <ul>
        <friend-contact
          v-for="friend in friends"
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
