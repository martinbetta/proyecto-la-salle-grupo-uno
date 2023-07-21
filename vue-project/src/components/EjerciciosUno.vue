<script>
export default {
  data() {
    return {
      user: {
        name: "John",
        lastName: "Doe",
        age: 55,
      },
      Producto: {
        bebida: "Nestea",
        comida: "Patatas",
        Leche: ["Desnatada", "Entera", "Semidesnatada"],
      },
      buttonText: "Texto del botón inicial",
      hoverButtonText: "Texto al pasar el ratón",
      possibleTitles: ["Pimiento", "Lechuga", "Berenjena", "Tomate"], // Lista de títulos
      textColors: ["black", "black"], // array con los colores de los textos por defecto
    };
  },
  mounted() {
    console.log(`The initial name is ${this.name}.`);
    console.log(`The initial last name is ${this.lastName}.`);
    console.log(`The initial age is ${this.age}.`);
  },
  methods: {
    changeButtonText() {
      const randomIndex = Math.floor(
        Math.random() * this.possibleTitles.length
      );
      this.buttonText = this.possibleTitles[randomIndex];
    },
    changeHoverButtonText() {
      const randomIndex = Math.floor(
        Math.random() * this.possibleTitles.length
      );
      this.hoverButtonText = this.possibleTitles[randomIndex];
    },
    changeTextColor(index) {
      const colors = ["red", "blue", "green", "orange", "purple"]; // Lista de colores posibles
      const randomIndex = Math.floor(Math.random() * colors.length); // Generar un índice aleatorio
      this.textColors.splice(index, 1, colors[randomIndex]); // Cambiar el color en la posición del texto correspondiente
    },
  },
};
</script>

<template>
  <h1 class="text-center">Ejercicios</h1>
  <div class="bg-primary">
    <p class="d-inline px-4 text-white">
      Bebida Favorita: {{ Producto.bebida }}
    </p>
    <p class="d-inline px-4 text-white">
      Comida Favorita: {{ Producto.comida }}
    </p>
    <p class="px-4 text-white">
      Tipos de leche: {{ Producto.Leche.join(" - ") }}
    </p>
  </div>
  <button class="px-4" @click="changeButtonText">{{ buttonText }}</button>
  <button class="px-4" @mouseover="changeHoverButtonText">
    {{ hoverButtonText }}
  </button>
  <div>
    <p
      class="d-inline px-4"
      :style="{ color: textColors[0] }"
      @click="changeTextColor(0)"
    >
      Texto que cambia color al hacer clic
    </p>
    <p
      class="d-inline px-4"
      :style="{ color: textColors[1] }"
      @mouseover="changeTextColor(1)"
    >
      Texto que cambia color al pasar el ratón por encima
    </p>
  </div>
</template>

<style scoped></style>
