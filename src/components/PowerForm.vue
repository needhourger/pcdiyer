<template>
  <div class="w-full p-5">
    <BaseForm v-model="powerForm" :formLabels="formLabels"/>
  </div>
</template>
<script setup>
import { Money } from "@element-plus/icons-vue"
import { reactive } from 'vue';
import BaseForm from './BaseForm.vue';
const powerForm = reactive({
  size: '',
  type: '',
  power: 0,
  model: '',
  link: '',
  price: 0,
  remark: '',
})
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
    class: 'w-full',
    placeholder: 'Remark'
  }
]
</script>
<style></style>