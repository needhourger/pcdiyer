<template>
  <div class="p-10">
    <Header :price="totalPrice" @share="handleShare"/>
    <el-collapse @change="handleCollapseChange">
      <el-collapse-item v-for="item, i in collapses" :key="i" :name="item.prop">
        <template #title>
          <div class="title">
            <div class="flex items-center w-60">
              <el-icon class="mr-2">
                <component :is="item.icon"></component>
              </el-icon>
              <span>{{ item.label }}</span>
            </div>
            <div v-show="item.isCollapse" class="text-gray-400 text-start overflow-hidden text-ellipsis text-nowrap">
              <template v-if="Array.isArray(diyForm[item.prop])">
                <span v-for="m,j in diyForm[item.prop]" :key="j">
                  {{ m.model }}<span v-if="m.count > 1" class="text-blue-300">x{{ m.count }}</span>&nbsp;&nbsp;
                </span>
              </template>
              <template v-else>
                <span>{{ diyForm[item.prop].model }}</span>
              </template>
            </div>
            <div class="ml-auto flex items-center">
              <span class="w-16">{{ singlePrice(diyForm[item.prop]) }} $</span>
              <el-button class="m-1" text circle :class="Array.isArray(diyForm[item.prop]) ? '' : 'invisible'"
                @click.stop="handleAddForm(diyForm[item.prop], item.formBase)">
                <el-icon>
                  <CirclePlusFilled />
                </el-icon>
              </el-button>
              <el-button>
                Add Option
              </el-button>
            </div>
          </div>
        </template>
        <template v-if="Array.isArray(diyForm[item.prop])">
          <BaseForm v-for="form, i in diyForm[item.prop]" v-model="diyForm[item.prop][i]"
            :formLabels="labels[item.labelsName]" @remove="handleRemove(diyForm[item.prop],i)"/>
        </template>
        <template v-else>
          <BaseForm v-model="diyForm[item.prop]" :formLabels="labels[item.labelsName]" @remove="handleRemove(diyForm[item.prop],i)"/>
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
import { computed, onMounted, reactive } from "vue";
import { memoryForm } from "../utils/useForm.js";
import { gpuForm } from "../utils/useForm.js";
import { storageForm } from "../utils/useForm.js";
import { cpuCoolerForm } from "../utils/useForm.js";
import { powerForm } from "../utils/useForm.js";
import { fanForm } from "../utils/useForm.js";
import { motherboardForm } from "../utils/useForm.js";
import { caseForm } from "../utils/useForm.js";
import { ref } from "vue"
import { Base64 } from "js-base64"
import { copy2Clipboard } from '../utils/utils.js'
import { useRoute } from "vue-router";
const collapses = ref([
  { label: 'Mother Board', icon: Menu, prop: 'motherboard', labelsName: 'motherboard', formBase: motherboardForm, isCollapse: true },
  { label: 'CPU', icon: Cpu, prop: 'cpus', labelsName: 'cpu', formBase: cpuForm, isCollapse: true },
  { label: 'GPU', icon: Platform, prop: 'gpus', labelsName: 'gpu', formBase: gpuForm, isCollapse: true },
  { label: 'Memory', icon: Ticket, prop: 'memorys', labelsName: 'memory', formBase: memoryForm, isCollapse: true },
  { label: 'Storage Drive', icon: HelpFilled, prop: 'storages', labelsName: 'storage', formBase: storageForm, isCollapse: true },
  { label: 'CPU Cooler', icon: Orange, prop: 'cpuCoolers', labelsName: 'cpuCooler', formBase: cpuCoolerForm, isCollapse: true },
  { label: 'Fan', icon: Help, prop: 'fans', labelsName: 'fan', formBase: fanForm, isCollapse: true },
  { label: 'Power Supply', icon: Stopwatch, prop: 'powers', labelsName: 'power', formBase: powerForm, isCollapse: true },
  { label: 'Computer Case', icon: Box, prop: 'case', labelsName: 'computerCase', formBase: caseForm, isCollapse: true },
  { label: 'Other', icon: Grid, prop: 'others', labelsName: 'other', formBase: otherForm, isCollapse: true },
])
const handleAddForm = (forms, form,event) => {
  forms.push(reactive({ ...form }));
  console.log(event)
};
const handleRemove = (forms, index) => {
  forms.splice(1, index);
};
const totalPrice = computed(() => {
  let price = 0;
  for (let key in diyForm) {
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
const handleCollapseChange = (activeNames) => {
  for (let i=0; i< collapses.value.length; i++) {
    if (activeNames.indexOf(collapses.value[i].prop) !== -1) {
      collapses.value[i].isCollapse = false
    } else {
      collapses.value[i].isCollapse = true
    }
  }
}
const handleShare = () => {
  const b64 = Base64.encodeURL(JSON.stringify(diyForm,null,0))
  const baseUrl = window.location.href
  const shareUrl = `${baseUrl}?catalog=${b64}`
  setTimeout(async () => {
    await copy2Clipboard(shareUrl)
  }, 100);
}
const route = useRoute()
const extractShareData = () => {
  const b64 = route.query.catalog || null
  if (!b64) return
  const decoded = Base64.decode(b64)
  const data = JSON.parse(decoded)
  Object.assign(diyForm,data)
}
onMounted(() => {
  extractShareData()
})
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
