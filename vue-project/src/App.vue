<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";
import GestionTareas from "./components/EventoTareas.vue";
import Usuarios from "./components/EventoUsuarios.vue";
import NavegacionEventos from "./components/EventoNavegacion.vue";
//import Ejercicios from "./components/EjerciciosUno.vue";
//import EjercicioUsuario from "./components/EjercicioDos.vue";
//import PaisBandera from "./components/BanderasPaisesEjercicio.vue";
//import EjercicioEditable from "./components/TextoEditableEjercicio.vue";
//import TareaVfor from "./components/ListaTareaEjercicio.vue";
//import BorrarImagen from "./components/GaleriaImagenesEjercicio.vue";

export default {
  components: {
    FullCalendar,
    GestionTareas,
    Usuarios,
    NavegacionEventos,
    //Ejercicios,
    // EjercicioUsuario,
    //PaisBandera,
    //EjercicioEditable,
    //TareaVfor,
    //BorrarImagen,
  },
  data() {
    return {
      Calendariomostrar: false,
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        locales: [esLocale],
        locale: "es",
        selectable: true,
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,listWeek",
        },
      },
    };
  },

  mounted() {},
  methods: {},

  watch: {},
};
</script>

<template>
  <h1 class="text-center">Control de eventos</h1>
  <div class="container-fluid">
    <!-- PARTE FECHAS -->
    <section class="row">
      <article class="col-12 mb-5">
        <NavegacionEventos></NavegacionEventos>
        <div class="d-grid gap-2 d-md-block text-end mt-2 mt-xl-0">
          <button
            class="btn border bg-primary border-info rounded-pill"
            type="button"
            @click="Calendariomostrar = !Calendariomostrar"
          >
            {{
              Calendariomostrar ? "Ocultar calendario" : "Mostrar calendario"
            }}
          </button>
          <FullCalendar v-if="Calendariomostrar" :options="calendarOptions">
          </FullCalendar>
        </div>
      </article>
    </section>
    <section class="row">
      <!-- PARTE DE PRODUCTOS -->
      <article
        class="col-12 col-xl-4 bg-body-tertiary mx-auto rounded shadow mb-4 fondo-componente"
      >
        <GestionTareas></GestionTareas>
      </article>
      <!-- PARTE DE MIEMBROS -->
      <aside
        class="col-12 col-xl-4 bg-body-tertiary mx-auto rounded shadow fondo-componente"
      >
        <Usuarios></Usuarios>
      </aside>
    </section>
  </div>
  <!--
  <Ejercicios></Ejercicios>
  <EjercicioUsuario></EjercicioUsuario>
  <PaisBandera></PaisBandera>
  <EjercicioEditable></EjercicioEditable>
  <TareaVfor></TareaVfor>
  <BorrarImagen></BorrarImagen>-->
</template>

<style scoped>
.fondo-componente {
  background-color: #fff3e2 !important;
}
</style>
