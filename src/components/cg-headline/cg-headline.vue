<template>
  <h2 class="cg-headline">{{ title }}</h2>
</template>

<script>
export default {
  name: 'cg-headline',
  props: {
    title: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~@/scss/components/cg-headline/cg-headline.scss';
</style>
