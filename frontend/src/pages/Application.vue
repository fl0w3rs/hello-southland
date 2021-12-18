<template>
  <q-page class="q-pb-lg" style="background-color: #000000;
background-image: linear-gradient(147deg, #000000 0%, #434343 74%);">
    <div
      :style='{ minHeight: `${sectionHeight}px` }'
      class="row q-pa-md justify-center relative-position"
    >
      <div
        class="absolute-center full-width full-height column justify-center items-center text-center"
        style="backdrop-filter: blur(3px); z-index: 1;" v-if="!application.row.id"
      >
        <b class="text-h6">Вы не можете просмотреть эту заявку.</b>
      </div>
      <div class="col-12 q-mb-md row text-center justify-center items-center">
        <div class="col-12 q-my-lg">
          <span class="text-bold text-h5">Заявка #{{ application?.row?.id || '181' }}</span>
        </div>
        <div class="col-12 row col-md-10 col-lg-8 q-mt-md text-left justify-center items-center">
          <span class="q-pa-md text-h6 text-bold bg-htransparent rounded-borders">
            Статус заявки:
            <span class="text-lowercase" :class="statusList[application?.row?.status]?.classes">
              {{statusList[application?.row?.status]?.text}}
            </span>
          </span>
          <span class="q-ml-sm q-pa-md text-h6 text-bold bg-htransparent rounded-borders">
            Дата подачи:
            <span class="text-lowercase text-grey">
              {{date.formatDate(application?.row.createdAt, 'YYYY-MM-DD HH:mm:ss')}}
            </span>
          </span>
          <span class="q-ml-sm q-pa-md text-h6 text-bold bg-htransparent rounded-borders">
            Дата обновления:
            <span class="text-lowercase text-grey">
              {{date.formatDate(application?.row.updatedAt, 'YYYY-MM-DD HH:mm:ss')}}
            </span>
          </span>
        </div>
        <div class="col-12 row col-md-10 col-lg-8 q-mt-md text-left justify-center items-center q-gutter-xs" v-if="authInfo().isAdmin">
          <template v-if="application?.row?.status == 'processing'">
            <q-btn color="green" label="Одобрить" icon="done" @click="updateStatus('accepted')" outline />
            <q-btn color="red" label="Отклонить" icon="close" @click="updateStatus('declined')" outline />
          </template>
          <q-btn color="orange" type="a" :href="`https://southland.fl0w3rs.dev/index.php?/profile/${application?.row?.userId}-hello`" label="Форумный аккаунт" icon="person" outline />
        </div>
      </div>
      <div class="q-mt-md col-12 col-md-10 col-lg-8">
        <q-form
          class="q-gutter-md"
        >
          <render-fields
            :fields="application.fields" :form="application.row.values"
            :readonly="true"
          />
        </q-form>

      </div>
      <div class="col-12 col-md-10 col-lg-8 row bg-htransparent rounded-borders q-pa-lg">
        <span class="text-bold text-h4 q-mb-lg">Чат с командой проекта</span>
        <div style="min-width: 100%;">
          <q-chat-message
            v-for="comment in application.row.comments" v-bind:key="comment.id"
            :name="comment.isAdmin ? authInfo().isAdmin ? `SouthLAnd Project (${comment.userName})` : 'SouthLAnd Project' : comment.userName"
            :text="[ comment.text ]"
            :sent="authInfo().userId == comment.userId"
            :avatar="comment.isAdmin ? 'https://i.imgur.com/gMY3Cz3.png' : undefined"
          />
          <q-input autogrow filled class="q-mt-md" v-model="commentText" v-if="application.row.userId == authInfo().userId" label="Комментарий">
            <template v-slot:after>
              <q-btn dense flat label="Отправить" icon="send" @click="sendComment" />
            </template>
          </q-input>
          <q-input autogrow filled class="q-mt-md" v-model="adminCommentText" v-if="authInfo().isAdmin" label="Комментарий">
            <template v-slot:after>
              <q-btn dense flat label="Отправить как администратор"  @click="sendAdminComment" color="red" icon="send" />
            </template>
          </q-input>
        </div>

      </div>
    </div>
  </q-page>
</template>

<style lang="scss">
.bg-htransparent {
  background: rgba(255, 255, 255, 0.07);
}
</style>

<script lang="ts">
import {
  defineComponent,
  ref,
  onBeforeMount,
  watch,
} from 'vue';
import { useRoute } from 'vue-router';
import { api } from 'boot/axios';
import { mapGetters } from 'vuex';
import { date } from 'quasar';
import { statusList } from 'src/utils/constants';
import RenderFields from '../components/RenderFields.vue';

export default defineComponent({
  components: { RenderFields },
  setup() {
    const application = ref({
      row: {
        id: 0,
      },
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

    const commentText = ref('');
    const adminCommentText = ref('');

    const sendComment = () => {
      void api.post('sendComment', { applicationId: application.value.row.id, text: commentText.value }).then((resp) => {
        if (resp.data.status === 'success') {
          commentText.value = '';
          getApplication();
        }
      });
    };

    const sendAdminComment = () => {
      void api.post('sendComment', { applicationId: application.value.row.id, text: adminCommentText.value, admin: true }).then((resp) => {
        if (resp.data.status === 'success') {
          adminCommentText.value = '';
          getApplication();
        }
      });
    };

    const updateStatus = (newStatus: string) => {
      void api.post('setStatus', { applicationId: application.value.row.id, status: newStatus });
    };

    return {
      sectionHeight: window.innerHeight,
      application,

      commentText,
      adminCommentText,

      sendComment,
      sendAdminComment,
      statusList,

      date,

      updateStatus,

      ...mapGetters({
        authInfo: 'main/getAuth',
      }),
    };
  },
});
</script>
