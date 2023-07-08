<template>
  <div class="text-center">
    <h2>Visor de Imágenes</h2>
    <div class="mb-2">
      <button class="bg-primary px-5 mx-3" @click="selectCountry('pais1')">
        España
      </button>
      <button class="bg-primary px-5 mx-3" @click="selectCountry('pais2')">
        Argentina
      </button>
      <button class="bg-primary px-5" @click="selectCountry('pais3')">
        Italia
      </button>
    </div>
    <div>
      <img
        v-if="selectedCountry === 'pais1'"
        src="./icons/OIP.jpeg"
        alt="España"
      />
      <img
        v-else-if="selectedCountry === 'pais2'"
        src="./icons/ARG.jpg"
        alt="Argentina"
      />
      <img
        v-else-if="selectedCountry === 'pais3'"
        src="./icons/italia.png"
        alt="Italia"
      />
      <p v-else>Selecciona un país</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCountry: null,
    };
  },
  methods: {
    selectCountry(country) {
      this.selectedCountry = country;
    },
  },
};
</script>
