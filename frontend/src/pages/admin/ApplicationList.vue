<template>
  <q-page class="row justify-center items-center">
    <div class="col-12 q-gutter-xs row justify-center">
      <q-btn-toggle
        v-model="tab"
        toggle-color="primary"
        outline
        :options="[
          {label: 'Все', value: 'all'},
          {label: 'В обработке', value: 'processing'},
          {label: 'Одобренные', value: 'accepted'},
          {label: 'Отклонённые', value: 'declined'}
        ]"
      />
    </div>
    <div class="col-12">
      <q-table
        class="q-mx-xl q-my-md no-shadow"
        :rows="applicationsFiltered"
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
import { defineComponent, ref, computed } from 'vue';
import { api } from 'boot/axios';
import { date } from 'quasar';
import { useRouter } from 'vue-router';
import { statusList } from 'src/utils/constants';

export default defineComponent({
  setup() {
    const router = useRouter();
    const tab = ref('all');
    const applications = ref<{status: string}[]>([]);

    void api.get('getAllApplications').then((resp) => {
      applications.value = resp.data.list;
    });

    const openApplication = (ev: unknown, row: Record<string, string>) => {
      void router.push({ path: `/application/${row.id}` });
    };

    return {
      applications,
      openApplication,
      tab,
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

      applicationsFiltered: computed(() => {
        const forms = [];

        for (let i = 0; i < applications.value.length; i += 1) {
          if (tab.value === 'all') {
            forms.push(applications.value[i]);
            // eslint-disable-next-line no-continue
            continue;
          }

          if (tab.value === applications.value[i].status) {
            forms.push(applications.value[i]);
          }
        }

        return forms;
      }),
    };
  },
});
</script>
