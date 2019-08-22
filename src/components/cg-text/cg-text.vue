<template>
  <div class="cg-text">
    <slot />
    <template v-if="text != undefined">
      <p v-for="(absatz, i ) in text"
        :key="i"
        class="cg-text__paragraph">
        {{ absatz }}
      </p>
    </template>
    <template v-if="isLink">
      <a class="cg-text__link" :href="link" target="_blank">{{ linkText }}</a>
    </template>
  </div>
</template>

<script>

export default {
  name: 'cg-text',
  props: {
    text: Object,
    isLink: Boolean,
    link: String,
    linkText: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~@/scss/components/cg-text/cg-text';
</style>
