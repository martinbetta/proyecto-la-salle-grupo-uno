<template>
  <div class="fondo row g-0">
    <div class="m-auto col-auto text-center card ancho">
      <img
        src="../assets/image/Cuatrocerocuatro.jpeg"
        class="card-img-top"
        alt="404"
      />
      <h1 class="card-title">Página no encontrada</h1>
      <p class="card-text">
        Oops! La página no existe. <br />
        Más suerte la próxima vez.
      </p>

      <router-link
        class="text-white text-decoration-none btn btn-primary"
        to="/"
        >Inicio</router-link
      >

      <!--
      <button class="btn btn-primary" type="button">
        <a class="text-white w-100 d-block" href="/friends">Ve al Inicio</a>
      </button>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "NotPage",
  //data() {
  //return {
  //isNotFound: true,
  //};
  //},
};
</script>

<style scoped>
/* Estilos específicos para el componente NotFound.vue */
.fondo {
  background-image: url("../assets/image/Found.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
}
.ancho {
  width: max-content;
}
.ancho img {
  height: 40vh;
}
</style>
