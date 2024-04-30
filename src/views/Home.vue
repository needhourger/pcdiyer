<template>
  <div class="p-10">
    <Header :price="totalPrice"/>
    <el-collapse>
      <el-collapse-item>
        <template #title>
          <h1 class="title">
            <el-icon class="mr-2">
              <Menu />
            </el-icon>
            Mother Board
          </h1>
        </template>
        <BaseForm
          v-model="diyForm.motherBoard"
          :formLabels="labels.motherboard" />
      </el-collapse-item>
      <el-collapse-item>
        <template #title>
          <h1 class="title">
            <el-icon class="mr-2">
              <Cpu />
            </el-icon>
            CPU(Central Processing Unit)
            <el-button
              class="ml-auto m-1"
              text
              circle
              @click="handleAddForm(diyForm.cpus, cpuForm)">
              <el-icon size="24">
                <CirclePlusFilled />
              </el-icon>
            </el-button>
          </h1>
        </template>
        <BaseForm
          v-model="diyForm.cpus[i]"
          v-for="(cpu, i) in diyForm.cpus"
          :key="i"
          :formLabels="labels.cpu"
          @remove="handleRemove(diyForm.cpus, i)" />
      </el-collapse-item>
      <el-collapse-item>
        <template #title>
          <h1 class="title">
            <el-icon class="mr-2">
              <Ticket />
            </el-icon>
            Memory
            <el-button class="ml-auto m-1" text circle @click="handleAddForm(diyForm.memorys, memoryForm)">
              <el-icon size="24">
                <CirclePlusFilled />
              </el-icon>
            </el-button>
          </h1>
        </template>
        <BaseForm
          v-model="diyForm.memorys[i]"
          v-for="(memory, i) in diyForm.memorys"
          :key="i"
          :formLabels="labels.memory"
          @remove="handleRemove(diyForm.memorys, i)" />
      </el-collapse-item>
      <el-collapse-item>
        <template #title>
          <h1 class="title">
            <el-icon class="mr-2">
              <Platform />
            </el-icon>
            GPU(Graphics Processing Unit)
            <el-button class="ml-auto m-1" text circle @click="handleAddForm(diyForm.gpus,gpuForm)">
              <el-icon size="24">
                <CirclePlusFilled />
              </el-icon>
            </el-button>
          </h1>
        </template>
        <BaseForm
          v-model="diyForm.gpus[i]"
          v-for="(gpu, i) in diyForm.gpus"
          :key="i"
          :formLabels="labels.gpu"
          @remove="handleRemove(diyForm.gpus, i)" />
      </el-collapse-item>
      <el-collapse-item>
        <template #title>
          <h1 class="title">
            <el-icon class="mr-2">
              <HelpFilled />
            </el-icon>
            Storage Drive
            <el-button class="ml-auto m-1" text circle @click="handleAddForm(diyForm.storages,storageForm)">
              <el-icon size="24">
                <CirclePlusFilled />
              </el-icon>
            </el-button>
          </h1>
        </template>
        <BaseForm
          v-model="diyForm.storages[i]"
          v-for="(storage, i) in diyForm.storages"
          :key="i"
          :formLabels="labels.storage"
          @remove="handleRemove(diyForm.storages, i)" />
      </el-collapse-item>
      <el-collapse-item>
        <template #title>
          <h1 class="title">
            <el-icon class="mr-2">
              <Orange />
            </el-icon>
            CPU Cooler
            <el-button class="ml-auto m-1" text circle @click="handleAddForm(diyForm.cpuCoolers, cpuCoolerForm)">
              <el-icon size="24">
                <CirclePlusFilled />
              </el-icon>
            </el-button>
          </h1>
        </template>
        <BaseForm
          v-model="diyForm.cpuCoolers[i]"
          v-for="(cooler, i) in diyForm.cpuCoolers"
          :key="i"
          :formLabels="labels.cpuCooler"
          @remove="handleRemove(diyForm.cpuCoolers, i)" />
      </el-collapse-item>
      <el-collapse-item>
        <template #title>
          <h1 class="title">
            <el-icon class="mr-2">
              <Stopwatch />
            </el-icon>
            Power Supply
            <el-button class="ml-auto m-1" text circle @click="handleAddForm(diyForm.powers, powerForm)">
              <el-icon size="24">
                <CirclePlusFilled />
              </el-icon>
            </el-button>
          </h1>
        </template>
        <BaseForm
          v-model="diyForm.powers[i]"
          v-for="(power, i) in diyForm.powers"
          :key="i"
          :formLabels="labels.power"
          @remove="handleRemove(diyForm.powers, i)" />
      </el-collapse-item>
      <el-collapse-item>
        <template #title>
          <h1 class="title">
            <el-icon class="mr-2">
              <Help />
            </el-icon>
            Fan
            <el-button class="ml-auto m-1" text circle @click="handleAddForm(diyForm.fans, fanForm)">
              <el-icon size="24">
                <CirclePlusFilled />
              </el-icon>
            </el-button>
          </h1>
        </template>
        <BaseForm
          v-model="diyForm.fans[i]"
          v-for="(fan, i) in diyForm.fans"
          :key="i"
          :formLabels="labels.fan"
          @remove="handleRemove(diyForm.fans, i)" />
      </el-collapse-item>
      <el-collapse-item>
        <template #title>
          <h1 class="title">
            <el-icon class="mr-2">
              <Box />
            </el-icon>
            Computer Case
          </h1>
        </template>
        <BaseForm v-model="diyForm.case" :formLabels="labels.computerCase" />
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
} from "@element-plus/icons-vue";
import BaseForm from "../components/BaseForm.vue";
import Header from '../components/Header.vue';
import { cpuForm, diyForm } from "../utils/useForm.js";
import labels from "../utils/useFormLabels.js";
import { computed, reactive } from "vue";
import { memoryForm } from "../utils/useForm.js";
import { gpuForm } from "../utils/useForm.js";
import { storageForm } from "../utils/useForm.js";
import { cpuCoolerForm } from "../utils/useForm.js";
import { powerForm } from "../utils/useForm.js";
import { fanForm } from "../utils/useForm.js";
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
