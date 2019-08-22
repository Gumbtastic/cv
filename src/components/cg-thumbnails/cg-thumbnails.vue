<template>
  <div class="cg-thumbails">

    <cg-title>{{ title }}</cg-title>
    <div class="cg-flex cg-flex--wrap">

      <div class="cg-flex__item" v-for="image in images"
        :key="images.indexOf(image)"
        :class="{ 'cg-flex__item--centered': centered }">

        <template v-if="image.project != undefined && image.project != ''">
          <cg-image class="cg-image--link"
            :title="image.title"
            :image="image.src"
            type="thumbnail"
            @click.native="$emit('setProject', image.project)">
            <cg-tooltip :title="image.title" />
          </cg-image>
        </template>
        <template v-else-if="image.link != undefined">
          <a :target="image.target" :href="image.link">
            <cg-image :title="image.title"
              :image="image.src"
              type="thumbnail">
              <cg-tooltip :title="image.title" />
            </cg-image>
          </a>
        </template>
        <template v-else>
          <cg-image :title="image.title"
            :image="image.src"
            type="thumbnail">
            <cg-tooltip :title="image.title" :rating="image.rating" />
          </cg-image>
        </template>

      </div>

    </div>

  </div>
</template>

<script>
import cgTitle from '@/components/cg-title/cg-title.vue';
import cgImage from '@/components/cg-image/cg-image.vue';
import cgTooltip from '@/components/cg-tooltip/cg-tooltip.vue';

export default {
  name: 'cg-thumbnails',
  props: {
    title: String,
    images: Array,
    centered: Boolean,
  },
  components: {
    cgTitle,
    cgImage,
    cgTooltip,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~@/scss/components/cg-thumbnails/cg-thumbnails';
</style>
