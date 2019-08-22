<template>
  <transition name="fade">
    <div v-if="show"
      class="cg-image"
      :class="{ 'cg-image--thumbnail': type === 'thumbnail', 'cg-image--round': type === 'round' }"
      @mouseover="hover = true"
      @mouseleave="hover = false">
      <img class="cg-image__image" :src="image" :alt="title"/>
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: 'cg-image',
  props: {
    imageID: {
      type: Number,
      default: 0,
    },
    image: String,
    type: String,
    title: String,
    doShow: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      hover: false,
    };
  },
  computed: {
    show() {
      return this.doShow === this.imageID;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~@/scss/components/cg-image/cg-image.scss';
</style>
