<template>
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  // name: 'ComponentName'
});
</script>
