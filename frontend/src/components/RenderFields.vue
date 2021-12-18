<template>
  <div>
    <div class="q-mt-sm" v-for="field in fields" v-bind:key="field.field">
      <q-input
        v-if="field.type === 'text' || field.type === 'textarea' || field.type === 'number'"
        :type="field.type"
        :label="`${field.label}${field.required ? ' *' : ''}`"
        filled
        v-model="lForm[field.field || undefined]"
        lazy-rules
        bottom-slots
        :rules="field?.required ? [
          val => val && val.length > 0 || 'Это поле обязательно для заполнения.'
        ] : []"
        :readonly="readonly || false"
      />

      <q-select
        v-if="field.type === 'select'"
        filled
        :label="`${field.label}${field.required ? ' *' : ''}`"
        v-model="lForm[field.field || undefined]"
        :options="field?.options || []"
        :multiple="field?.multiple || false"
        bottom-slots
        :rules="field?.required ? [
          val => val && val.length > 0 || 'Это поле обязательно для заполнения.'
        ] : []"
        :readonly="readonly || false"
      />

    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  props: ['fields', 'form', 'readonly'],
  emits: ['onUpdate'],
  setup(props, { emit }) {
    const lForm = ref({});

    if (props.readonly) {
      watch(() => props.form, (val) => {
        lForm.value = val;
      });
    } else {
      watch(() => ({ ...lForm.value }), (obj) => {
        emit('onUpdate', obj);
      });
    }

    return {
      lForm,
    };
  },
});
</script>
