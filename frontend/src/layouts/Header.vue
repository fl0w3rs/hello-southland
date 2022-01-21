<template>
  <q-header class="bg-transparent">
    <q-toolbar class="q-px-lg column">
      <div class="row justify-start full-width" style="height: 95px;">
        <div
          class="text-bold brand-text full-width row items-center"
        >
          <div class="cursor-pointer" :style='{ transform: `rotate(${rotateDeg}deg)` }' v-morph:logo:mygroup:500.resize="morphGroupModel">
            <img
              class="q-mt-md"
              :src='
                "https://i.imgur.com/gMY3Cz3.png"
              '
              @click="switchMorph"
              height="80"
              v-if="!hideLogo"
            />
          </div>
          <q-space></q-space>
          <div class="row q-gutter-xs justify-center items-center">
            <q-btn label="Главная" to="/" flat color="white"></q-btn>
            <q-btn v-if="authInfo().authenticated" label="Форум" type="a" href="https://forum.southland-rp.ru/" flat color="white"></q-btn>
            <q-btn v-if="authInfo().isAdmin" label="Админ панель" to="/admin/application/list" flat color="white"></q-btn>
            <q-btn v-if="!authInfo().authenticated" label="Вход" type="a" href="https://forum.southland-rp.ru/login/" flat color="white"></q-btn>
            <q-btn v-if="!authInfo().authenticated" label="Регистрация" type="a" href="https://forum.southland-rp.ru/register/" flat color="white"></q-btn>
            <div class="q-ml-sm" v-if="authInfo().authenticated">
              {{authInfo().name}}
            </div>
          </div>
        </div>

        <div
          v-morph:faq:mygroup:1000.resize="morphGroupModel"
          class="fullscreen bg-dark text-white q-pa-xl full-window"
        >
          <span class="text-h2 text-bold">Часто задаваемые вопросы</span>
          <q-scroll-area style="height: 100%; width: 100%;">
            <p class="q-mt-md" style="font-size: 15px;">
              Q: Каково примерное время ожидания проверки заявки в сообщество?<br/>

              A: Заявки для каждого рассматриваются с одинаковой скоростью, примерное время ожидания от 6 часов, до трёх суток, поэтому наберитесь терпения и ожидайте одобрения.<br/><br/>

              Q: Могу ли я стать участником сообщества не имея лицензионную копию Grand Theft Auto V?<br/>

              A: Да, Вы можете, но учтите, что зайти на сервер у Вас не получится, за исключением игры за диспетчерский департамент, который доступен практически для всех, даже для желающих со слабыми компьютерами.<br/><br/>

              Q: Мне обязательно иметь лицензионную копию Steam Grand Theft Auto V?<br/>

              A: Нет, это не обязательно, игру можно иметь как Steam копию, так и Epic Game Store или Social Club, главное заранее привязать игру к платформе Steam, как стороннюю игру.<br/><br/>

              Q: Как происходит отбор?<br/>

              A: Точные моменты отбора в сообщество не разглашаются, но Вы должны пройти через 3 стадии, это - подача заявки, далее - интервью и тренировка. Каким образом это происходит мы не разглашаем, увы.<br/><br/>

              Q: Какой у Вас стабильный онлайн?<br/>

              A: На данный момент мы стабильно имеем 26 человек онлайна, из которых половина являются участниками гражданского департамента. Этого вполне достаточно для полной и комфортной игры, уж поверьте.<br/><br/>

              Q: Если мне меньше 14 лет, я могу попробовать себя в роли участника вашего сообщества?<br/>

              A: У нас имеются строгие ограничения по возрасту, а именно лицам до 15 лет запрещено являться участниками сообщества по причине излишней порчи атмосферы, мы всеми усилиями пытаемся её создать, а не ухудшить,  но, если же Вы имеете приятный голос и на интервью покажете себя с лучшей стороны, то возможно общим голосованием мы сможем сделать исключение.<br/><br/>

              Q: Какие у Вас модификации и каким образом происходит их установка?<br/>

              A: Такую информацию мы не распространяем, но все модификации скачиваются автоматическим образом при загрузке на сервер.<br/><br/>

              Q: Какой клиент или лаунчер Вы используете?<br/>

              A: Сейчас мы используем самый стабильный клиент - FiveM, он более менее оптимизирован и даёт возможность воплотить наши мысли в реальность имея обширный функционал.<br/><br/>

              Q: Что насчёт микрофона?<br/>

              A: По правилам сообщества лицам не имеющим микрофон или имеющим неисправность запрещено принимать участие на игровых сессиях, это наказывается, поэтому уважайте других участников, им не приятно слышать, фон, посторонние шумы вашего микрофона.<br/><br/>

              Q: У Вас нет игровой валюты, как это так?<br/>

              A: Всё очень просто, мы не отталкиваемся от игровых денег, они в принципе не нужны, также как и уровни, всё происходит совсем другим путём. Здесь, люди бессмысленно не тратят своё личное время на прокачку игрового аккаунта, они создают реалистичные и интересные ситуации, сами продумывают каждую деталь и не ограничиваются почти ничем. Грубо говоря, что хотите, то и делаете, конечно же соблюдая все правила сообщества.<br/><br/>

              Q: На этой странице я не нашёл ответа на свой вопрос, что делать?<br/>

              A: Здесь мы привели самые часто задаваемые вопросы, остальное по правилам сообщества мы не разглашаем, но, возможно Вы сможете получить ответ на свой вопрос здесь - https://vk.com/southlandrp.
            </p>
          </q-scroll-area>
          <div class="absolute-top-right q-pa-xl">
            <q-icon
              name="close" color="red"
              class="cursor-pointer text-h5" @click="switchMorph"
            ></q-icon>
          </div>
        </div>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import {
  defineComponent, onBeforeMount, onBeforeUnmount, ref, computed,
} from 'vue';
import { mapGetters } from 'vuex';

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

      ...mapGetters({
        authInfo: 'main/getAuth',
      }),
    };
  },
});
</script>
