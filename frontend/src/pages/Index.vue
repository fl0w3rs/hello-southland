<template>
  <q-page style="">
    <q-parallax
      :height="sectionHeight"
      :speed="0"
      src="https://forum.southland-rp.ru/uploads/monthly_2020_12/large.20201221142545_1.png.4232c6a11aa86afe34d2c898303aba9e.png"
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
            Статус приёма заявок: <span class="text-green-6" v-if="applyInfo().status">открыт</span><span class="text-red-8" v-else>закрыт</span>
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
      class="q-px-md q-py-xl row justify-center items-center"
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
              src="https://forum.southland-rp.ru/uploads/monthly_2021_03/large.20210301152822_1.jpg.ace41d8122e74a32067eca113904a958.jpg"
              style="width: 400px; height: auto"
            />
            <img
              src="https://forum.southland-rp.ru/uploads/monthly_2021_02/large.20210217093008_1.jpg.9db1950a6f52d233ee48086457cacbf7.jpg"
              style="width: 400px; height: auto"
            />
            <img
              src="https://forum.southland-rp.ru/uploads/monthly_2021_04/large.20210423215412_1.png.06e5c6ca6b5b0d2a8e1dbf7f9981977c.png"
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
              <p class="text-h6 q-ma-none">Координируют государственные службы</p>
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
      @scroll="scrollCallback($event, 'departments')"
    >
      <template v-slot:media>
        <div>
          <img
            src="https://i.yapx.ru/PkcWR.png"
            :style="{
              height: 'auto',
              width: '100%',
              transform: `scale(
                ${(scrollPosition['departments'] ? 1.166 - (Math.abs(scrollPosition['departments'] - 0.5) / 3) : 1)}
              )`
            }"
          >
          <!-- http://i.imgur.com/FQ7FE0X.jpg -->
          <!-- https://forum.southland-rp.ru/uploads/monthly_2021_03/large.60276478_FiveM_GTAProcess2021-03-0800-56-18.png.f9ce023ec9cc33163959782163731dfe.png -->
          <!-- https://forum.southland-rp.ru/uploads/monthly_2021_06/large.1243668866_FiveM_GTAProcess2021-06-0123-34-55.png.72c37b5cc1f3cb18e6e2b0463aa829e4.png -->

        </div>
      </template>
      <div class="column text-center">
        <h3 class="text-white text-bold q-ma-none q-mb-lg">Департаменты</h3>
        <div class="dlogos">
          <a @click="gotoCarouselSlide('lspd')" class="dlogos__item dlogos__item__first cursor-pointer">
            <img src="https://forum.southland-rp.ru/uploads/monthly_2021_04/BCSOLSPD.png.666047c073e67b4f132498b0f6fe083b.png" alt="">
          </a>
          <a @click="gotoCarouselSlide('sahp')" class="dlogos__item cursor-pointer">
            <img src="https://forum.southland-rp.ru/uploads/monthly_2021_04/523595685_SanAndreasHighwayPatrol.thumb.png.0d0f44fe380287f2e5b88b8d4c0813d9.png" alt="">
          </a>
          <a @click="gotoCarouselSlide('lscofd')"  class="dlogos__item cursor-pointer">
            <img src="https://forum.southland-rp.ru/uploads/monthly_2021_12/984204028_LosSantosCountyFireDepartment.png.15f7cb4b9b10a7042470fa44865c56ca.png" alt="">
          </a>
          <a @click="gotoCarouselSlide('dispatch')" class="dlogos__item cursor-pointer">
            <img src="https://forum.southland-rp.ru/uploads/monthly_2021_03/ddd2.thumb.png.e67cb87d23f25d4cfa9bb7d6228bc775.png" alt="">
          </a>
          <a @click="gotoCarouselSlide('civilian')" class="dlogos__item cursor-pointer"><img src="https://i.imgur.com/fKi3IDT.png" alt=""></a>
        </div>

      </div>
    </q-parallax>

    <div
      class="q-pa-md row justify-center items-center"
      :style='{ minHeight: `${sectionHeight}px` }'
      id="departmentCarousel"
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
                    src="https://forum.southland-rp.ru/uploads/monthly_2021_04/BCSOLSPD.thumb.png.e2519e6492c1e511ae6cb3a51ca1dda4.png"
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
                    src="https://forum.southland-rp.ru/uploads/monthly_2021_05/large.2021_05.21-09_52.png.0a52d2aaabd15c136187e37099c6fb9a.png"
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
                    src="https://forum.southland-rp.ru/uploads/monthly_2021_04/large.20210423215412_1.png.06e5c6ca6b5b0d2a8e1dbf7f9981977c.png"
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
                    src="https://forum.southland-rp.ru/uploads/monthly_2021_02/large.1508423402_FiveM_GTAProcess2021-02-1803-12-09.png.3175cbf99eaf2a3b81150fffbd218668.png"
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
                    src="https://forum.southland-rp.ru/uploads/monthly_2021_04/523595685_SanAndreasHighwayPatrol.thumb.png.0d0f44fe380287f2e5b88b8d4c0813d9.png"
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
                    src="https://forum.southland-rp.ru/uploads/monthly_2021_06/large.2021_06.07-20_09.png.996b5cc8f2d9590cf3ce53fac748f754.png"
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
                    src="https://forum.southland-rp.ru/uploads/monthly_2020_11/large.20201127102627_1.png.6610051c93bd9b5c8e998b6b1a936041.png"
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
                    src="https://forum.southland-rp.ru/uploads/monthly_2021_06/large.Screenshot_502.png.13cad68f6cbe4cd8337ce2e4e4122249.png"
                    style="width: 100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="lscofd" class="column no-wrap flex-center">
          <div class="row text-center justify-center q-col-gutter-sm">
            <div class="col-12 col-md-10 col-lg-9">
              <div style="display: table; width: 100%;">
                <div style="width: 150px; display: table-cell; vertical-align: top;">
                  <img
                    src="https://forum.southland-rp.ru/uploads/monthly_2021_12/984204028_LosSantosCountyFireDepartment.png.15f7cb4b9b10a7042470fa44865c56ca.png"
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
                    Los Santos county Fire Department
                  </span>
                  <br/>
                  <span style="font-size: 18px;">
                    Это пожарно-спасательное управление,
                    обеспечивающее защиту районов округа Лос-Сантос, а также 58 городов, с
                    которыми заключены контракты, включая Палето-Бэй, расположенный в округе
                    Блейн Каунти, который является единственным город за пределами округа.
                    К нам присоединяются и другие пожарные части, благодаря чему мы можем
                    предоставлять дополнительную помощь близлежащим округам или городам.
                    Наш департамент получил свою знаменитость после удачного спасения
                    сотрудников департамента воды и света в ходе самого большого теракта 2003 года
                  </span>
                </div>
              </div>
            </div>
            <div class="q-mt-xl col-12 col-md-10 col-lg-9 row q-col-gutter-sm text-left">
              <div class="col-12 row items-center">
                <div class="col-12 col-md-8 col-lg-9 q-px-lg">
                  <h4 style="font-size: 48px" class="text-bold q-ma-none q-mb-md">
                    BE A <span class="text-red">FIREFIGHTER</span>
                  </h4>
                  <span class="q-ma-none" style="font-size: 18px">
                    <b>Firefighter Division</b> — это основной дивизион пожарного департамента. Наша команда
                    занимается тушением пожаров на самых разных инцидентах — начиная
                    от маленьких загородных домов, и заканчивая многоэтажными зданиями
                    с очень сложными конструкциями, а также пожарами в национальных
                    парках и лесах, применяя самую разную технику — авиационную,
                    морскую и сухопутную. В нашем отделе вы сможете стать настоящим
                    пожарным, на которого будет смотреть вся страна, ведь наш департамент
                    сотрудничает с крупными медиа-компаниями, такими как Weazel News
                    и Lifeinvader, которые часто берут у нас интервью после крупных инцидентов
                  </span>
                </div>
                <div class="col-12 col-md-4 col-lg-3">
                  <img
                    src="https://forum.southland-rp.ru/uploads/monthly_2020_12/large.161894487_.jpg.30bcb23f7687ad4f480bcec1f431e003.jpg"
                    style="width: 100%"
                  />
                </div>
              </div>
              <div class="col-12 row q-mt-md items-center">
                <div class="col-12 col-md-8 col-lg-9 q-px-lg">
                  <h4 style="font-size: 48px" class="text-bold q-ma-none q-mb-md">
                    BE A <span style="color:#3498db;">PARAMEDIC</span>
                  </h4>
                  <span class="q-ma-none" style="font-size: 18px">
                    <b>Paramedic Division</b> — дивизион скорой медицинской помощи.
                    Наш департамент обладает профессиональными парамедиками, которые
                    могут оказывать помощь в самых разных ситуациях — от острых заболеваний,
                    до психологической помощи, от остановки кровотечений, до полной госпитализации.
                    В отделе присутствует различная техника, благодаря чему наш отдел может
                    участвовать в спасательных операциях на воде и в воздухе. Наши сотрудники
                    обучены различным приемам и тактикам спасения во время ДТП и крупных пожарах.
                    Всегда мечтали спасать жизни? Наш дивизион всегда открыт для
                    опытных сотрудников, присоединяйся к нам!
                  </span>
                </div>
                <div class="col-12 col-md-4 col-lg-3">
                  <img
                    src="https://forum.southland-rp.ru/uploads/monthly_2021_04/large.349366264_DesktopScreenshot2021_04.29-01_21_08_13.png.a45bbeebd801cc99c500d5ae99a85f1b.png"
                    style="width: 100%"
                  />
                </div>
              </div>
              <div class="col-12 row q-mt-md items-center">
                <div class="col-12 col-md-8 col-lg-9 q-px-lg">
                  <h4 style="font-size: 48px" class="text-bold q-ma-none q-mb-md">
                    BE AN <span style="color:#e67e22;">URBAN SEARCH & RESCUE</span>
                  </h4>
                  <span class="q-ma-none" style="font-size: 18px">
                    <b>URBAN SEARCH & RESCUE</b> — отдел, специализирующийся на поиске людей
                    в самых различных ситуациях. Только наш департамент обладает командой
                    опытных спасателей, которые каждый день спасают сотни жизней на тяжелых
                    инцидентах. На вооружение команды есть самая разная техника — начиная
                    от крупных поисковых автомобилей, заканчивая спасательными лодками и
                    авиацией. Наш отдел тесно сотрудничает с отделом воздушных и морских
                    операций Управления Шерифа Блейн Каунти, благодаря чему нам удается
                    эффективнее искать пострадавших. Заинтересовались? Мы ждем вас,
                    начни свою карьеру как опытный спасатель!
                  </span>
                </div>
                <div class="col-12 col-md-4 col-lg-3">
                  <img
                    src="https://forum.southland-rp.ru/uploads/monthly_2021_03/large.1917942416_DesktopScreenshot2021_03.25-02_27_13_73.png.781ed9810840719402cc5af0233e1212.png"
                    style="width: 100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="dispatch" class="column no-wrap flex-center">
          <div class="row text-center justify-center q-col-gutter-sm">
            <div class="col-12 col-md-10 col-lg-9">
              <div style="display: table; width: 100%;">
                <div style="width: 150px; display: table-cell; vertical-align: top;">
                  <img
                    src="https://forum.southland-rp.ru/uploads/monthly_2021_03/ddd2.thumb.png.e67cb87d23f25d4cfa9bb7d6228bc775.png"
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
                    Dispatch Department
                  </span>
                  <br/>
                  <span style="font-size: 18px;">
                    Это самый главный департамент, контролирующий все радиопередачи
                    на разных частотах, координирующий пожарных, парамедиков, полицию
                    и другие службы. Основная обязанность диспетчеров — оказывать помощь
                    службам экстренной помощи и отвечать на звонки в службу 911. Диспетчер
                    определяют тип кризиса, место возникновения чрезвычайной ситуации и
                    отправляют соответствующий ответ с имеющейся в распоряжение технике и
                    подконтрольных департаментов. Мы должны сообщать точную информацию и
                    координировать отправку персонала на места происшествия. Быть
                    диспетчером —  это оказывать помощь в трудную минуту, отвечать
                    на звонки в 911 и координировать службы между собой
                  </span>
                </div>
              </div>
            </div>
            <div class="q-mt-xl col-12 col-md-10 col-lg-9 row q-col-gutter-sm text-right">
              <div class="col-12 row reverse items-center">
                <div class="col-12 col-md-8 col-lg-9 q-px-lg">
                  <h4 style="font-size: 48px" class="text-bold q-ma-none q-mb-md">
                    BE A <span style="color:#3498db;">DISPATCHER</span>
                  </h4>
                  <span class="q-ma-none" style="font-size: 18px">
                    <b>Dispatcher</b> — контролирует и отслеживают автомобили экстренных служб,
                    координируют действия с другими местными центрами связи и ведут
                    подробный учет звонков. Диспетчерская работа - это стресс, так как
                    мы работаем в течение долгих смен и принимаем множество звонков под
                    давлением, а также решаем опасные для жизни ситуации. Высокие требования
                    могут быть утомительными, но и полезными. Вы должны отвечать как можно быстрее
                    и спокойнее. Решение проблем, критическое мышление и отличные коммуникативные
                    навыки необходимы для эффективного диспетчера. Все вызовы документируются
                    и записываются в базу данных, в которых каждый офицер или пожарный может
                    увидеть — характер происшествия, имя и местонахождение звонящего, особенности ситуации.
                    Готовы стать диспетчером? Мы ждем вас в нашу команду
                  </span>
                </div>
                <div class="col-12 col-md-4 col-lg-3">
                  <img
                    src="https://forum.southland-rp.ru/uploads/monthly_2021_06/large.2021_06.08-20_35.png.ca4c6ffefc1276c629e2f6a5959fffa5.png"
                    style="width: 100%"
                  />
                </div>
              </div>
              <div class="col-12 row reverse q-mt-md items-center">
                <div class="col-12 col-md-8 col-lg-9 q-px-lg">
                  <h4 style="font-size: 48px" class="text-bold q-ma-none q-mb-md">
                    BE A <span style="color:#16a085;">TRAFFIC DISPATCHER</span>
                  </h4>
                  <span class="q-ma-none" style="font-size: 18px">
                    <b>Traffic Dispatcher</b> — контролирует работу офицеров на остановках с автомобилями,
                    дает подробную информацию о любом транспортном средстве, и координирует погони
                    при необходимости. Любое происшествие на дороге не обходится без участия диспетчера,
                    именно он задает курс работы офицеров и других служб на происшествии и
                    определяет дальней действия, необходимые для урегулирования сложившейся ситуации.
                    Благодаря нашей слаженной работе все экстренные службы добираются до инцидента
                    во время, получают всю необходимую информацию о ситуациях на дороге, и не дают
                    усугубляться экстренной ситуации. Готовы стать траффик-диспетчером? Мы ждем вас
                    в нашу команду профессионалов! Начните свой карьерный рост именно в нашем отделе,
                    станьте экспертом в диспетчерском департаменте
                  </span>
                </div>
                <div class="col-12 col-md-4 col-lg-3">
                  <img
                    src="https://forum.southland-rp.ru/uploads/monthly_2021_05/large.unknown4.jpg.4cdb5aa8524701bd04479db7ebc6354a.jpg"
                    style="width: 100%"
                  />
                </div>
              </div>
              <div class="col-12 row reverse q-mt-md items-center">
                <div class="col-12 col-md-8 col-lg-9 q-px-lg">
                  <h4 style="font-size: 48px" class="text-bold q-ma-none q-mb-md">
                    BE A <span style="color:#e74c3c;">911 OPERATOR</span>
                  </h4>
                  <span class="q-ma-none" style="font-size: 18px">
                    <b>911 Operator</b> — отвечает на звонки в службу экстренной помощи, и в
                    соответствии с ситуацией решает — какие государственные службы
                    потребуются на инциденте. В чрезвычайной ситуации ваш голос первым
                    слышит нуждающийся, а ваши навыки спасут его жизнь. Мы ищем
                    высокомотивированных, позитивных и ориентированных на людей
                    диспетчеров для работы в нашем ультрасовременном колл-центре 9-1-1
                    — самый загруженный колл-центр в штате. Используйте навыки вопросов
                    и ответов, чтобы получить конкретную информацию от звонящих, которые
                    расстроены, напуганы, оскорбительны или ранены, оставаясь при этом
                    спокойными и эмоционально отстраненными. Заинтересовались?
                    Мы ждем именно вас, чтобы вы приняли свой первый вызов!
                  </span>
                </div>
                <div class="col-12 col-md-4 col-lg-3">
                  <img
                    src="https://forum.southland-rp.ru/uploads/monthly_2021_04/large.301539443_FiveM_GTAProcess2021-04-2122-27-03.jpg.046660095e17be74f7662d09f0ee305b.jpg"
                    style="width: 100%"
                  />
                </div>
              </div>
              <div class="col-12 row reverse q-mt-md items-center">
                <div class="col-12 col-md-8 col-lg-9 q-px-lg">
                  <h4 style="font-size: 48px" class="text-bold q-ma-none q-mb-md">
                    BE A <span style="color:#e67e22;">COORDINATOR</span>
                  </h4>
                  <span class="q-ma-none" style="font-size: 18px">
                    <b>Coordinator</b> — предоставляет основанную информацию на случившихся катастрофах,
                    которая помогает распознавать и снижать уязвимости, справляться с последствиями
                    бедствия и дополнительно разрабатывать планы ликвидации последствий происшествия.
                    Мы организуем и управляем имеющимися ресурсами и обязанностями по работе со всеми
                    во время чрезвычайных ситуаций (готовность, реагирование, смягчение последствий и
                    восстановление). Цель состоит в том, чтобы уменьшить воздействие всех опасностей,
                    и как можно быстрее спасти невинные жизни. Координатор контролирует все государственные
                    службы на крупномасштабных инцидентах и распределяет обязанности между всему службами,
                    чтобы улучшить эффективность проводимых работ
                  </span>
                </div>
                <div class="col-12 col-md-4 col-lg-3">
                  <img
                    src="https://forum.southland-rp.ru/uploads/monthly_2021_05/large_911.jpg.e144e6a5f2ea85406e109e3c235f666f.jpg"
                    style="width: 100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="civilian" class="column no-wrap flex-center">
          <div class="row text-center justify-center q-col-gutter-sm">
            <div class="col-12 col-md-10 col-lg-9">
              <div style="display: table; width: 100%;">
                <div style="width: 150px; display: table-cell; vertical-align: top;">
                  <img
                    src="https://i.imgur.com/fKi3IDT.png"
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
                    Civilian Department
                  </span>
                  <br/>
                </div>
              </div>
            </div>
            <div class="q-mt-xl col-12 col-md-10 col-lg-9 row q-col-gutter-sm text-left">
              <div class="col-12 row items-center">
                <div class="col-12 col-md-8 col-lg-9 q-px-lg">
                  <h4 style="font-size: 48px" class="text-bold q-ma-none q-mb-md">
                    BE <span class="text-red">WHOEVER YOU WANT</span>
                  </h4>
                  <span class="q-ma-none" style="font-size: 18px">
                    Это одна дружная и большая семья, движущая сила всего сообщества!
                    Ролевая игра в Southland Project означает создание персонажей и
                    исполнение роли гражданина Сан-Андреаса, независимо от того, являетесь
                    ли вы законным гражданином, работаете в бизнесе или другой службе,
                    преступником, зарабатывающим деньги нелегальным путем или работающим
                    в аварийных службах. Мы поощряем непрерывную ролевую игру, в которой
                    персонажи заводят друзей, заводят отношения и строят историю
                  </span>
                </div>
                <div class="col-12 col-md-4 col-lg-3">
                  <img
                    src="https://forum.southland-rp.ru/uploads/monthly_2021_05/large.1817409520_.PNG.25df4ab5e84b6e912602b19282ae48a3.PNG"
                    style="width: 100%"
                  />
                </div>
              </div>
              <div class="col-12 q-mt-md row items-center">
                <div class="col-12 col-md-8 col-lg-9 q-px-lg">
                  <h4 style="font-size: 48px" class="text-bold q-ma-none q-mb-md">
                    BE <span class="text-blue">YOUR DREAMS COME TRUE</span>
                  </h4>
                  <span class="q-ma-none" style="font-size: 18px">
                    Гражданский департамент является ключевым в создании и отыгровке
                    различных РП-ситуаций. Наша основанная цель — взаимодействие
                    с государственными структурами. Индивидуальная база данных,
                    уникальные модификации и ламповость сообщества дает участникам
                    создавать интересные ситуации и развивать разных персонажей, не
                    опираясь на ограничение в валюте или игровом уровне. Гражданский
                    департамент является одним из самых сложных, поскольку создать
                    по-настоящему продуманную ситуацию очень сложно, поэтому если
                    вы умеете создавать уникальный контент и жаждите настоящего РП,
                    то мы с радостью ждем вас в нашем департаменте!
                  </span>
                </div>
                <div class="col-12 col-md-4 col-lg-3">
                  <img
                    src="https://i.yapx.ru/PkcHG.png"
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
      :style='{ minHeight: `${sectionHeight / 2}px` }'
      id="joinUsSection"
    >
      <div class="row text-center justify-center">
        <div class="col-12">
          <p class="section-label text-white">Хочешь попробовать?</p>
        </div>
        <div class="col-12 text-grey-6 text-center text-h6">
          На данный момент статус приёма заявок - <span class="text-green-6" v-if="applyInfo().status">открыт</span><span class="text-red-6" v-else>закрыт</span>.
          <br/>
          <span class="text-white" v-if="applyInfo().openDate?.length > 0">
            Следующий приём заявок запланирован на {{applyInfo().openDate}}.
          </span>
          <br v-if="applyInfo().openDate?.length > 0"/>
          Процесс вступления может показаться трудным, но
          <span class="text-warning">на самом деле в этом нет ничего сложного</span>.
          <br/>
          Вступление в сообщество происходит в 5 этапов.
        </div>
        <div class="col-12 col-md-9 col-lg-7 q-mt-sm">
          <join-us-stepper />
        </div>
        <div class="col-12 text-white text-center text-h6 q-mt-lg">
          <q-btn outline color="green" class="q-mt-md" size="lg" label="Попробуем" to="/apply"></q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { scroll } from 'quasar';
