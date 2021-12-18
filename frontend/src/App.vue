<template>
  <router-view />
</template>
<script lang="ts">
import { useQuasar } from 'quasar';
import { defineComponent } from 'vue';
import { useStore } from 'src/store';

export default defineComponent({
  name: 'App',
  setup() {
    const $q = useQuasar();
    const store = useStore();

    $q.dark.set(true);
    void store.dispatch('main/doAuth');
  },
});
</script>
