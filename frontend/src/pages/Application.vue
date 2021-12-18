<template>
  <q-page>
    <div
      :style='{ minHeight: `${sectionHeight}px` }'
      class="row q-pa-md justify-center text-center relative-position"
    >
      <div
        class="absolute-center full-width full-height column justify-center items-center"
        style="backdrop-filter: blur(3px); z-index: 1;" v-if="!application.row.id"
      >
        <b class="text-h6">Вы не можете просмотреть эту заявку.</b>
      </div>
      <div class="col-12">
        <h5 class="text-bold">Заявка #{{ application?.row?.id || '181' }}</h5>
      </div>
      <div class="col-12 col-md-10 col-lg-8 relative-position">
        <q-form
          class="q-gutter-md"
        >
          <render-fields
            :fields="application.fields" :form="application.row.values"
            :readonly="true"
          />
        </q-form>

      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onBeforeMount,
  watch,
} from 'vue';
import { useRoute } from 'vue-router';
import { api } from 'boot/axios';
import RenderFields from '../components/RenderFields.vue';

export default defineComponent({
  components: { RenderFields },
  setup() {
    const application = ref({
      row: {},
      fields: {},
    });

    const route = useRoute();

    const getApplication = () => {
      if (route.params.id) {
        void api.post('getApplication', { id: route.params.id }).then((resp) => {
          application.value = resp.data;
        });
      }
    };

    onBeforeMount(getApplication);

    watch(() => route.params.id, () => {
      getApplication();
    });

    return {
      sectionHeight: window.innerHeight,
      application,
    };
  },
});
</script>
