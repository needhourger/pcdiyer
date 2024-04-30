<template>
  <div class=" p-10">
    <el-collapse>
      <el-collapse-item>
        <template #title>
          <h1 class="title">
            <el-icon class="mr-2"><Menu/></el-icon>
            Mother Board
          </h1>
        </template>
        <MotherBoard v-model="diyForm.motherBoard"/>
      </el-collapse-item>
      <el-collapse-item>
        <template #title>
          <h1 class="title">
            <el-icon class="mr-2"><Cpu/></el-icon>
            CPU(Central Processing Unit)
            <el-button class="ml-auto m-1" text circle @click="handleAddForm(diyForm.cpus,cpuForm)">
              <el-icon size="24"><CirclePlusFilled/></el-icon>
            </el-button>
          </h1>
        </template>
        <CPUForm v-model="diyForm.cpus[i]" v-for="cpu,i in diyForm.cpus" :key="i"/>
      </el-collapse-item>
      <el-collapse-item>
        <template #title>
          <h1 class="title">
            <el-icon class="mr-2"><Ticket/></el-icon>
            Memory
            <el-button class="ml-auto m-1" text circle>
              <el-icon size="24"><CirclePlusFilled/></el-icon>
            </el-button>
          </h1>
        </template>
        <MemoryForm v-model="diyForm.memorys[i]" v-for="memory,i in diyForm.memorys" :key="i"/>
      </el-collapse-item>
      <el-collapse-item>
        <template #title>
          <h1 class="title">
            <el-icon class="mr-2"><Platform/></el-icon>
            GPU(Graphics Processing Unit)
            <el-button class="ml-auto m-1" text circle>
              <el-icon size="24"><CirclePlusFilled/></el-icon>
            </el-button>
          </h1>
        </template>
        <GPUForm v-model="diyForm.gpus[i]" v-for="gpu,i in diyForm.gpus" :key="i"/>
      </el-collapse-item>
      <el-collapse-item>
        <template #title>
          <h1 class="title">
            <el-icon class="mr-2"><HelpFilled/></el-icon>
            Storage Drive
            <el-button class="ml-auto m-1" text circle>
              <el-icon size="24"><CirclePlusFilled/></el-icon>
            </el-button>
          </h1>
        </template>
        <StorageForm v-model="diyForm.storages[i]" v-for="storage,i in diyForm.storages" :key="i"/>
      </el-collapse-item>
      <el-collapse-item>
        <template #title>
          <h1 class="title">
            <el-icon class="mr-2"><Orange/></el-icon>
            CPU Cooler
            <el-button class="ml-auto m-1" text circle>
              <el-icon size="24"><CirclePlusFilled/></el-icon>
            </el-button>
          </h1>
        </template>
        <CPUCooler v-model="diyForm.cpuCoolers[i]" v-for="cooler,i in diyForm.cpuCoolers" :key="i"/>
      </el-collapse-item>
      <el-collapse-item>
        <template #title>
          <h1 class="title">
            <el-icon class="mr-2"><Stopwatch/></el-icon>
            Power Supply
            <el-button class="ml-auto m-1" text circle>
              <el-icon size="24"><CirclePlusFilled/></el-icon>
            </el-button>
          </h1>
        </template>
        <PowerForm v-model="diyForm.powers[i]" v-for="power,i in diyForm.powers" :key="i"/>
      </el-collapse-item>
      <el-collapse-item>
        <template #title>
          <h1 class="title">
            <el-icon class="mr-2"><Help/></el-icon>
            Fan
            <el-button class="ml-auto m-1" text circle>
              <el-icon size="24"><CirclePlusFilled/></el-icon>
            </el-button>
          </h1>
        </template>
        <FanForm v-model="diyForm.fans[i]" v-for="fan,i in diyForm.fans" :key="i"/>
      </el-collapse-item>
      <el-collapse-item>
        <template #title>
          <h1 class="title">
            <el-icon class="mr-2"><Box/></el-icon>
            Computer Case
          </h1>
        </template>
        <ComputerCase v-model="diyForm.case"/>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script setup>
import GPUForm from '../components/GPUForm.vue';
import MemoryForm from '../components/MemoryForm.vue';
import MotherBoard from '../components/MotherBoard.vue';
import { Menu, Cpu, Platform, Ticket, HelpFilled, Orange, Stopwatch, Box, CirclePlusFilled, Help } from "@element-plus/icons-vue"
import StorageForm from '../components/StorageForm.vue';
import CPUCooler from '../components/CPUCooler.vue';
import PowerForm from "../components/PowerForm.vue";
import ComputerCase from "../components/ComputerCase.vue";
import FanForm from '../components/FanForm.vue';
import { cpuForm, diyForm } from '../utils/useForm.js'
const handleAddForm = (forms, form) => {
  forms.push(form)
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