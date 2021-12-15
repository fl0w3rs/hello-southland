<template>
  <q-page>
    <q-parallax
      :height="sectionHeight"
      :speed="2"
      src="https://southland-rp.ru/uploads/monthly_2021_06/unknown.png.1a4fd0ca2976fa22f0ba3d6ef33e4b3a.png"
    >
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
              q-pa-md
              text-bold text-h5
            " style="display:inline-block"
          >
            Статус приёма заявок: <span class="text-red-8">закрыт</span>
            <br/>
            <q-btn
              outline size="lg" color="light" icon="help_outline"
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
      <div class="row text-center justify-center">
        <div class="col-12">
          <p class="text-h3 text-bold text-white">
            Немного о нас
          </p>
        </div>
        <div class="col-12 row justify-center items-center">
          <b class="fancy-splitter col-12 col-md-6 col-lg-4"></b>
        </div>
        <div class="col-12 col-md-10 col-lg-8 text-grey-6 text-center text-h6">
          Наш проект — это уникальное сообщество GTA V, построенное на
          семейных ценностях и дружелюбной атмосфере между участниками.
          Мы базируемся на платформе FiveM, которая даёт возможность воплощать наши идеи
          в реальность, а именно добавлять реалистичные модификации, которые улучшают процесс
          взаимодействия между департаментами и дают незабываемые ощущение участникам нашего
          сообщества. Вам не потребуется суточное скачивание контента для игры, всё установится
          автоматически благодаря ресурсам проекта. У нас вы можете почувствовать настоящий
          ролевой режим, лучшее взаимодействие государственных и гражданских структур,
          основанных на реальных протоколах экстренных служб США.<br/>
          При подаче заявки <span class="text-green-6">ты сам выбираешь, кем хочешь стать</span>,
          а <span class="text-cyan-6">в дальнейшем можешь изменить свой выбор</span>.
        </div>
        <div class="col-12 row q-mt-xl items-center justify-center">
          <div class="col-12 col-md-6 column items-center aboutUs--images">
            <img
              src="https://southland-rp.ru/uploads/monthly_2021_03/large.20210301152822_1.jpg.ace41d8122e74a32067eca113904a958.jpg"
              style="width: 400px; height: auto"
            />
            <img
              src="https://southland-rp.ru/uploads/monthly_2021_02/large.20210217093008_1.jpg.9db1950a6f52d233ee48086457cacbf7.jpg"
              style="width: 400px; height: auto"
            />
            <img
              src="https://southland-rp.ru/uploads/monthly_2021_04/large.20210423215412_1.png.06e5c6ca6b5b0d2a8e1dbf7f9981977c.png"
              style="width: 400px; height: auto"
            />
          </div>
          <div class="col-12 col-md-6 column">
            <div>
              <p class="text-h4 text-bold q-ma-none">
                <q-icon name="construction"></q-icon> Гражданские
              </p>
              <p class="text-h6 q-ma-none">Придумывают и реализуют игровые ситуации</p>
            </div>
            <div class="q-mt-xl">
              <p class="text-h4 text-bold q-ma-none">
                <q-icon name="phone"></q-icon> Диспетчерский департамент
              </p>
              <p class="text-h6 q-ma-none">Контролируют государственные службы</p>
            </div>
            <div class="q-mt-xl">
              <p class="text-h4 text-bold q-ma-none">
                <q-icon name="gavel"></q-icon> Государственные службы
              </p>
              <p class="text-h6 q-ma-none">Решают полученные ситуации</p>
            </div>
          </div>
          <div class="col-12 col-md-5">

          </div>
        </div>
      </div>
    </div>

    <q-parallax
      :height="sectionHeight * (2/3)"
      :speed="1"
      src="http://i.imgur.com/FQ7FE0X.jpg"
    >
      <div class="column text-center">
        <h3 class="text-white text-bold q-ma-none q-mb-lg">Департаменты</h3>
        <div class="dlogos">
          <a href="#" class="dlogos__item dlogos__item__first">
            <img src="https://southland-rp.ru/uploads/monthly_2021_04/BCSOLSPD.png.666047c073e67b4f132498b0f6fe083b.png" alt="">
          </a>
          <a href="#" class="dlogos__item">
            <img src="https://southland-rp.ru/uploads/monthly_2021_03/137182397_LosSantosCountyFireDepartment.png.f6bfea91c7fe2f73dd0178234d70e450.png" alt="">
          </a>
          <a href="#" class="dlogos__item">
            <img src="https://southland-rp.ru/uploads/monthly_2021_03/ddd2.thumb.png.e67cb87d23f25d4cfa9bb7d6228bc775.png" alt="">
          </a>
          <a href="#" class="dlogos__item"><img src="https://randomuser.me/api/portraits/men/55.jpg" alt=""></a>
          <a href="#" class="dlogos__item"><img src="https://via.placeholder.com/300/09f/fff.png" alt=""></a>
        </div>

      </div>
    </q-parallax>

    <div
      class="q-pa-md row justify-center items-center"
      :style='{ minHeight: `${sectionHeight}px` }'
    >
      <q-carousel
        v-model="carouselSlide"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="auto"
        class="bg-transparent full-width full-height"
      >
        <q-carousel-slide name="lspd" class="column no-wrap flex-center">
          <div class="row text-center justify-center q-col-gutter-sm">
            <div class="col-12 col-md-10 col-lg-9">
              <div style="display: table; width: 100%;">
                <div style="width: 150px; display: table-cell; vertical-align: top;">
                  <img
                    src="https://southland-rp.ru/uploads/monthly_2021_04/BCSOLSPD.thumb.png.e2519e6492c1e511ae6cb3a51ca1dda4.png"
                    alt=""
                    style="width: 125px; height: auto;"
                    class="q-mr-md"
                  />
                </div>
                <div
                  class="text-left"
                  style="width: auto; display: table-cell; vertical-align: middle;"
                >
                  <span class="text-h5 text-bold">
                    Los Santos Police Department & Blaine County Sheriff's Office
                  </span>
                  <br/>
                  <span style="font-size: 18px;">
                    Это объединение  двух государственных ведомств,
                    созданное для улучшения атмосферы на нашем проекте.
                    Два департамента занимаются контролем за соблюдением
                    правосудия на территории всего штата.
                    Нашей первостепенной задачей является создание крепких взаимоотношений
                    для дальнейшего сотрудничества в области правопорядка.
                    В наших департаментах находится множество отделов,
                    которые специализируются на узком спектре задач.
                    Мы ждем каждого, кто предан своей стране,
                    готов защищать законы и заинтересован в сохранении правосудия в нашем штате.
                  </span>
                </div>
              </div>
            </div>
            <div class="q-mt-xl col-12 col-md-10 col-lg-9 row q-col-gutter-sm text-left">
              <div class="col-12 row items-center">
                <div class="col-12 col-md-8 col-lg-9 q-px-lg">
                  <h4 style="font-size: 48px" class="text-bold q-ma-none q-mb-md">
                    BE A <span style="color:#f1c40f">PATROL UNIT</span>
                  </h4>
                  <span class="q-ma-none" style="font-size: 18px">
                    <b>Patrol Division</b> — основной дивизион полицейского департамента,
                    которое вы получите при вступлении в наш департамент. Задача
                    нашего отдела — контроль
                    и соблюдение правил дорожного движения на территории дорог штата.
                    Большую часть времени вы будете находиться с напарником, патрулируя
                    различные территории, предотвращая совершения преступления и помогая
                    населению в их проблемах. Мы ждем каждого, кто заинтересован в соблюдение
                    правопорядка в нашем штате, вступайте в наш отдел, мы ждем именно вас!
                  </span>
                </div>
                <div class="col-12 col-md-4 col-lg-3">
                  <img
                    src="https://southland-rp.ru/uploads/monthly_2021_06/large.2021_06.07-20_09.png.996b5cc8f2d9590cf3ce53fac748f754.png"
                    style="width: 100%"
                  />
                </div>
              </div>
              <div class="col-12 row q-mt-md items-center">
                <div class="col-12 col-md-8 col-lg-9 q-px-lg">
                  <h4 style="font-size: 48px" class="text-bold q-ma-none q-mb-md">
                    BE A <span style="color:#2ecc71;">RANGER</span>
                  </h4>
                  <span class="q-ma-none" style="font-size: 18px">
                    <b>Park Ranger</b> — являются основным органом по обеспечению соблюдения законов
                    о дикой природе в штате Сан-Андреас. На наш отдел возложена большая
                    миссия — сохранение экологической и исторической целостности парковых зон,
                    обеспечение безопасности посетителей, доступности для общественного
                    пользования парковых зон, мониторинг популяции вымирающих животных,
                    контроль разрешений на оружие для охоты и соблюдение правил охоты
                  </span>
                </div>
                <div class="col-12 col-md-4 col-lg-3">
                  <img
                    src="https://southland-rp.ru/uploads/monthly_2021_06/large.2021_06.07-20_02.png.3646cfec848279e845c8cedba0b66621.png"
                    style="width: 100%"
                  />
                </div>
              </div>
              <div class="col-12 row q-mt-md items-center">
                <div class="col-12 col-md-8 col-lg-9 q-px-lg">
                  <h4 style="font-size: 48px" class="text-bold q-ma-none q-mb-md">
                    BE A <span style="color:#2980b9">METRO OFFICER</span>
                  </h4>
                  <span class="q-ma-none" style="font-size: 18px">
                    <b>Metropolitan Division</b> — специальный дивизион нашего департамента.
                    SWAT – элитное подразделение в каждом полицейском департаменте.
                    Служить в нем большая честь для офицеров местной полиции.
                    Ежегодно несколько сотен сотрудников подают рапорта с просьбой
                    получить право пройти отборочные испытания, чтобы вступить в команду.
                    Потенциальный кандидат в спецназ должен проработать в полиции должен
                    обладать важными качествами, такими как: коммуникабельность,
                    крепкий характер и умение работать с командой. Важно чтобы в
                    вашем послужном списке не было неснятых взысканий, иначе путь в
                    нашу команду для вас закрыт. После этого офицера включают в список
                    кандидатов для сдачи физического теста. Цель SWAT — обеспечение защиты
                    поддержки, охраны, огневой мощи и спасения
                    в ходе полицейских операций в ситуациях
                  </span>
                </div>
                <div class="col-12 col-md-4 col-lg-3">
                  <img
                    src="https://southland-rp.ru/uploads/monthly_2021_06/large.20210610195820_1.jpg.146f533bb153e5f15f30d3cfc0fd14aa.jpg"
                    style="width: 100%"
                  />
                </div>
              </div>
              <div class="col-12 row q-mt-md items-center">
                <div class="col-12 col-md-8 col-lg-9 q-px-lg">
                  <h4 style="font-size: 48px" class="text-bold q-ma-none q-mb-md">
                    BE A <span style="color:#e67e22;">DETECTIVE</span>
                  </h4>
                  <span class="q-ma-none" style="font-size: 18px">
                    <b>Detective Bureau</b> — расcледуют преступления путем сбора доказательств
                    и фактов.
                    Детектив работает над сбором доказательств и фактов по уголовным делам.
                    Обязанности включают собеседование с потенциальными подозреваемыми,
                    изучение записей и задержание преступников. Эти полицейские будут работать
                    над конкретными делами, пока они не будут решены или не будут удалены.
                    Для полицейских детективов важно вести надлежащие записи и записи в случае,
                    если им необходимо давать показания в суде. Общеизвестно, что детективы должны
                    быть привлечены к суду в качестве свидетеля или давать показания. Другие
                    обязанности могут включать в себя координацию на месте преступления, сбор
                    доказательств на месте преступления и сбор доказательств от подозреваемых
                  </span>
                </div>
                <div class="col-12 col-md-4 col-lg-3">
                  <img
                    src="https://southland-rp.ru/uploads/monthly_2021_06/large.236147007_DesktopScreenshot2021_06.03-02_11_20_22.png.1f0bff5373b425707f4ebdb39e9abc34.png"
                    style="width: 100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="sahp" class="column no-wrap flex-center">
          <div class="row text-center justify-center q-col-gutter-sm">
            <div class="col-12 col-md-10 col-lg-9">
              <div style="display: table; width: 100%;">
                <div style="width: 150px; display: table-cell; vertical-align: top;">
                  <img
                    src="https://southland-rp.ru/uploads/monthly_2021_04/523595685_SanAndreasHighwayPatrol.thumb.png.0d0f44fe380287f2e5b88b8d4c0813d9.png"
                    alt=""
                    style="width: 125px; height: auto;"
                    class="q-mr-md"
                  />
                </div>
                <div
                  class="text-left"
                  style="width: auto; display: table-cell; vertical-align: middle;"
                >
                  <span class="text-h5 text-bold">
                    San Andreas Highway Patrol
                  </span>
                  <br/>
                  <span style="font-size: 18px;">
                    Это департамент, обеспечивающий контроль соблюдения
                    правил дорожного движения на автомагистралях штата и
                    межгосударственных скоростных автомагистралях, а также
                    надзор за безопасностью государственных зданий. Офицеры
                    дорожного патруля отвечают за расследование и устранение
                    дорожно-транспортных происшествий. Офицеры обеспечивают
                    соблюдение автомобильного кодекса штата, преследуют беглецов,
                    замеченных на автомагистралях. Наш департамент смог предотвратить
                    сотни тысяч преступлений, и мы гордимся нашими достижениями
                    в области государственных структур
                  </span>
                </div>
              </div>
            </div>
            <div class="q-mt-xl col-12 col-md-10 col-lg-9 row q-col-gutter-sm text-right">
              <div class="col-12 row reverse items-center">
                <div class="col-12 col-md-8 col-lg-9 q-px-lg">
                  <h4 style="font-size: 48px" class="text-bold q-ma-none q-mb-md">
                    BE A <span style="color:#f1c40f">TROOPER</span>
                  </h4>
                  <span class="q-ma-none" style="font-size: 18px">
                    <b>Patrol Division</b> — основной дивизион нашего департамента, которое
                    вы получите при вступлении. Задача нашего отдела — контроль и
                    соблюдение правил дорожного движения на территории всех дорог
                    штата. Большую часть времени вы будете находиться с напарником,
                    патрулируя различные территории, предотвращая совершения
                    преступления на дорогах, помогать гражданским лицам и другим
                    государственным службам. Мы заинтересованы именно в
                    вашей кандидатуре! Вступай уже сегодня!
                  </span>
                </div>
                <div class="col-12 col-md-4 col-lg-3">
                  <img
                    src="https://southland-rp.ru/uploads/monthly_2021_06/large.2021_06.07-20_09.png.996b5cc8f2d9590cf3ce53fac748f754.png"
                    style="width: 100%"
                  />
                </div>
              </div>
              <div class="col-12 row reverse q-mt-md items-center">
                <div class="col-12 col-md-8 col-lg-9 q-px-lg">
                  <h4 style="font-size: 48px" class="text-bold q-ma-none q-mb-md">
                    BE AN <span style="color:#3498db;">AIR & COASTAL</span>
                  </h4>
                  <span class="q-ma-none" style="font-size: 18px">
                    <b>Air & Costal Division</b> — дополнительные дивизион департамента,
                    наше подразделение занимается патрулированием, поисками и спасением
                    людей на воде, земле и в воздухе. Мы имеем штат высококвалифицированных
                    офицеров которые готовы помочь вам в любой момент. Ежегодно
                    наши экипажи предотвращают трагедии, спасая сотни жизней. Мы
                    являемся самым крупным подразделением департамента, успешно
                    выполняющее воздушные и водные операции на территории нашего штата
                  </span>
                </div>
                <div class="col-12 col-md-4 col-lg-3">
                  <img
                    src="https://southland-rp.ru/uploads/monthly_2021_06/large.20210610195820_1.jpg.146f533bb153e5f15f30d3cfc0fd14aa.jpg"
                    style="width: 100%"
                  />
                </div>
              </div>
              <div class="col-12 row reverse q-mt-md items-center">
                <div class="col-12 col-md-8 col-lg-9 q-px-lg">
                  <h4 style="font-size: 48px" class="text-bold q-ma-none q-mb-md">
                    BE A <span style="color:#e67e22;">DUI OFFICER</span>
                  </h4>
                  <span class="q-ma-none" style="font-size: 18px">
                    <b>DUI Control Division</b> — дивизион департамента, занимающийся
                    контролем состоянием водителей на дорогах нашего штата. Наше подразделение
                    часто устанавливаем DUI-чекпоинты, где проводит мероприятие по
                    заблаговременному предотвращению происшествий. Мы помогаем сдерживать
                    и предотвращать распространение нелегальной наркотической и алкогольной
                    продукции, а также незаконной иммиграцией из других стран. Наш отдел
                    ищет самых высококвалифицированных сотрудников, стань частью нашего дивизиона!
                  </span>
                </div>
                <div class="col-12 col-md-4 col-lg-3">
                  <img
                    src="https://southland-rp.ru/uploads/monthly_2021_06/large.2021_06.07-20_02.png.3646cfec848279e845c8cedba0b66621.png"
                    style="width: 100%"
                  />
                </div>
              </div>
              <div class="col-12 row reverse q-mt-md items-center">
                <div class="col-12 col-md-8 col-lg-9 q-px-lg">
                  <h4 style="font-size: 48px" class="text-bold q-ma-none q-mb-md">
                    BE A <span style="color:#e74c3c;">COMMAND</span>
                  </h4>
                  <span class="q-ma-none" style="font-size: 18px">
                    <b>Command Unit</b> — дивизион департамента, занимающийся координацией крупных
                    стихийных инцидентов. Благодаря имеющимся ресурсам, в нашем автопарке
                    присутствует мобильный командный центр, с помощью которого мы можем
                    контролировать и координировать действия различных государственных и
                    гражданских структур, в том числе и помогать в спасение многих жизней.
                    За время существования нашего отдела, мы смогли спасти десятки тысяч жизней!
                    Вступай в наш отдел, мы ждем именно тебя!
                  </span>
                </div>
                <div class="col-12 col-md-4 col-lg-3">
                  <img
                    src="https://southland-rp.ru/uploads/monthly_2021_06/large.236147007_DesktopScreenshot2021_06.03-02_11_20_22.png.1f0bff5373b425707f4ebdb39e9abc34.png"
                    style="width: 100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
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
          На данный момент статус приёма заявок - <span class="text-red-6">закрыт</span>.
          <br/>
          <span class="text-white">
            Следующее открытие заявок запланировано на 20-е числа августа.
          </span>
          <br/>
          Процесс вступления может показаться трудным, но
          <span class="text-warning">на самом деле в этом нет ничего сложного</span>.
          <br/>
          Вступление в сообщество происходит в 5 этапов.
        </div>
        <div class="col-12 col-md-9 col-lg-7 q-mt-sm">
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
        <div class="col-12 text-white text-center text-h6 q-mt-xl">
          Чтобы просмотреть более подробную информацию, нажмите кнопку ниже.
          <br/>
          <q-btn outline color="green" class="q-mt-md" size="lg" label="Попробуем"></q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
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

    const carouselSlide = ref('lspd');

    return {
      sectionHeight: window.innerHeight,
      scrollToJoinSection,
      carouselSlide,
    };
  },
});
</script>

