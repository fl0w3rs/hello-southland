<template>
  <q-page>
    <q-parallax
      :height="sectionHeight"
      :speed="2"
    >
      <template v-slot:media>
        <img
          src="https://southland-rp.ru/uploads/monthly_2021_06/unknown.png.1a4fd0ca2976fa22f0ba3d6ef33e4b3a.png"
        >
      </template>
      <div class="row justify-center items-center text-center q-pa-md">
        <div class="col-12 q-mb-xl">
          <h4 class="text-bold q-ma-none">
            Закрытое сообщество, аналоги
            которого определённо существуют
          </h4>
          <h5 class="text-bold text-grey-6 q-ma-none">
            ... но будут ли они лучше?
          </h5>
        </div>

        <div class="col-12 q-mt-xl">
          <div
            class="
              q-pa-md bg-grey-4 text-black shadow-9
              text-bold text-h5 rounded-borders
            " style="display:inline-block"
          >
            Статус приёма заявок: <span class="text-red-8">закрыт</span>
            <br/>
            <q-btn
              outline size="lg" color="black" icon="help_outline"
              class="q-mt-sm" label="Информация о вступлении" rounded
              @click="scrollToJoinSection"
            ></q-btn>
          </div>
        </div>

      </div>
    </q-parallax>

    <div
      class="q-pa-md row justify-center items-center"
      :style='{ minHeight: `${sectionHeight}px` }'>
      <div class="row text-center">
        <div class="col-12">
          <p class="section-label text-white">
            Взаимодействие гражданских и государственных служб
          </p>
        </div>
        <div class="col-12 text-grey-6 text-center text-h6">
          <span class="text-red-4">Это то, на чём строится наш сервер.</span><br/>
          При подаче заявки <span class="text-green-6">ты сам выбираешь, кем хочешь стать</span>,
          а <span class="text-cyan-6">в дальнейшем можешь изменить свой выбор</span>.
        </div>
        <div class="col-12 row q-mt-xl items-center">
          <div class="col-12 col-md-5">
            <p class="text-h4 text-bold"><q-icon name="construction"></q-icon> Гражданские</p>
            <p class="text-h6 q-mb-none">Придумывают и реализуют игровые ситуации</p>
          </div>
          <div class="col-12 col-md-2">
            <p class="text-h4 text-bold q-mb-none">✚</p>
          </div>
          <div class="col-12 col-md-5">
            <p class="text-h4 text-bold"><q-icon name="gavel"></q-icon> Государственные службы</p>
            <p class="text-h6 q-mb-none">Решают полученные ситуации</p>
          </div>
        </div>
      </div>
    </div>

    <b class="fancy-splitter"></b>

    <div
      class="q-pa-md row justify-center items-center"
      :style='{ minHeight: `${sectionHeight}px` }'>
      <div class="row text-center justify-center">
        <div class="col-12">
          <p class="section-label text-white">Уникальная экосистема</p>
        </div>
        <div class="col-12 text-grey-6 text-center text-h6">
          Она постоянно дорабатывается нашей командой.<br/>
          Мы используем разработанные нами продукты:
          <span class="text-orange-6 text-bold">базу данных Console</span>,
          <span class="text-blue-6 text-bold">систему тестирования Alderney</span>.
        </div>
      </div>
    </div>

    <b class="fancy-splitter"></b>

    <div
      class="q-pa-md row justify-center items-center"
      :style='{ minHeight: `${sectionHeight}px` }'
      id="joinUsSection"
    >
      <div class="row text-center justify-center">
        <div class="col-12">
          <p class="section-label text-white">Хочешь попробовать?</p>
        </div>
        <div class="col-12 text-grey-6 text-center text-h6">
          Процесс вступления может показаться трудным, но
          <span class="text-warning">на самом деле в этом нет ничего сложного</span>.
        </div>
        <div class="col-12 col-md-9 col-lg-7 q-mt-md">
          <q-stepper
            ref="stepper"
            color="primary"
            :vertical="$q.platform.is.mobile"
            animated
          >
            <q-step
              :name="1"
              title="Регистрация"
              icon="edit"
            >
            </q-step>

            <q-step
              :name="2"
              title="Подача заявки"
              icon="article"
            >
            </q-step>

            <q-step
              :name="3"
              title="Интервью"
              icon="mic"
            >
            </q-step>

            <q-step
              :name="4"
              title="Тестирование"
              icon="quiz"
            >
            </q-step>

            <q-step
              :name="5"
              title="Обучение"
              icon="school"
            >
            </q-step>
          </q-stepper>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { scroll } from 'quasar';

const { getScrollTarget, setVerticalScrollPosition } = scroll;

function scrollToElement(el: HTMLElement) {
  const target = getScrollTarget(el);
  setVerticalScrollPosition(target, el.offsetTop, 1000);
}

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const scrollToJoinSection = () => {
      scrollToElement(document.getElementById('joinUsSection')!);
    };

    return {
      sectionHeight: window.innerHeight,
      scrollToJoinSection,
    };
  },
});
</script>

<style lang="scss">

.section-label {
  color: $grey-6;
  font-size: 1.7rem;
  font-weight: 600;
  line-height: 3.125rem;
  letter-spacing: normal;
}

.es__title {
  font-size: 1.5rem;
  font-weight: 600;
  border-bottom: 2px solid #fff;
}

.es__desc {
  font-size: 1rem;
}

$barsize: 15px;
$bg: #121212;

.fancy-splitter {

    width: 100%;
    height: 1px;
    display: block;
    position: relative;
    margin-bottom: 0em;
    padding: 2em 0;

    &:after,
    &:before {

        content: "";
        position: absolute;

        width: 100%;
        height: 1px;
        bottom: 50%;
        left: 0;

    }

    &:before {

        background: linear-gradient( 90deg, $bg 0%, $bg 50%, transparent 50%, transparent 100% );
        background-size: $barsize;
        background-position: center;
        z-index: 1;

    }

    &:after {

        transition: opacity 0.3s ease, animation 0.3s ease;

        background: linear-gradient(
            to right,
            #62efab 5%,
            #F2EA7D 15%,
            #F2EA7D 25%,
            #FF8797 35%,
            #FF8797 45%,
            #e1a4f4 55%,
            #e1a4f4 65%,
            #82fff4 75%,
            #82fff4 85%,
            #62efab 95%);

        background-size: 200%;
        background-position: 0%;
        animation: bar 15s linear infinite;

    }

    @keyframes bar {

        0% { background-position: 0%; }
        100% { background-position: 200%; }

    }

}
</style>
