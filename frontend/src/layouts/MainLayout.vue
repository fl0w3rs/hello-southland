<template>
  <q-layout view="lHh Lpr fff" class="no-shadow">

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
            @click="redirectTo('https://vk.com')"
          >

          </q-icon>
          <q-icon name="fab fa-youtube" class="text-h5 cursor-pointer">

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
</style>

<script lang="ts">

import { defineComponent } from 'vue';
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
    return {
      redirectTo,
    };
  },
});
</script>
