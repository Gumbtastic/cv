<template>
  <div class="cg-listings">
    <cg-title>{{ title }}</cg-title>
    <div class="cg-flex cg-flex--wrap">
      <div class="cg-flex__item">
        <cg-list :list="list1" />
      </div>
      <div class="cg-flex__item">
        <cg-list :list="list2" />
      </div>
    </div>
  </div>
</template>

<script>
import cgTitle from '@/components/cg-title/cg-title.vue';
import cgList from '@/components/cg-list/cg-list.vue';

export default {
  name: 'cg-listings',
  props: {
    title: String,
    list1: Object,
    list2: Object,
  },
  components: {
    cgTitle,
    cgList,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~@/scss/components/cg-listings/cg-listings';
</style>
