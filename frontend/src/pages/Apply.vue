<template>
  <q-page>
    <div
      class="bg-dark q-pa-md column justify-center items-center q-pa-xl"
      :style='{ minHeight: `${sectionHeight}px` }'
    >
      <div class="row full-width">
        <div class="col-12 col-md-4">
          <p class="text-h5 text-bold">Как подать заявку?</p>
          <p class="text-h6">
            <span class="text-grey">Шаг 1.</span><br/>
            Убедитесь, что Вы соответствуете требованиям
          </p>
          <p class="text-h6">
            <span class="text-grey">Шаг 2.</span><br/>
            Пройдите регистрацию на форуме
          </p>
          <p class="text-h6">
            <span class="text-grey">Шаг 3.</span><br/>
            <q-btn
              class="q-mt-xs" label="Подать заявку" color="white" outline
              @click="apply"
            ></q-btn>
          </p>
        </div>
        <div class="col-12 col-md-8">
          <p class="text-h5 text-bold">Ваши заявки</p>
          <div class="rounded-borders bg-grey-10 q-py-md q-px-lg" style="border: 1px solid rgba(0,0,0,.425);">
            Пустовато. Может попробуем?
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  // name: 'PageName'
  components: {},
  setup() {
    const $q = useQuasar();

    const apply = () => {
      $q.notify({
        type: 'negative',
        message: 'Вы не авторизованы на форуме.',
      });
    };

    return {
      sectionHeight: window.innerHeight,
      apply,
    };
  },
});
</script>
