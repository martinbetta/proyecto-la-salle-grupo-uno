<script>
import Ejerciciosuno from "./EjerciciosUno.vue";
import EjercicioUsuario from "./EjercicioDos.vue";
import PaisBandera from "./BanderasPaisesEjercicio.vue";
import EjercicioEditable from "./TextoEditableEjercicio.vue";
import TareaVfor from "./ListaTareaEjercicio.vue";
import BorrarImagen from "./GaleriaImagenesEjercicio.vue";
import Slots from "./EjercicioSlots.vue";
export default {
  components: {
    Ejerciciosuno,
    EjercicioUsuario,
    PaisBandera,
    EjercicioEditable,
    TareaVfor,
    BorrarImagen,
    Slots,
  },
};
</script>
<template>
  <Ejerciciosuno></Ejerciciosuno>
  <EjercicioUsuario></EjercicioUsuario>
  <PaisBandera></PaisBandera>
  <EjercicioEditable></EjercicioEditable>
  <TareaVfor></TareaVfor>
  <BorrarImagen></BorrarImagen>
  <Slots></Slots>
  <div class="text-center">
    <router-link class="btn btn-primary mx-2" to="/contactos"
      >Contactos</router-link
    >
    <router-link class="btn btn-primary" to="/friends">Friends</router-link>
  </div>
</template>
<style scoped></style>
