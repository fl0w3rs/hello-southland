<template>
  <q-page>
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
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
        >
          <q-input
            filled
            v-model="form.name"
            label="Имя и фамилия *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Введите имя и фамилию']"
          />

          <q-input
            filled
            type="number"
            v-model="form.age"
            label="Ваш возраст *"
            lazy-rules
            :rules="[
              val => val !== null && val !== '' || 'Введите возраст',
            ]"
          />

          <q-input
            filled
            v-model="form.name"
            label="Какой-то длинный вопрос *"
            lazy-rules
            type="textarea"
            :rules="[ val => val && val.length > 0 || 'Введите ответ на вопрос']"
          />

          <q-select
            filled
            v-model="form.departments"
            :options="['LSPD&BCSO', 'SAHP', 'FD', 'Гражданский департамент', 'Диспетчерский департамент']"
            label="Выберите, в какие департаменты вы хотите попасть"
            :rules="[ val => val && val.length > 0 || 'Выберите хотя бы один департамент']"
          />

          <q-toggle v-model="form.rulesAccepted" label="Я прочитал правила и согласен с ними" />

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
        class="q-mx-xl q-my-md no-shadow"
        :rows="myApplications"
        :columns="applicationListColumns"
        row-key="id"
        dark
        color="amber"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { defineComponent, ref } from 'vue';
import { useQuasar, date, scroll } from 'quasar';
import { api } from 'boot/axios';

const { getScrollTarget, setVerticalScrollPosition } = scroll;

function scrollToElement(el: HTMLElement) {
  const target = getScrollTarget(el);
  setVerticalScrollPosition(target, el.offsetTop, 1000);
}

export default defineComponent({
  // name: 'PageName'
  components: {},
  setup() {
    const $q = useQuasar();

    const scrollToApplications = () => {
      scrollToElement(document.getElementById('applicationsSection')!);
    };

    const statusList = {
      processing: {
        text: 'Обрабатывается',
        classes: 'text-orange',
      },
    };

    const canApply = ref({});
    const myApplications = ref([]);

    void api.get('canApply').then((resp: Record<string, any>) => {
      canApply.value = resp?.data;
    });

    void api.get('getMyApplications').then((resp: Record<string, Record<string, any>>) => {
      myApplications.value = resp.data.list || [];
    });

    const fields = ref([
      {
        label: 'Имя и фамилия',
        type: 'text',

      },
    ]);

    const apply = () => {
      $q.notify({
        type: 'negative',
        message: 'Вы не авторизованы на форуме.',
      });
    };

    const form = ref({
      rulesAccepted: false,
      age: null,
    });

    return {
      sectionHeight: window.innerHeight,
      apply,

      form,

      fields,
      canApply,
      myApplications,
      scrollToApplications,

      statusList,

      applicationListColumns: [
        {
          name: 'id', align: 'center', label: 'Номер заявки', field: 'id', sortable: true,
        },
        {
          name: 'createdAt',
          label: 'Дата создания',
          field: 'createdAt',
          format: (val) => date.formatDate(val, 'YYYY-MM-DD HH:mm:ss'),
        },
        {
          name: 'updatedAt',
          label: 'Дата обновления',
          field: 'updatedAt',
          format: (val) => date.formatDate(val, 'YYYY-MM-DD HH:mm:ss'),
        },
        {
          name: 'status',
          label: 'Статус',
          field: 'status',
          classes: (row) => statusList[row.status].classes || '',
          format: (val) => statusList[val].text || val,
          class: 'text-bold',
        },
      ],
    };
  },
});
</script>
