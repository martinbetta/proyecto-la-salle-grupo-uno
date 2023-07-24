<template>
  <div class="text-start">
    <h6>Tareas</h6>
    <div class="d-grid gap-2 d-md-block text-end">
      <input
        class="mb-2 border border-info rounded-pill"
        title="Buscador"
        type="search"
        placeholder="Consulta tu tarea"
        aria-label="Buscador de tareas"
      />
    </div>

    <div class="d-grid gap-2 d-md-block text-end">
      <button
        class="btn btn-success mb-1 me-0 me-md-2"
        @click="mostrarFormularioTareas"
        type="button"
      >
        Añadir tareas
      </button>

      <button
        class="btn btn-danger mb-1"
        type="button"
        @click="activarEliminacionTarea"
      >
        {{ eliminaciontarea ? "Eliminación activada" : "Quitar tarea" }}
      </button>
    </div>

    <formularioTareas
      v-if="tareaFormulario"
      :usuarios="usuarios"
      @crearTarea="agregarTarea"
    />
    <ul
      class="list-group shadow mb-1 bg-body-tertiary rounded"
      v-for="tarea in tareas"
      :key="tarea.id"
    >
      <tareasMostrar
        :text="tarea.text"
        :id="tarea.id"
        @on-click-tarea-eliminada="eliminarTarea(tarea)"
        :class="{ 'bg-danger bg-gradient': eliminaciontarea }"
        :eliminartarea="eliminaciontarea"
        @editarTarea="actualizarTarea"
        :usuarioAsignado="getNombreUsuario(tarea.userId)"
      />
    </ul>
  </div>
</template>
<script>
import formularioTareas from "./FormularioTareas.vue";
import tareasMostrar from "./MostrarTarea.vue";
export default {
  components: {
    formularioTareas,
    tareasMostrar,
  },
  data() {
    return {
      tareaFormulario: false,
      tareas: [],
      eliminaciontarea: false,
      text: "",
      id: "",
      usuarios: [], // Variable para almacenar la lista de usuarios
    };
  },
  methods: {
    mostrarFormularioTareas() {
      this.tareaFormulario = true;
    },

    activarEliminacionTarea() {
      this.eliminaciontarea = !this.eliminaciontarea; //Reiniciar botón eliminacion
    },

    agregarTarea(tarea) {
      fetch("https://todos-ddy8.onrender.com/users/aleh/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tarea),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al crear la tarea");
          }
          return response.json();
        })
        .then((data) => {
          tarea.id = data.id; // Actualizar el ID de la tarea con el ID generado por la API
          this.tareas.push(tarea);
          this.tareaFormulario = false;
        })
        .catch((error) => {
          console.error("Error al crear la tarea:", error);
        });
    },
    eliminarTarea(tarea) {
      if (this.eliminaciontarea) {
        fetch(`https://todos-ddy8.onrender.com/users/aleh/todos/${tarea.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error al eliminar la tarea");
            }
            const indicetarea = this.tareas.findIndex((t) => t.id === tarea.id); // Buscar el índice de la tarea a eliminar
            if (indicetarea !== -1) {
              this.tareas.splice(indicetarea, 1);
              this.eliminaciontarea = false;
            }
          })
          .catch((error) => {
            console.error("Error al eliminar la tarea:", error);
          });
      }
    },
    async actualizarTarea(tareaActualizada) {
      const tareaData = {
        text: tareaActualizada.text,
        userId: tareaActualizada.userId, // Actualizar el ID del usuario asignado en la tarea
      };

      try {
        const response = await fetch(
          `https://todos-ddy8.onrender.com/users/aleh/todos/${tareaActualizada.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(tareaData),
          }
        );
        if (!response.ok) {
          throw new Error(
            `Error al actualizar la tarea. Estado de la respuesta: ${response.status} - ${response.statusText}`
          );
        }

        const index = this.tareas.findIndex(
          (t) => t.id === tareaActualizada.id
        ); // Buscar el índice de la tarea a actualizar
        if (index !== -1) {
          // Actualizar la tarea en la lista local con los datos actualizados

          this.tareas.splice(index, 1, tareaActualizada);
        }
      } catch (error) {
        console.error("Error al actualizar la tarea:", error);
      }
    },
    // Método para obtener la lista de usuarios desde la API de usuarios
    // Método para obtener la lista de usuarios desde la API de usuarios
    async obtenerUsuarios() {
      try {
        const response = await fetch(
          "https://contacts-api-yy1b.onrender.com/users/aleh/contacts"
        );
        if (!response.ok) {
          throw new Error("Error fetching users");
        }
        const data = await response.json();
        this.usuarios = data;
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    getNombreUsuario(userId) {
      const usuario = this.usuarios.find((user) => user.id === userId);
      return usuario ? usuario.name : ""; // Devuelve el nombre del usuario o cadena vacía si no se encuentra el usuario
    },
  },
  mounted() {
    this.obtenerUsuarios();
  },
  watch: {
    // Llama al método para obtener la lista de usuarios cuando el componente se monta
    usuarios: {
      handler: "obtenerUsuarios", // Nombre del método que se ejecutará cuando cambie la propiedad 'usuarios'
      //immediate: true, // Ejecuta el método una vez al inicio para obtener la lista de usuarios al cargar el componente
    },
  },
};
</script>
<style scoped></style>
