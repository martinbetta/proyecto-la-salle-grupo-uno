<template>
  <div>
    <h6>Añadir Miembro</h6>
    <form @submit.prevent="crearMiembro">
      <div>
        <div class="text-center p-2">
          <label for="avatar">
            <img
              :src="'https://www.gravatar.com/avatar/default?s=200&r=pg&d=mm'"
              class="rounded-circle"
            />
          </label>
        </div>
        <input
          type="file"
          id="avatar"
          ref="avatarInput"
          accept="image/png,image/jpeg,image/gif,image/webp"
          @change="seleccionarAvatar"
        />
      </div>
      <div>
        <label class="p-2 mb-2" for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="nombre" />
      </div>
      <div class="text-center mb-2">
        <input type="checkbox" id="edad" v-model="edad" />
        <label class="px-2" for="edad">Soy mayor de edad</label>
      </div>
      <!-- Agrega más campos relevantes aquí -->

      <button class="btn btn-primary mb-2" type="submit">Crear</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: "",
      archivo: null,
      edad: null,
      // Agrega más datos relevantes aquí
    };
  },
  methods: {
    seleccionarAvatar(event) {
      this.archivo = event.target.files[0];
    },
    crearMiembro() {
      // Crea una instancia de FileReader para leer el archivo seleccionado
      const reader = new FileReader();

      reader.onload = () => {
        const nuevoMiembro = {
          id: Date.now(), // Generar un ID único (puedes usar otra lógica si prefieres)
          nombre: this.nombre,
          avatar: reader.result,
          // Agrega más propiedades relevantes aquí
        };

        this.$emit("crearMiembro", nuevoMiembro);

        // Reiniciar los campos del formulario
        this.nombre = "";
        this.archivo = null;
        this.edad = null;
        // Reiniciar otros campos relevantes aquí
      };

      if (this.archivo) {
        reader.readAsDataURL(this.archivo);
      }
    },
  },
};
</script>
