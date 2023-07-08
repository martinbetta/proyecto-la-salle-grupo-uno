<template>
  <div class="gallery">
    <div v-for="(row, index) in galleryRows" :key="index" class="gallery-row">
      <div v-for="image in row" :key="image.id" class="gallery-item">
        <img :src="image.url" @click="deleteImage(image.id)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          id: 1,
          url: "https://th.bing.com/th?id=OIF.9sKH16NMEp9%2btXpCulhA5g&pid=ImgDet&rs=1",
        },
        {
          id: 2,
          url: "https://th.bing.com/th/id/OIF.OSmIMQxJVFF6tOSrYEMrag?pid=ImgDet&rs=1",
        },
        {
          id: 3,
          url: "https://th.bing.com/th?id=OIF.DsBLoCwMZVJlT%2bCyST4hUw&pid=ImgDet&rs=1",
        },
        {
          id: 4,
          url: "https://th.bing.com/th/id/OIF.v1jhogGZtyGuas1ZSwtynw?pid=ImgDet&rs=1",
        },
        { id: 5, url: "https://assets.adnradio.cl/2021/07/Meme-Julio-2.jpg" },
        {
          id: 6,
          url: "https://th.bing.com/th?id=OIF.8sxmE%2bfQrHs3R8oNruhr1w&pid=ImgDet&rs=1",
        },
        // Agrega más imágenes si es necesario
      ],
      imagesPerRow: 3,
    };
  },
  computed: {
    filteredImages() {
      return this.images.filter((image) => !image.deleted);
    },
    galleryRows() {
      const rows = [];
      let index = 0;
      while (index < this.filteredImages.length) {
        rows.push(this.filteredImages.slice(index, index + this.imagesPerRow));
        index += this.imagesPerRow;
      }
      return rows;
    },
  },
  methods: {
    deleteImage(imageId) {
      const image = this.images.find((image) => image.id === imageId);
      if (image) {
        image.deleted = true;
      }
    },
  },
};
</script>
<style>
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.gallery-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.gallery-item {
  width: calc(33.33% - 10px);
}

.gallery-item img {
  width: 100%;
  height: auto;
  cursor: pointer;
}
</style>
