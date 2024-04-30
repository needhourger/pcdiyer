<template>
  <div class="w-full">
    <BaseForm v-model="powerForm" :formLabels="formLabels"/>
  </div>
</template>
<script setup>
import { Money } from "@element-plus/icons-vue"
import BaseForm from './BaseForm.vue';
const powerForm = defineModel()
const formLabels = [
  {
    label: 'Size', prop: 'size', type: 'select',
    class: 'w-1/4',
    options: [
      "ATX-L",
      "ATX",
      "SFX-L",
      "SFX",
      "1U FLEX",
    ],
    placeholder: "Power Supply Size"
  },
  {
    label: 'Type', prop: 'type', type: 'select',
    class: 'w-1/4',
    options: [
      "Integrated Power Supply",
      "Semi-modular Power Supply",
      "Fully Modular Power Supply"
    ],
    placeholder: 'Power Supply Type'
  },
  {
    label: 'Power', prop: 'power', type: 'number',
    class: 'w-1/4',suffix: 'W',
  },
  {
    label: 'Model', prop: 'model', type: 'input',
    class: 'w-1/2',
    placeholder: 'Power Supply Model Number'
  },
  {
    label: 'Link', prop: 'link', type: 'input',
    class: 'w-1/3',
    placeholder: 'Online Shopping Product URL',
  },
  {
    label: 'Price', prop: 'price', type: 'number',
    class: 'w-1/6', prefixIcon: Money
  },
  {
    label: 'Remark', prop: 'remark', type: 'input',
    class: 'w-5/6',
    placeholder: 'Remark'
  },
  {
    label: 'Count', prop: 'count', type: 'count',
    class: 'w-1/6',
  }
]
</script>
<style></style>