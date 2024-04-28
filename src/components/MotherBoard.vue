<template>
  <div class="w-full p-5">
    <el-form label-position="top" inline :model="mbForm">
      <el-form-item v-for="item, i in formLabels" :key="i" :label="item.label" :prop="item.prop" size="large"
        :class="item.class">
        <el-select v-if="item.type === 'select'" filterable allow-create v-model="mbForm[`${item.prop}`]" :placeholder="item.placeholder">
          <el-option v-for="option, index in item.options" :key="index" :label="option" :value="option"></el-option>
        </el-select>
        <el-input v-if="item.type === 'input'" :placeholder="item.placeholder" v-model="mbForm[`${item.prop}`]"></el-input>
        <el-input v-if="item.type ==='number'" v-model.number="mbForm[`${item.prop}`]" :prefix-icon="Money"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { reactive } from 'vue';
import { Money } from "@element-plus/icons-vue"

const mbForm = reactive({
  cpuType: '',
  socket: '',
  formFactor: '',
  chipset: '',
  model: '',
  link: '',
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
  { label: 'Price', prop: 'price', type: 'number', class: 'w-1/6'},
  { label: 'Remark', prop: 'remark', type: 'input', class: 'w-full', placeholder: "Remark" }
]
</script>
<style lang="less" scoped>
.el-form-item {
  margin: 0;
  margin-bottom: 0.5rem;
  padding: 0 0.5rem;
  --el-form-label-font-size: 1.4rem;
  --el-text-color-regular: #fff;
}
.el-select {
  :deep(.el-select__wrapper) {
    font-size: 1.2rem;
  }
}
.el-input {
  font-size: 1.2rem;
}
</style>
