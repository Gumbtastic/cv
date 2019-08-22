<template>
  <div class="cg-gallery">
    <div class="cg-gallery__nav">
      <cg-gallery-button v-for="image in images"
        :key="images.indexOf(image)"
        :imageID="images.indexOf(image)"
        @click.native="setActiveImage(images.indexOf(image))" />
    </div>
    <template v-for="image in images">
      <cg-image :doShow="activeImage"
        :key="images.indexOf(image)"
        :imageID="images.indexOf(image)"
        :image="image.src"
        class="cg-gallery__image">
      </cg-image>
    </template>
  </div>
</template>

<script>
import cgImage from '@/components/cg-image/cg-image.vue';
import cgGalleryButton from './cg-gallery-button.vue';

export default {
  name: 'cg-gallery',
  props: {
    images: Array,
  },
  components: {
    cgImage,
    cgGalleryButton,
  },
  data() {
    return {
      activeImage: 0,
    };
  },
  methods: {
    setActiveImage(imageID) {
      this.activeImage = imageID;
    },
  },
};
</script>

<style scoped lang="scss">
@import '~@/scss/components/cg-gallery/cg-gallery';

/deep/.cg-image__image {
  display: block;
  width: auto;
  height: 100%;
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>
