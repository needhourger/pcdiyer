
<template>
  <div class="w-full p-5">
    <BaseForm v-model="cpuCoolerForm" :formLabels="formLabels"/>
  </div>
</template>
<script setup>
import { Money } from "@element-plus/icons-vue"
import BaseForm from './BaseForm.vue';
const cpuCoolerForm = defineModel()
const formLabels = [
  {
    label: 'Cooler Type', prop: 'type', type: 'select',
    class: 'w-1/4',
    options: [
      "Air-cooled Radiator",
      "Integrated Water-cooled Radiator",
      "Split Water-cooled Radiator"
    ],
    placeholder: "CPU Cooler Type"
  },
  {
    label: 'Size', prop: 'size', type: 'select',
    class: 'w-1/4',
    options: [
      "120mm","140mm","240mm","280mm","360mm", "480mm"
    ],
    placeholder: 'CPU Cooler Size'
  },
  {
    label: 'Model', prop: 'model', type: 'input',
    class: 'w-1/2',
    placeholder: 'CPU Cooler Model Number'
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