<template>
  <div>
    <h6>Añadir Miembro</h6>
    <form @submit.prevent="crearMiembro">
      <div>
        <div class="text-center p-2">
          <label for="avatar">
            <img
              :src="getAvatarUrl()"
              class="rounded-circle border border-black avatar"
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
        <label class="p-2 mb-2" for="name">Nombre:</label>
        <input type="text" id="name" placeholder="tu nombre" v-model="name" />
      </div>
      <div>
        <label class="p-2 mb-2" for="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="ejemplo@gmail.com"
          v-model="email"
        />
      </div>
      <div>
        <label class="p-2 mb-2" for="phone">Teléfono:</label>
        <input type="text" id="phone" placeholder="45235204" v-model="phone" />
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
      name: "",
      archivo: null,
      edad: null,
      email: "",
      phone: "",
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
          name: this.name,
          avatar: reader.result,
          email: this.email,
          phone: this.phone,
          // Agrega más propiedades relevantes aquí
        };

        this.$emit("crearMiembro", nuevoMiembro);

        // Reiniciar los campos del formulario
        this.name = "";
        this.archivo = null;
        this.edad = null;
        this.email = "";
        this.phone = "";
        // Reiniciar otros campos relevantes aquí
      };

      if (this.archivo) {
        reader.readAsDataURL(this.archivo);
      }
    },
    getAvatarUrl() {
      return this.archivo
        ? URL.createObjectURL(this.archivo)
        : "https://www.gravatar.com/avatar/default?s=200&r=pg&d=mm";
    },
  },
};
</script>
<style scoped>
.avatar {
  width: 20vh;
  height: 20vh;
}
</style>
