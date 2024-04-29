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
        <MotherBoard/>
      </el-collapse-item>
      <el-collapse-item>
        <template #title>
          <h1 class="title">
            <el-icon class="mr-2"><Cpu/></el-icon>
            <span>CPU(Central Processing Unit)</span>
            <el-button class="ml-auto m-1" text circle>
              <el-icon size="24"><CirclePlusFilled/></el-icon>
            </el-button>
          </h1>
        </template>
        <CPUForm/>
      </el-collapse-item>
      <el-collapse-item>
        <template #title>
          <h1 class="title">
            <el-icon class="mr-2"><Ticket/></el-icon>
            <span>Memory</span>
            <el-button class="ml-auto m-1" text circle>
              <el-icon size="24"><CirclePlusFilled/></el-icon>
            </el-button>
          </h1>
        </template>
        <MemoryForm/>
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
        <GPUForm/>
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
        <StorageForm/>
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
        <CPUCooler/>
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
        <PowerForm/>
      </el-collapse-item>
      <el-collapse-item>
        <template #title>
          <h1 class="title">
            <el-icon class="mr-2"><Box/></el-icon>
            Computer Case
          </h1>
        </template>
        <ComputerCase/>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script setup>
import GPUForm from '../components/GPUForm.vue';
import MemoryForm from '../components/MemoryForm.vue';
import MotherBoard from '../components/MotherBoard.vue';
import { Menu, Cpu, Platform, Ticket, HelpFilled, Orange, Stopwatch, Box, CirclePlusFilled } from "@element-plus/icons-vue"
import StorageForm from '../components/StorageForm.vue';
import CPUCooler from '../components/CPUCooler.vue';
import PowerForm from "../components/PowerForm.vue";
import ComputerCase from "../components/ComputerCase.vue"
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