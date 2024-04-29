<template>
  <div class="w-full p-5">
    <BaseForm v-model="gpuForm" :formLabels="formLabels"/>
  </div>
</template>
<script setup>
import { Money } from "@element-plus/icons-vue"
import BaseForm from './BaseForm.vue';
const gpuForm = defineModel()
const formLabels = [
  {
    label: 'GPU Type', prop: 'gpuType', type: 'select',
    class: 'w-1/4',
    options: [
      "AMD","NVIDIA","Intel","Other"
    ],
    placeholder: "GPU Manufacturer"
  },
  {
    label: 'Generation', prop: 'generation', type: 'select',
    class: 'w-1/4',
    options: [],
    placeholder: 'GPU Generation'
  },
  {
    label: 'Model', prop: 'model', type: 'input',
    class: 'w-1/2',
    placeholder: 'GPU Model Number'
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
    class: 'w-1/6'
  }
]
</script>
<style></style>