import JoinUsStepper from 'src/components/joinUs/Stepper.vue';
import { mapGetters } from 'vuex';

const { getScrollTarget, setVerticalScrollPosition } = scroll;

function scrollToElement(el: HTMLElement) {
  const target = getScrollTarget(el);
  setVerticalScrollPosition(target, el.offsetTop, 1000);
}

export default defineComponent({
  name: 'PageIndex',
  components: {
    JoinUsStepper,
  },
  setup() {
    const scrollToJoinSection = () => {
      scrollToElement(document.getElementById('joinUsSection')!);
    };

    const carouselSlide = ref('lspd');
    const scrollPosition = ref<Record<string, number>>({});

    const scrollCallback = (percentage: number, image: string) => {
      scrollPosition.value[image] = percentage;
    };

    const gotoCarouselSlide = (val: string) => {
      carouselSlide.value = val;
      scrollToElement(document.getElementById('departmentCarousel')!);
    };

    return {
      sectionHeight: window.innerHeight,
      scrollToJoinSection,
      carouselSlide,
      scrollCallback,
      scrollPosition,
      gotoCarouselSlide,

      ...mapGetters({
        applyInfo: 'main/getApplyInfo',
      }),
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
    // background-color: #596376;
    // border: 2px solid #1f2532;
    // border-radius: 100%;
    color: #ffffff;
    height: 96px;
    width: 96px;
    transition: margin 0.3s ease-in-out;
    // overflow: hidden;
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
</style>
