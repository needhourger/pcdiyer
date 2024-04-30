<template>
  <div class="w-full">
    <BaseForm v-model="cpuForm" :formLabels="formLabels"/>
  </div>
</template>
<script setup>
import { Money } from "@element-plus/icons-vue"
import BaseForm from './BaseForm.vue';
const cpuForm = defineModel()
const formLabels = [
  {
    label: 'CPU Type', prop: 'cpuType', type: 'select',
    class: 'w-1/4',
    options: [
      "AMD", "Intel", "Other"
    ],
    placeholder: "CPU Manufacturer"
  },
  {
    label: 'Socket', prop: 'socket', type: 'select',
    class: 'w-1/4',
    options: [],
    placeholder: 'Socket Type'
  },
  {
    label: 'Generation', prop: 'generation', type: 'select',
    class: 'w-1/4',
    options: [],
    placeholder: 'CPU Generation'
  },
  {
    label: 'Price', prop: 'price', type: 'number',
    class: 'w-1/4', prefixIcon: Money
  },
  {
    label: 'Model', prop: 'model', type: 'input',
    class: 'w-1/2',
    placeholder: 'CPU Model Number'
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
    label: 'Count', prop: 'count', type: 'count',
    class: 'w-1/6'
  }
]
</script>
<style></style>