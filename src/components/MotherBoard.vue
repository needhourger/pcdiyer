<template>
  <div class="w-full p-5">
    <BaseForm v-model="mbForm" :formLabels="formLabels"/>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import { Money } from "@element-plus/icons-vue"
import BaseForm from './BaseForm.vue';

const mbForm = reactive({
  cpuType: '',
  socket: '',
  formFactor: '',
  chipset: '',
  model: '',
  link: '',
  price: 0,
  remark: '',
})
const formLabels = [
  {
    label: 'CPU Type', prop: 'cpuType', type: 'select', class: 'w-1/4',
    options: [
      "AMD", "Intel", "Other"
    ],
    placeholder: "CPU Manufacturer"
  },
  {
    label: 'Socket', prop: 'socket', type: 'select', class: 'w-1/4',
    options: [],
    placeholder: "Socket Type"
  },
  {
    label: 'Form Factor', prop: 'formFactor', type: 'select', class: 'w-1/4',
    options: [
      "ATX", "Micro-ATX(mATX)", " Mini-ITX(ITX)", "Other"
    ],
    placeholder: "MotherBoard Form Factor"
  },
  { label: 'Chipset', prop: 'chipset', type: 'select', class: 'w-1/4', options: [], placeholder: "Motherboard Chipset" },
  { label: 'Model', prop: 'model', type: 'input', class: 'w-1/2', placeholder: "Motherboard Detail Model " },
  { label: 'Link', prop: 'link', type: 'input', class: 'w-1/3', placeholder: "Online Shopping Product url" },
  { label: 'Price', prop: 'price', type: 'number', class: 'w-1/6', prefixIcon: Money},
  { label: 'Remark', prop: 'remark', type: 'input', class: 'w-full', placeholder: "Remark" }
]
</script>
<style lang="less" scoped>
</style>
