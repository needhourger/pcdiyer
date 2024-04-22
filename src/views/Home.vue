<template>
  <div class=" p-10">
    <el-collapse>
      <el-collapse-item>
        <template #title>
          <h1 class="text-3xl flex text-center items-center">
            <el-icon class="mr-1"><Menu/></el-icon>
            Mother Board
          </h1>
        </template>
        <div>
          <MotherBoard/>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script setup>
import MotherBoard from '../components/MotherBoard.vue';
import { Menu } from "@element-plus/icons-vue"
</script>
<style lang="less" scoped>
</style>