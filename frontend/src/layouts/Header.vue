<template>
  <q-header class="bg-transparent">
    <q-toolbar class="q-px-lg column">
      <div class="row justify-start full-width" style="height: 95px;">
        <div
          :style='{ transform: `rotate(${rotateDeg}deg)` }'
          class="text-bold brand-text cursor-pointer"
          @click="lol = !lol"
        >
          <img
            :src='
              lol ? "https://media.discordapp.net/attachments/770675271208140800/918982945203712020/logo_krug2.png?width=668&height=676"
              : "https://media.discordapp.net/attachments/918962856660201512/918983379985240124/logo_krug2_1.png?width=668&height=676"
            '
            height="100"
          />
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

    const lol = ref(false);

    const onScroll = () => {
      scrollPos.value = window.scrollY;
    };

    onBeforeMount(() => {
      window.addEventListener('scroll', onScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', onScroll);
    });

    return {
      scrollPos,
      rotateStep,
      rotateDeg,
      lol,
    };
  },
});
</script>
