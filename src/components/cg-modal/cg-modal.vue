<template>
  <div class="cg-modal">
    <div class="cg-modal__close" @click="$emit('close')">x</div>
    <div class="cg-modal__container">
      <div class="cg-modal__left">
        <cg-gallery :images="project.images" />
      </div>
      <div class="cg-modal__right">
        <cg-title>{{ project.title }}</cg-title>
        <cg-text :text="project.text"
          :isLink="project.textLink != undefined"
          :link="project.textLink"
          :linkText="project.textLinkName" />
        <cg-listings title="Main Tasks" :list1="project.list" />
        <cg-text v-if="project.link != ''"
          isLink 
          :link="project.link" 
          linkText="Projekt ansehen" />
      </div>
    </div>
    <div class="cg-modal__bg-close" @click="$emit('close')"></div>
  </div>
</template>

<script>
import cgTitle from '@/components/cg-title/cg-title.vue';
import cgListings from '@/components/cg-listings/cg-listings.vue';
import cgGallery from '@/components/cg-gallery/cg-gallery.vue';
import cgText from '@/components/cg-text/cg-text.vue';

export default {
  name: 'cg-modal',
  props: {
    project: Object,
  },
  components: {
    cgTitle,
    cgListings,
    cgGallery,
    cgText,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~@/scss/components/cg-modal/cg-modal';

.cg-text {
  margin-bottom: $spacing-l;

  &:last-of-type {
    margin-bottom: 0;
  }
}

.cg-listings {
  margin-bottom: 0;
  min-height: initial;
}

/deep/.cg-flex__item {
  padding-top: 0;
}
</style>
