<template>
  <ul class="cg-list">
    <li v-for="(item , i) in list" :key="i" class="cg-list__item">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'cg-list',
  props: {
    list: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~@/scss/components/cg-list/cg-list.scss';
</style>
