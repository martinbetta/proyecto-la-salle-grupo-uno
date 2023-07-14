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
//import Slots from "./components/EjercicioSlots.vue";

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
    //Slots,
  },
  data() {
    return {
      Calendariomostrar: false,
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
        initialView: "dayGridMonth",
        locales: [esLocale],
        locale: "es",
        editable: true,
        selectable: true,
        selectMirror: true,
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
      },
      currentEventTitle: "",
    };
  },

  mounted() {},
  methods: {
    createEventId() {
      // Genera un ID único utilizando la fecha y hora actual
      //const timestamp = new Date().getTime();
      //return `event-${timestamp}`;
      let eventGuid = 0;
      return String(`event-${eventGuid++}`);
    },
    handleDateSelect(selectInfo) {
      let title = prompt("Please enter a new title for your event");
      let calendarApi = selectInfo.view.calendar;

      calendarApi.unselect(); // clear date selection

      if (title) {
        const eventId = this.createEventId();
        calendarApi.addEvent({
          id: eventId,
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay,
        });
        const eventInfo = calendarApi.getEventById(eventId);
        this.handleEventCreate(eventInfo); // Llama al nuevo método handleEventCreate
      }
    },
    handleEventClick(clickInfo) {
      if (
        confirm(
          `Are you sure you want to delete the event '${clickInfo.event.title}'`
        )
      ) {
        clickInfo.event.remove();
      }
    },
    handleEventCreate(eventInfo) {
      if (eventInfo) {
        this.currentEventTitle = eventInfo.title;
      }
    },

    handleEvents(events) {
      this.currentEvents = events;
    },
  },

  watch: {},
};
</script>

<template>
  <header>
    <router-link to="/contactos">Contactos</router-link>
    <router-link to="/">Home</router-link>
  </header>
  <router-view></router-view>
  <h1 class="text-center">Control de eventos</h1>
  <div class="container-fluid">
    <!-- PARTE FECHAS -->
    <section class="row">
      <article class="col-12 mb-5">
        <NavegacionEventos
          :currentEventTitle="currentEventTitle"
        ></NavegacionEventos>
        <div class="d-grid gap-2 d-md-block text-end mt-2 mt-xl-0">
          <button
            class="btn border bg-primary border-info rounded-pill mb-1"
            type="button"
            @click="Calendariomostrar = !Calendariomostrar"
          >
            {{
              Calendariomostrar ? "Ocultar calendario" : "Mostrar calendario"
            }}
          </button>
          <FullCalendar v-if="Calendariomostrar" :options="calendarOptions">
            <template v-slot:eventContent="arg">
              <b>{{ arg.timeText }}</b>
              <i>{{ arg.event.title }}</i>
            </template>
          </FullCalendar>
        </div>
      </article>
    </section>
    <section class="row">
      <!-- PARTE DE PRODUCTOS -->
      <article
        class="col-12 col-xl-4 bg-body-tertiary mx-auto rounded shadow mb-4 mb-xl-0 border fondo-componente"
      >
        <GestionTareas></GestionTareas>
      </article>
      <!-- PARTE DE MIEMBROS -->
      <aside
        class="col-12 col-xl-4 bg-body-tertiary mx-auto rounded shadow border fondo-componente"
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
  <BorrarImagen></BorrarImagen>
  <Slots></Slots>-->
</template>

<style scoped>
.fondo-componente {
  background-color: #f5f1eb !important;
}
</style>
