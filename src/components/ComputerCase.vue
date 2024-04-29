<template>
  <div class="w-full p-5">
    <BaseForm v-model="caseForm" :formLabels="formLabels"/>
  </div>
</template>
<script setup>
import { Money } from "@element-plus/icons-vue"
import { reactive } from 'vue';
import BaseForm from './BaseForm.vue';
const caseForm = reactive({
  size: '',
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
      "Full-Tower",
      "Mid-Tower",
      "Slim-Tower",
      "Micro/mini Tower",
      "E-ATX",
      "ATX",
      "M-ATX",
      "ITX",
      "Mini-ITX",
      "A4"
    ],
    placeholder: "Case Size"
  },
  {
    label: 'Model', prop: 'model', type: 'input',
    class: 'w-3/4',
    placeholder: 'Case Detail Model Number'
  },
  {
    label: 'Link', prop: 'link', type: 'input',
    class: 'w-5/6',
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