<style lang="scss">

.dlogos__item:hover {
  transform: scale(1.5);
  transition: all 200ms ease;
}

.dlogos {
  display: flex;
  list-style-type: none;
  margin: auto;
  padding: 0px;
  flex-direction: row;
  &__item {
    background-color: #596376;
    border: 2px solid #1f2532;
    border-radius: 100%;
    color: #ffffff;
    height: 96px;
    width: 96px;
    transition: margin 0.3s ease-in-out;
    overflow: hidden;
    margin-left: -32px;
    &__first {
      margin-left: 0px;
    }
    &:first-child {
      z-index: 5;
    }
    &:nth-child(2) {
      z-index: 4;
    }
    &:nth-child(3) {
      z-index: 3;
    }
    &:nth-child(4) {
      z-index: 2;
    }
    &:nth-child(5) {
      z-index: 1;
    }
    &:last-child {z-index: 0}
    img{ width:100% }
  }
  &:hover {
    .dlogos__item:not(.dlogos__item__first) {
      margin-left: 24px;
    }
  }
}

.section-label {
  color: $grey-6;
  font-size: 1.7rem;
  font-weight: 600;
  line-height: 3.125rem;
  letter-spacing: normal;
}

.aboutUs--images {
  & > img {
    border-radius: 5px;
    &:first-child {
      margin-bottom: -1.875rem;
      transform: rotate(10deg);
      z-index: 0;
    }
    &:nth-child(2) {
      z-index: 1;
    }
    &:nth-child(3) {
      margin-top: -3.75rem;
      margin-bottom: 3.75rem;
      transform: rotate(15deg);
      z-index: 0;
    }
    &:hover {
      z-index: 2;
    }
  }
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
