<template>
  <div>
    <h6>Miembros</h6>
    <div class="d-grid gap-2 d-md-block text-end">
      <button
        class="btn btn-success me-0 me-md-2 mb-2"
        type="button"
        @click="mostrarFormularioComponente"
      >
        Añadir miembros
      </button>
      <button
        class="btn btn-danger mb-2"
        type="button"
        @click="activarEliminarModo"
      >
        {{ eliminarModo ? "Eliminacion activada" : "Quitar Miembros" }}
      </button>
    </div>

    <formulario-miembros
      v-if="mostrarFormulario"
      @crearMiembro="agregarMiembro"
    />

    <ul
      class="bg-body-tertiary mb-1 rounded shadow list-group fondo-lista"
      v-for="miembro in miembros"
      :key="miembro.id"
    >
      <avatar-nombre
        :avatar="miembro.avatar"
        :name="miembro.name"
        @on-click-usuario="eliminarMiembro(miembro)"
        :eliminarusuario="eliminarModo"
        :class="{ 'bg-danger bg-gradient': eliminarModo }"
      />
    </ul>
  </div>
</template>

<script>
import FormularioMiembros from "./FormularioMiembros.vue";
import AvatarNombre from "./AvatarNombre.vue";

export default {
  components: {
    FormularioMiembros,
    AvatarNombre,
  },
  data() {
    return {
      mostrarFormulario: false,
      miembros: [],
      eliminarModo: false,
      name: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    mostrarFormularioComponente() {
      this.mostrarFormulario = true;
    },

    async agregarMiembro(nuevoMiembro) {
      try {
        // Hacer la solicitud a la API sin el campo "avatar"
        const { name, email, phone } = nuevoMiembro;
        const response = await fetch(
          "https://contacts-api-yy1b.onrender.com/users/aleh/contacts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, phone }),
          }
        );

        if (!response.ok) {
          throw new Error("Error creating member");
        }

        const data = await response.json();

        // Actualizar la lista de miembros y mostrar el avatar establecido en el formulario
        this.miembros.push({
          ...nuevoMiembro,
          id: data.id,
          avatar: nuevoMiembro.avatar,
        });
        this.mostrarFormulario = false;
      } catch (error) {
        console.error("Error creating member:", error);
      }
    },
    activarEliminarModo() {
      this.eliminarModo = !this.eliminarModo; // Reinicia el índice del miembro seleccionado
    },

    async eliminarMiembro(miembro) {
      try {
        // Hacer la solicitud para eliminar al miembro por su ID
        const response = await fetch(
          `https://contacts-api-yy1b.onrender.com/users/aleh/contacts/${miembro.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error deleting member");
        }

        // Actualizar la lista de miembros quitando al miembro eliminado

        const indicemiembro = this.miembros.findIndex(
          (m) => m.id === miembro.id
        ); // Buscar el índice del usuario a eliminar
        if (indicemiembro !== -1) {
          this.miembros.splice(indicemiembro, 1);
          this.eliminarModo = false;
        }
      } catch (error) {
        console.error("Error deleting member:", error);
      }
    },
  },
};
</script>
<style scoped>
.fondo-lista {
  background-color: bisque !important;
}
.list-group {
  --bs-list-group-bg: inherit;
}
</style>
