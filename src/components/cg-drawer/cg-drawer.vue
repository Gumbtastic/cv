<template>
  <div class="cg-drawer cg-flex">
      <div class="cg-drawer__left-button cg-flex__item"
        @click="$emit('drawerLeftClick')"
        v-if="drawerPosition === 'center' || drawerPosition === 'right'">
      </div>
      <div class="cg-drawer__right-button cg-flex__item"
        @click="$emit('drawerRightClick')"
        v-if="drawerPosition === 'center' || drawerPosition === 'left'">
      </div>
  </div>
</template>

<script>
export default {
  name: 'cg-drawer',
  props: {
    drawerPosition: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~@/scss/components/cg-drawer/cg-drawer.scss';
</style>
