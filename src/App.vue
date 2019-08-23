<template>
  <div id="app">

    <cg-hero />

    <div class="cg-content cg-flex">

      <transition name="slide-fade-left">
        <div v-if="showContentLeft" class="cg-flex__item cg-content__left"
          :class="{ 'cg-content--2columns': currentDrawerPosition !== 'center' }">
          <cg-thumbnails title="Werkzeuge"
            :images="data.designTools"
            centered />
          <cg-thumbnails title="Weitere"
            :images="data.designFamiliar"
            centered />
          <cg-listings title="Fähigkeiten"
            :list1="data.designSkills1"
            :list2="data.designSkills2" />
          <cg-listings title="Weitere"
            :list1="data.dCanDo1"
            :list2="data.dCanDo2" />
          <cg-thumbnails
            title="Projekte"
            :images="data.designProjects"
            centered
            v-on:setProject="setCurrentProject($event)" />
        </div>
      </transition>

      <div class="cg-flex cg-flex__item cg-content__center-column">
        <cg-drawer
          v-on:drawerLeftClick="drawerLeftClicked()"
          v-on:drawerRightClick="drawerRightClicked()"
          :drawerPosition="currentDrawerPosition" />
      </div>

      <transition name="slide-fade-right">
        <div v-if="showContentRight"
          class="cg-flex__item cg-content__right"
          :class="{ 'cg-content--2columns': currentDrawerPosition !== 'center' }">
          <cg-thumbnails title="Werkzeuge"
            :images="data.codeTools"
            centered />
          <cg-thumbnails title="Weitere"
            :images="data.codeFamiliar"
            centered />
          <cg-listings title="Fähigkeiten"
            :list1="data.codeSkills1"
            :list2="data.codeSkills2" />
          <cg-listings title="Weitere"
            :list1="data.cCanDo1"
            :list2="data.cCanDo2" />
          <cg-thumbnails
            title="Projekte"
            :images="data.codeProjects"
            centered
            v-on:setProject="setCurrentProject($event)" />
        </div>
      </transition>

    </div>

    <div class="cg-content cg-flex">

      <div class="cg-flex__item cg-content__left">
        <cg-thumbnails title="Arbeitgeber"
          :images="data.companys"
          centered />
      </div>

      <div class="cg-flex__item cg-content__center-column"></div>

      <div class="cg-flex__item cg-content__right">
        <cg-thumbnails title="Kontakt"
          :images="data.contact"
          centered />
      </div>

    </div>

    <footer class="cg-footer">
      <p>CGCV - v 0.3 - X8222X19</p>
    </footer>

    <transition name="fade">
      <cg-modal v-if="modalOpen"
        v-on:close="closeModal"
        :project="currentProject" />
    </transition>

  </div>
</template>

<script>
import cgHero from './components/cg-hero/cg-hero.vue';
import cgDrawer from './components/cg-drawer/cg-drawer.vue';
import cgThumbnails from './components/cg-thumbnails/cg-thumbnails.vue';
import cgListings from './components/cg-listings/cg-listings.vue';
import cgModal from './components/cg-modal/cg-modal.vue';

import cgData from './data/data.json';

export default {
  name: 'app',
  components: {
    cgHero,
    cgDrawer,
    cgThumbnails,
    cgListings,
    cgModal,
  },
  data() {
    return {
      showContentLeft: true,
      showContentRight: true,
      currentDrawerPosition: 'center',
      modalOpen: false,
      currentProject: '',
      data: cgData,
    };
  },
  methods: {
    openModal() {
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    },
    setCurrentProject(projectID) {
      this.currentProject = this.data[projectID];
      this.openModal();
    },
    drawerLeftClicked() {
      if (this.currentDrawerPosition === 'center') {
        this.showContentLeft = false;
        this.currentDrawerPosition = 'left';
      } else if (this.currentDrawerPosition === 'right') {
        this.showContentRight = true;
        this.currentDrawerPosition = 'center';
      }
    },
    drawerRightClicked() {
      if (this.currentDrawerPosition === 'center') {
        this.showContentRight = false;
        this.currentDrawerPosition = 'right';
      } else if (this.currentDrawerPosition === 'left') {
        this.showContentLeft = true;
        this.currentDrawerPosition = 'center';
      }
    },
  },
  created() {
    const html = document.documentElement; // returns the html tag
    html.setAttribute('lang', 'de');
  },
};
</script>

<style lang="scss">
@import 'scss/base/base';
@import 'scss/base/typography';

@import 'scss/layout/cg-flex/cg-flex';
@import 'scss/layout/cg-content/cg-content';

@import 'scss/components/cg-drawer/cg-drawer';
@import 'scss/components/cg-footer/cg-footer';

.slide-fade-left-enter-active,
.slide-fade-right-enter-active {
  transition: all .3s ease-in-out;
}
.slide-fade-left-leave-active,
.slide-fade-right-leave-active {
  transition: all .3s ease-in-out;
}
.slide-fade-left-enter, .slide-fade-left-leave-to,
.slide-fade-right-enter, .slide-fade-right-leave-to {
  opacity: 0;
  width: 0;
  min-width: 0;
  padding: 0;
}

.slide-fade-left-enter, .slide-fade-left-leave-to {
  transform: translateX(-100%);
}
.slide-fade-right-enter, .slide-fade-right-leave-to {
  transform: translateX(100%);
}
</style>
