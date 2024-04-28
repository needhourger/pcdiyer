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
            CPU(Central Processing Unit)
          </h1>
        </template>
        <CPUForm/>
      </el-collapse-item>
      <el-collapse-item>
        <template #title>
          <h1 class="title">
            <el-icon class="mr-2"><Platform/></el-icon>
            GPU(Graphics Processing Unit)
          </h1>
        </template>
        <GPUForm/>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script setup>
import GPUForm from '../components/GPUForm.vue';
import MotherBoard from '../components/MotherBoard.vue';
import { Menu, Cpu, Platform } from "@element-plus/icons-vue"
</script>
<style lang="less" scoped>
.el-collapse {
  --el-collapse-content-font-size: 1.4rem;
  --el-collapse-header-height: 80px;
}
.title {
  display: flex;
  font-size: 1.6rem;
  line-height: 1.6rem;
  align-items: center;
  text-align: center;
}
</style>