<template>
  <div class="w-full">
    <BaseForm v-model="fanForm" :formLabels="formLabels"/>
  </div>
</template>
<script setup>
import { Money } from "@element-plus/icons-vue"
import BaseForm from './BaseForm.vue';
const fanForm= defineModel()

const formLabels = [
  {
    label: 'Size', prop: 'size', type: 'select',
    class: 'w-1/4',
    options: [
      "4010(40x40x10mm)",
      "4020(40x40x20mm)",
      "6025(60x60x25mm)",
      "4028(40x40x28mm)",
      "8010(80x80x10mm)",
      "8020(80x80x20mm)",
      "12010(120x120x10mm)",
      "12020(120x120x20mm)",
    ],
    placeholder: "Fan Size"
  },
  {
    label: 'Light Type', prop: 'light', type: 'select',
    class: 'w-1/4',
    options: [
      "No Light",
      "Single Light",
      "Single Light(Red)",
      "Single Light(Blue)",
      "Single Light(Green)",
      "Single Light(White)",
      "RGB",
    ],
    placeholder: 'Fan Light Type'
  },
  {
    label: 'Speed Control', prop: 'control', type: 'select',
    class: 'w-1/4',
    options: [
      "PWN(Pulse Width Modulation)",
      "DC(Direct Current)"
    ],
    placeholder: 'Fan Speed Control Type'
  },
  {
    label: 'Price', prop: 'price', type: 'number',
    class: 'w-1/4', prefixIcon: Money
  },
  {
    label: 'Model', prop: 'model', type: 'input',
    class: 'w-1/2',
    placeholder: 'Fan Detail Model Number'
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
    label: 'Count', prop: 'num', type: 'count',
    class: 'w-1/6',
  }
]
</script>
<style></style>