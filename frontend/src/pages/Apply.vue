<template>
  <q-page>
    <q-parallax
      :height="sectionHeight / 2"
      src="https://southland-rp.ru/uploads/monthly_2020_11/large.2423dsada.jpg.13fc66b7aadde1f0a05515abbd63d36c.jpg"
    >
    <div
      class="q-pa-md column justify-center items-center">
      <span class="text-h2 text-bold text-orange">JOIN US!</span>
      <span class="text-h4 text-weight-medium q-mt-md">Стань частью нашего сообщества и воплоти свою мечту.</span>
    </div>
    </q-parallax>
    <div
      class="q-pa-md column justify-center items-center q-pa-xl"
      :style='{ minHeight: `${sectionHeight/2}px` }'
    >
      <span class="text-h6 text-center">
        <p class="q-ma-none">Статус приёма заявок на данный момент - <span class="text-red text-bold">закрыт</span>.</p>
        <p class="q-ma-none text-orange-6">Следующее открытие планируется <b>20 августа</b>.</p>
        <p class="q-ma-none q-mt-md">Периодически наше сообщество открывает приём заявок для тех, кто заинтересован во вступлении.</p>
        <p>Каждая заявка проходит следующие этапы:</p>
      </span>
      <join-us-stepper />
    </div>
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
import JoinUsStepper from 'src/components/joinUs/Stepper.vue';

export default defineComponent({
  // name: 'PageName'
  components: {
    JoinUsStepper,
  },
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
