<template>
  <q-header class="bg-transparent">
    <q-toolbar class="q-px-lg column">
      <div class="row justify-start full-width" style="height: 95px;">
        <div
          :style='{ transform: `rotate(${rotateDeg}deg)` }'
          class="text-bold brand-text cursor-pointer"
        >
          <div v-morph:logo:mygroup:500.resize="morphGroupModel">
            <img
              :src='
                "https://media.discordapp.net/attachments/770675271208140800/918982945203712020/logo_krug2.png?width=668&height=676"
              '
              @click="switchMorph"
              height="100"
              v-if="!hideLogo"
            />
          </div>
        </div>
        <div
          v-morph:faq:mygroup:1000.resize="morphGroupModel"
          class="fullscreen bg-dark text-white q-pa-xl full-window"
        >
          <span class="text-h2 text-bold">Часто задаваемые вопросы</span>
          <div class="absolute-top-right q-pa-xl">
            <q-icon
              name="close" color="red"
              class="cursor-pointer text-h5" @click="switchMorph"
            ></q-icon>
          </div>
        </div>
      </div>
      <!-- <div class="row justify-center">
        <q-btn flat color="white" label="Forum" type="a" href="https://southland-rp.ru"></q-btn>
        <q-btn flat color="white" label="FAQ" type="a" href="https://southland-rp.ru/faq"></q-btn>
        <q-btn flat color="white" label="Apply" to="/apply"></q-btn>
      </div> -->
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import {
  defineComponent, onBeforeMount, onBeforeUnmount, ref, computed,
} from 'vue';

export default defineComponent({
  // name: 'LayoutName',
  setup() {
    const scrollPos = ref(0);
    const rotateStep = (window.innerHeight / 360);
    const rotateDeg = computed(() => scrollPos.value / rotateStep);
    const hideLogo = ref(false);

    const onScroll = () => {
      scrollPos.value = window.scrollY;
    };

    onBeforeMount(() => {
      window.addEventListener('scroll', onScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', onScroll);
    });

    const morphGroupModel = ref('logo');
    const switchMorph = () => {
      if (morphGroupModel.value === 'logo') {
        morphGroupModel.value = 'faq';
      } else {
        hideLogo.value = true; // костыль?)
        morphGroupModel.value = 'logo';
        setTimeout(() => {
          hideLogo.value = false;
        }, 500);
      }
    };

    return {
      scrollPos,
      rotateStep,
      rotateDeg,
      morphGroupModel,
      switchMorph,
      hideLogo,
    };
  },
});
</script>
