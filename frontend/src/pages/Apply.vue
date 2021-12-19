<template>
  <q-page class="q-pb-xl" style="background-image: linear-gradient(147deg, #000000 0%, #434343 74%);">
    <div
      :style='{ minHeight: `${sectionHeight}px` }'
      class="row q-pa-md justify-center text-center relative-position"
    >
      <div
        class="absolute-center full-width full-height column justify-center items-center"
        style="backdrop-filter: blur(3px); z-index: 1;" v-if="!canApply.status"
      >
        <b class="text-h6">Вы не можете подать заявку.</b>
        <b v-if="canApply?.reason?.length > 0">{{canApply.reason}}</b>
        <q-btn
          icon="keyboard_arrow_down"
          label="Мои заявки"
          class="q-mt-md"
          color="white"
          size="sm"
          outline
          @click="scrollToApplications"
          v-if="myApplications?.length > 0"
        >

        </q-btn>
      </div>
      <div class="col-12">
        <h5 class="text-bold">Подача заявки</h5>
      </div>
      <div class="col-12 col-md-10 col-lg-8 relative-position">
        <q-form
          @submit="onFormSubmit"
          @reset="onFormReset"
          class="q-gutter-md"
        >
          <render-fields :fields="fields" :form="form" @onUpdate="updateForm" />

          <q-toggle
            v-model="checkBoxes.ageAccepted" label="Я подтверждаю, что мой возраст равен или более 15 лет"
          />
          <q-toggle v-model="checkBoxes.rulesAccepted" label="Я прочитал Правила сообщества и Политику конфиденциальности и согласен с ними" />

          <div>
            <q-btn label="Отправить" type="submit" color="primary"/>
            <q-btn label="Очистить" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>

      </div>
    </div>
    <div class="text-center q-py-xl q-px-md" v-if="myApplications?.length > 0" id="applicationsSection">
      <span class="text-h5 text-bold">Мои заявки</span>
      <q-table
        class="q-mx-xl q-my-md no-shadow bg-transparent"
        :rows="myApplications"
        :columns="applicationListColumns"
        row-key="id"
        dark
        color="amber"
        @row-click="openApplication"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { defineComponent, ref, onBeforeMount } from 'vue';
import { date, scroll, useQuasar } from 'quasar';
import { api } from 'boot/axios';
import { useRouter } from 'vue-router';
import { statusList } from 'src/utils/constants';
import RenderFields from '../components/RenderFields.vue';

const { getScrollTarget, setVerticalScrollPosition } = scroll;

function scrollToElement(el: HTMLElement) {
  const target = getScrollTarget(el);
  setVerticalScrollPosition(target, el.offsetTop, 1000);
}

export default defineComponent({
  // name: 'PageName'
  components: { RenderFields },
  setup() {
    const $q = useQuasar();
    const router = useRouter();

    const scrollToApplications = () => {
      scrollToElement(document.getElementById('applicationsSection')!);
    };

    const canApply = ref({ status: false, reason: 'Не получен ответ от бэкенда.' });
    const myApplications = ref<unknown[]>([]);

    const updateCanApply = () => {
      void api.get('canApply').then((resp: Record<string, any>) => {
        canApply.value = resp?.data;
      });
    };

    const updateMyApplications = () => {
      void api.get('getMyApplications').then((resp) => {
        const data = resp.data as { list: unknown[] };
        myApplications.value = data.list || [];
      });
    };

    onBeforeMount(updateCanApply);
    onBeforeMount(updateMyApplications);

    const fields = ref([]);

    onBeforeMount(() => {
      void api.get('getApplicationFields').then((resp) => {
        fields.value = resp.data.fields || [];
      });
    });

    const checkBoxes = ref({
      rulesAccepted: false, ageAccepted: false,
    });

    const form = ref({});

    const onFormReset = () => {
      form.value = {};
    };

    const onFormSubmit = () => {
      if (!checkBoxes.value.rulesAccepted || !checkBoxes.value.ageAccepted) {
        return $q.notify({
          type: 'negative',
          message: 'Вы не можете подать заявку, не согласившись с Правилами сообщества/Политикой конфиденциальности.',
        });
      }

      $q.dialog({
        message: 'Проверка заявки может занять до трёх рабочих дней.<br/>Изменить поданную заявку будет невозможно.<br/><br/>Отправить заявку?',
        html: true,
        cancel: true,
        ok: {
          label: 'Да',
          flat: true,
        },
        persistent: true,
      }).onOk(() => {
        void api.post('sendApplication', {
          form: form.value,
        }).then((resp) => {
          if (resp.data.status === 'success') {
            updateCanApply();
            updateMyApplications();

            $q.notify({
              type: 'positive',
              message: 'Заявка успешно отправлена.',
            });

            onFormReset();
          }
        });
      });

      return true;
    };

    const openApplication = (ev: unknown, row: Record<string, string>) => {
      void router.push({ path: `/application/${row.id}` });
    };

    const updateForm = (val: Record<string, any>) => {
      form.value = val;
    };

    return {
      sectionHeight: window.innerHeight,

      form,
      onFormSubmit,
      onFormReset,

      fields,
      canApply,
      myApplications,
      scrollToApplications,

      openApplication,
      updateForm,

      statusList,
      checkBoxes,

      applicationListColumns: [
        {
          name: 'id', align: 'center', label: 'Номер заявки', field: 'id', sortable: true,
        },
        {
          name: 'createdAt',
          label: 'Дата создания',
          field: 'createdAt',
          format: (val: string) => date.formatDate(val, 'YYYY-MM-DD HH:mm:ss'),
          align: 'center',
        },
        {
          name: 'updatedAt',
          label: 'Дата обновления',
          field: 'updatedAt',
          format: (val: string) => date.formatDate(val, 'YYYY-MM-DD HH:mm:ss'),
          align: 'center',
        },
        {
          name: 'status',
          label: 'Статус',
          field: 'status',
          classes: (row: Record<string, any>) => statusList[row.status].classes || '',
          format: (val: string) => statusList[val].text || val,
          class: 'text-bold',
          align: 'center',
        },
      ],
    };
  },
});
</script>
