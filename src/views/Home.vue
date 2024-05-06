<template>
  <div class="p-10">
    <Header :price="totalPrice"/>
    <el-collapse>
      <el-collapse-item v-for="item,i in collapses" :key="i">
        <template #title>
          <div class="title">
            <el-icon class="mr-2">
              <component :is="item.icon"></component>
            </el-icon>
            <span>{{item.label}}</span>
            <div class="ml-auto flex items-center">
              <span>{{ singlePrice(diyForm[item.prop]) }} $</span>
              <el-button class="m-1" text circle
                :class="Array.isArray(diyForm[item.prop])?'':'invisible'"
                @click="handleAddForm(diyForm[item.prop],item.formBase)">
                <el-icon><CirclePlusFilled/></el-icon>
              </el-button>
            </div>
          </div>
        </template>
        <template v-if="Array.isArray(diyForm[item.prop])">
          <BaseForm v-for="form,i in diyForm[item.prop]"
            v-model="diyForm[item.prop][i]" :formLabels="labels[item.labelsName]"/>
        </template>
        <template v-else>
          <BaseForm v-model="diyForm[item.prop]" :formLabels="labels[item.labelsName]"/>
        </template>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script setup>
import {
  Menu,
  Cpu,
  Platform,
  Ticket,
  HelpFilled,
  Orange,
  Stopwatch,
  Box,
  CirclePlusFilled,
  Help,
  Grid,
} from "@element-plus/icons-vue";
import BaseForm from "../components/BaseForm.vue";
import Header from '../components/Header.vue';
import { cpuForm, diyForm, otherForm } from "../utils/useForm.js";
import labels from "../utils/useFormLabels.js";
import { computed, reactive } from "vue";
import { memoryForm } from "../utils/useForm.js";
import { gpuForm } from "../utils/useForm.js";
import { storageForm } from "../utils/useForm.js";
import { cpuCoolerForm } from "../utils/useForm.js";
import { powerForm } from "../utils/useForm.js";
import { fanForm } from "../utils/useForm.js";
import { motherboardForm } from "../utils/useForm.js";
import { caseForm } from "../utils/useForm.js";
const collapses = [
  { label: 'Mother Board', icon: Menu, prop: 'motherboard', labelsName: 'motherboard',formBase: motherboardForm },
  { label: 'CPU', icon: Cpu, prop: 'cpus',labelsName:'cpu', formBase: cpuForm },
  { label: 'GPU', icon: Platform, prop: 'gpus', labelsName:'gpu', formBase: gpuForm},
  { label: 'Memory', icon: Ticket, prop: 'memorys', labelsName: 'memory', formBase: memoryForm },
  { label: 'Storage Drive', icon: HelpFilled, prop: 'storages', labelsName:'storage', formBase: storageForm },
  { label: 'CPU Cooler', icon: Orange, prop: 'cpuCoolers', labelsName: 'cpuCooler', formBase: cpuCoolerForm },
  { label: 'Fan', icon: Stopwatch, prop: 'fans', labelsName: 'fan', formBase: fanForm },
  { label: 'Power Supply', icon: Help, prop: 'powers', labelsName: 'power', formBase: powerForm },
  { label: 'Computer Case', icon: Box, prop: 'case', labelsName: 'computerCase', formBase: caseForm },
  { label: 'Other', icon: Grid, prop: 'others', labelsName: 'other', formBase: otherForm},
]
const handleAddForm = (forms, form) => {
  forms.push(reactive({...form}));
};
const handleRemove = (forms, index) => {
  forms.splice(1, index);
};
const totalPrice = computed(() => {
  let price = 0;
  for (let key in diyForm) {
    console.log(diyForm[key])
    if (Array.isArray(diyForm[key])) {
      diyForm[key].forEach(e => {
        price += e.price * e.count || 0;
      });
    } else {
      price += diyForm[key].price * diyForm[key].count || 0;
    }
  }
  return price
})
const singlePrice = (target) => {
  let price = 0
  if (!target) return 0
  if (Array.isArray(target)) {
    target.forEach(e => {
      price += e.price * e.count || 0;
    })
  } else {
    price += target.price * target.count
  }
  return price
}
</script>
<style lang="less" scoped>
.el-collapse {
  --el-collapse-content-font-size: 1.4rem;
  --el-collapse-header-height: 80px;
}

.title {
  display: flex;
  width: 100%;
  font-size: 1.6rem;
  line-height: 1.6rem;
  align-items: center;
  text-align: center;
}
</style>
