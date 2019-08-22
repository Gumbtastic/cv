<template>
  <div class="cg-hero">
    <div class="cg-hero__container">
      <cg-headline :title="headlineLeft"></cg-headline>
      <div class="cg-hero__avatar">
        <cg-image class="cg-hero__image" type="round" image="images/it-8_square_72dpi.png" />
        <h3 class="cg-hero__name">Christian Gumbert</h3>
      </div>
      <cg-headline class="cg-headline--right" :title="headlineRight"></cg-headline>
    </div>
  </div>
</template>

<script>
import cgHeadline from '@/components/cg-headline/cg-headline.vue';
import cgImage from '@/components/cg-image/cg-image.vue';

export default {
  name: 'cg-hero',
  components: {
    cgHeadline,
    cgImage,
  },
  data() {
    return {
      headlineLeft: 'UI & UX\nDesign',
      headlineRight: 'Front\nend',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~@/scss/components/cg-hero/cg-hero';
</style>
