import { defineStore } from "pinia"

export const usecontactosUsuarios = defineStore("contactos", {
    state: () => ({
        friends: [
            {
              id: "manuel",
              name: "Manolo lopez",
              phone: "01234 5678 991",
              email: "manuel@localhost.com",
            },
            {
              id: "julie",
              name: "Julie Jones",
              phone: "09876 543 221",
              email: "julie@localhost.com",
            }
          ]
    }),
    getters: {},
    actions: {
        
            addContact(contact) {
              this.friends.push(contact);
            }
          
    },
});