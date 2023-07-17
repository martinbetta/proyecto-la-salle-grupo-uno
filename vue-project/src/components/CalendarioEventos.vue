<script>
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";
import NavegacionEventos from "./EventoNavegacion.vue";
export default {
  components: {
    FullCalendar,
    NavegacionEventos,
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
};
</script>
<template>
  <!-- PARTE FECHAS -->
  <section class="row">
    <article class="col-10 mb-5">
      <NavegacionEventos
        :currentEventTitle="currentEventTitle"
      ></NavegacionEventos>
      <div class="d-grid gap-2 d-md-block text-end mt-2 mt-xl-0">
        <button
          class="btn border bg-primary border-info rounded-pill mb-1"
          type="button"
          @click="Calendariomostrar = !Calendariomostrar"
        >
          {{ Calendariomostrar ? "Ocultar calendario" : "Mostrar calendario" }}
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
</template>
