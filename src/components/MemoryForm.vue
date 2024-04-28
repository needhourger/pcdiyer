
<template>
  <div class="w-full p-5">
    <BaseForm v-model="memoryForm" :formLabels="formLabels"/>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import { Money } from "@element-plus/icons-vue"
import BaseForm from './BaseForm.vue';
const memoryForm = reactive({
  generation: '',
  speed: '',
  capacity: 0,
  model: '',
  link: '',
  price: 0,
  remark: '',
})
const formLabels = [
  {
    label: 'Generation', prop: 'generation', type: 'select',
    class: 'w-1/4',
    options: ["DDR2","DDR3","DDR4","DDR5"],
    placeholder: 'Memory Generation'
  },
  {
    label: 'Speed', prop: 'speed', type: 'select',
    class: 'w-1/4',
    options: [],
    placeholder: 'Memory Frequency'
  },
  {
    label: 'Capacity', prop: 'capacity', type: 'number', suffixIcon: 'MHz'
  },
  {
    label: 'Model', prop: 'model', type: 'input',
    class: 'w-1/2',
    placeholder: 'Memory Model Number'
  },
  {
    label: 'Link', prop: 'link', type: 'input',
    class: 'w-1/3',
    placeholder: 'Online Shopping Product URL',
  },
  {
    label: 'Price', prop: 'price', type: 'number',
    class: 'w-1/6 ml-auto', prefixIcon: Money
  },
  {
    label: 'Remark', prop: 'remark', type: 'input',
    class: 'w-full',
    placeholder: 'Remark'
  }
]
</script>
<style></style>