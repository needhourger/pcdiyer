
<template>
  <div class="w-full">
    <BaseForm v-model="memoryForm" :formLabels="formLabels"/>
  </div>
</template>
<script setup>
import { Money } from "@element-plus/icons-vue"
import BaseForm from './BaseForm.vue';
const memoryForm = defineModel()
const formLabels = [
  {
    label: 'Generation', prop: 'generation', type: 'select',
    class: 'w-1/4',
    options: ["DDR2","DDR3","DDR4","DDR5"],
    placeholder: 'Memory Generation'
  },
  {
    label: 'Speed', prop: 'speed', type: 'number',
    class: 'w-1/4', suffix: "MHz",
    placeholder: 'Memory Frequency'
  },
  {
    label: 'Capacity', prop: 'capacity', type: 'number',class: "w-1/4", suffix:"GB"
  },
  {
    label: 'Price', prop: 'price', type: 'number',
    class: 'w-1/4', prefixIcon: Money
  },
  {
    label: 'Model', prop: 'model', type: 'input',
    class: 'w-1/2',
    placeholder: 'Memory Model Number'
  },
  {
    label: 'Link', prop: 'link', type: 'input',
    class: 'w-1/2',
    placeholder: 'Online Shopping Product URL',
  },
  {
    label: 'Remark', prop: 'remark', type: 'input',
    class: 'w-5/6',
    placeholder: 'Remark'
  },
  {
    label: 'count', prop: 'count', type: 'count',
    class: 'w-1/6'
  }
]
</script>
<style></style>