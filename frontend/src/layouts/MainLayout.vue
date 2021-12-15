<template>
  <q-layout view="lHh Lpr fff" class="no-shadow">
    <transition appear leave-active-class="animated slideOutUp" :duration="6000">
      <div class="fullscreen bg-black" v-if="!isPageLoaded">
        <div class="absolute-center">
          <img
            src="https://media.discordapp.net/attachments/918962856660201512/918983379985240124/logo_krug2_1.png?width=668&height=676"
            alt=""
            height="250"
          >
        </div>
        <svg width="320" height="320" viewBox="0 0 40 40">
          <polygon points="0 0 0 40 40 40 40 0" class="rect"></polygon>
        </svg>
      </div>
    </transition>

    <Header />

    <q-page-container>
      <router-view>
      </router-view>
    </q-page-container>

    <q-footer class="bg-transparent" reveal>
      <q-toolbar class="q-py-md q-px-lg">

        <!-- <div class="text-bold brand-text brand-text-footer">
          South<span
            class="brand-text-la"
          >LA</span>nd Project
        </div> -->
        <div class="text-bold q-gutter-md">
          <q-icon
            name="fab fa-vk"
            class="text-h5 cursor-pointer"
            @click="redirectTo('https://vk.com/southlandrp')"
          >

          </q-icon>
          <q-icon name="fab fa-youtube" class="text-h5 cursor-pointer"
            @click="redirectTo('https://youtube.com')">

          </q-icon>
        </div>
        <q-space>

        </q-space>
        <div class="text-bold brand-text brand-text-footer">
          <span class="brand-text">
            South<span class="brand-text-la">LA</span>nd Project
          </span>
        </div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<style>

.brand-text {
  letter-spacing: 2.3px;
  user-select: none;
}

.brand-text-la {
  color: #121212;
  -webkit-text-stroke: 0.5px #fff;
  position: relative;
  top: -2px;
}

.brand-text-footer {
  font-size: 12px;
}

.q-layout__shadow {
  display: none;
}

.q-page-container {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

svg {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.rect {
  fill: none;
  stroke-width: 1px;
  stroke: white;
  stroke-dasharray: 40;
  stroke-dashoffset: 50%;
  -webkit-animation: movedash 1.5s forwards 0s infinite;
          animation: movedash 1.5s forwards 0s infinite;
}

@-webkit-keyframes movedash {
  to {
    stroke-dashoffset: 250%;
  }
}

@keyframes movedash {
  to {
    stroke-dashoffset: 250%;
  }
}
</style>

<script lang="ts">

import { defineComponent, ref } from 'vue';
import Header from './Header.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    Header,
  },
  setup() {
    const redirectTo = (url: string) => {
      window.location.href = url;
    };

    const isPageLoaded = ref(false);

    window.addEventListener('load', () => {
      setTimeout(() => {
        isPageLoaded.value = true;
      }, 1000);
    });

    return {
      redirectTo,
      isPageLoaded,
    };
  },
});
</script>
