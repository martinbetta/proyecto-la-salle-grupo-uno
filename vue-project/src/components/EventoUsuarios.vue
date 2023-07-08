<template>
  <div>
    <h6>Miembros</h6>
    <div class="d-grid gap-2 d-md-block text-end">
      <button
        class="btn btn-success me-xl-2 mb-2"
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
        :nombre="miembro.nombre"
        @on-click-avatar="eliminarMiembro(miembro)"
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
    };
  },
  methods: {
    mostrarFormularioComponente() {
      this.mostrarFormulario = true;
    },
    agregarMiembro(miembro) {
      this.miembros.push(miembro);
      this.mostrarFormulario = false;
    },
    activarEliminarModo() {
      this.eliminarModo = !this.eliminarModo; // Reinicia el índice del miembro seleccionado
    },
    eliminarMiembro(miembro) {
      if (this.eliminarModo) {
        const indice = this.miembros.indexOf(miembro);
        if (indice !== -1) {
          this.miembros.splice(indice, 1);
          this.eliminarModo = false;
        }
      }
    },
  },
};
</script>
<style>
.fondo-lista {
  background-color: bisque !important;
}
.list-group {
  --bs-list-group-bg: inherit;
}
</style>
