<template>
<div>
  <v-navigation-drawer v-model="drawer" app disable-resize-watcher temporary>
    <v-list dense>
      <template v-for="item in navItems">
        <v-list-tile :key="item.title" :to="item.componentName ? {name: item.componentName} : null" :color="item.errorColor ? item.errorColor : undefined" @click="itemClicked(item)">
          <v-list-tile-action>
            <v-icon v-if="!item.isSvg">
              {{ item.icon }}
            </v-icon>
            <v-layout v-else>
              <img :src="item.icon" alt="logo" width='20px' />
            </v-layout>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
        <v-divider :key="item.title + '_2'" />
      </template>
    </v-list>
  </v-navigation-drawer>
  <v-toolbar app flat dark dense>

    <template v-if="$vuetify.breakpoint.smAndUp"></template>
    <v-btn v-for="item of itemsLeft" :key="item.title" flat :to="item.componentName ? {name: item.componentName} : null" @click="itemClicked(item)">
      {{ item.title }}
    </v-btn>





    <template v-if="$vuetify.breakpoint.xsOnly">
      <v-toolbar-title class="title">{{ routeTitle }}</v-toolbar-title>
    </template>

    <v-toolbar-items v-if="$vuetify.breakpoint.smAndUp">

      <v-btn v-for="item of itemsRight" :key="item.title" flat :to="item.componentName ? {name: item.componentName} : null" :color="item.errorColor ? item.errorColor : undefined" @click="itemClicked(item)">
        {{ item.title }}
      </v-btn>
      <v-layout v-if="busy" align-center>
        <app-spinner :color="busyColor" />
      </v-layout>

    </v-toolbar-items>
<p style="padding-top:1%;color:rgba(255,255,255,0.5)">This part of the application is based on the <a target=_blank href="https://github.com/latsic/imgalign">imgAlign Github Project</a></p>
    <template v-if="$vuetify.breakpoint.xsOnly">
      <v-spacer />
      <v-toolbar-items>
        <v-layout align-center v-if="busy">
          <app-spinner :color="busyColor" />
        </v-layout>
        <v-layout align-center v-else>
          <img :src="logo" alt="logo" width='30px' />
        </v-layout>
      </v-toolbar-items>
    </template>

  </v-toolbar>

</div>
</template>

<script>
import Spinner from '@/components/gui/Spinner';
import LogoSvg from '@/assets/logo_200x200.png';

export default {
  components: {
    'AppSpinner': Spinner
  },
  props: {
    busyWorker: {
      type: Boolean,
      default: false
    },
    workerReady: {
      type: Boolean,
      default: true
    },
    busyInput: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      drawer: false,
      appTitle: 'Image Aligner'
    };
  },
  computed: {
    itemsLeft() {
      return [{
          title: 'MultiStitcher',
          componentName: 'multistitcher',
          func: null,
          icon: 'burst_mode'
        },
        {
          title: 'Settings',
          componentName: 'settings',
          func: null,
          icon: 'burst_mode'
        }
      ];
    },
    itemsRight() {
      return [];
    },
    nonNavItems() {
      return [];
    },
    navItems() {
      return [...this.itemsLeft, ...this.itemsRight];
    },
    allItems() {
      return [...this.itemsXsOnly, ...this.itemsLeft, ...this.itemsRight, ...this.nonNavItems];
    },
    routeTitle() {
      for (const item of this.allItems) {
        if (item.componentName == this.$route.name) {
          return item.title;
        }
      }
      return "";
    },
    nonNavRouteTitle() {
      for (const item of this.nonNavItems) {
        if (item.componentName == this.$route.name && item.title) {
          return item.title;
        }
      }
      return null;
    },
    busy() {
      return this.busyWorker || this.busyInput;
    },
    busyColor() {
      if (this.busyWorker || !this.workerReady) {
        return this.$vuetify.theme.accent;
      }
      return this.$vuetify.theme.error;
    },
    logo() {
      return LogoSvg;
    }
  },
  methods: {
    itemClicked(item) {
      if (item.func) {
        item.func();
      }
    },
    relatedItem(name) {
      return this.relatedItems[name];
    }
  }
};
</script>

<style scoped>
</style>
