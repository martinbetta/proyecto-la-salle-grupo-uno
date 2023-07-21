<script>
import FriendContact from "./FriendContactRout.vue";
export default {
  components: { FriendContact },
  data() {
    return {
      contacts: [],
      name: "",
      phone: "",
      email: "",
      editingContact: null,
      editedContact: {
        id: null,
        name: "",
        phone: "",
        email: "",
      },
    };
  },
  methods: {
    getContacts() {
      try {
        fetch("https://contacts-api-yy1b.onrender.com/users/aleh/contacts")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            this.contacts = data;
          });
      } catch (error) {
        console.log(error);
      }
    },
    addFriend() {
      const nuevoContacto = {
        id: this.id,
        name: this.name,
        phone: this.phone,
        email: this.email,
      };
      this.contacts.push(nuevoContacto);
      try {
        fetch("https://contacts-api-yy1b.onrender.com/users/aleh/contacts", {
          method: "POST",
          body: JSON.stringify(nuevoContacto),
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
      } catch (error) {
        console.log(error);
      }
    },
    startEditing(contact) {
      this.editingContact = contact;
      this.editedContact = { ...contact }; // Creamos una copia para no modificar directamente el contacto original
      console.log("Editando contacto:", contact);
    },
    saveContact() {
      // Aquí puedes enviar la solicitud de actualización del contacto al servidor
      // Luego, actualiza el contacto localmente y finaliza la edición
      // Por ejemplo, si tienes una API que acepta actualizaciones PATCH en `https://contacts-api-yy1b.onrender.com/users/aleh/contacts/{contactId}`
      // podrías hacer algo como esto:
      fetch(
        `https://contacts-api-yy1b.onrender.com/users/aleh/contacts/${this.editedContact.id}`,
        {
          method: "PATCH",
          body: JSON.stringify(this.editedContact),
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // Si la solicitud de actualización fue exitosa, actualizamos el contacto localmente
          const index = this.contacts.findIndex(
            (contact) => contact.id === this.editedContact.id
          );
          if (index !== -1) {
            this.contacts[index] = { ...this.editedContact };
          }
          this.cancelEdit();
        });
    },
    cancelEdit() {
      this.editingContact = null;
      this.editedContact = {
        id: null,
        name: "",
        phone: "",
        email: "",
      };
    },
    deleteContact(contactId) {
      // Aquí puedes enviar una solicitud para eliminar el contacto del servidor también si es necesario

      fetch(
        `https://contacts-api-yy1b.onrender.com/users/aleh/contacts/${contactId.id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data); // Opcional: puedes mostrar el resultado de la eliminación en la consola
          // Encuentra el índice del contacto que se eliminará
          const index = this.contacts.findIndex(
            (contact) => contact.id === contactId.id,
            console.log("Eliminando:", contactId.id)
          );
          if (index !== -1) {
            // Elimina el contacto de la lista
            this.contacts.splice(index, 1);
          }
        });
    },
  },

  created() {
    this.getContacts();
  },
};
</script>
<template>
  <div class="m-2 text-center">
    <form v-if="editingContact" @submit.prevent="saveContact">
      <label for="editName">Name:</label>
      <input type="text" id="editName" v-model="editedContact.name" required />

      <label for="editPhone">Phone:</label>
      <input
        type="text"
        id="editPhone"
        v-model="editedContact.phone"
        required
      />

      <label for="editEmail">Email:</label>
      <input
        type="email"
        id="editEmail"
        v-model="editedContact.email"
        required
      />

      <button type="submit">Save Contact</button>
      <button type="button" @click="cancelEdit">Cancel</button>
    </form>
    <div v-else>
      <form @submit.prevent="addFriend">
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="nombre"
          v-model="name"
          required
        />

        <label for="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          placeholder="teléfono"
          v-model="phone"
          required
        />

        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="correo"
          v-model="email"
          required
        />

        <button type="submit">Add Contact</button>
      </form>
      <FriendContact
        v-for="friend in contacts"
        :key="friend.id"
        :friend="friend"
        @edit="startEditing"
        @del="deleteContact"
      >
        >Click me! (Editing)
      </FriendContact>
    </div>
  </div>
</template>
<style scoped></style>
