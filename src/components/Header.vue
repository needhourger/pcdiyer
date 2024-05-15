<template>
  <div class="w-full text-center mb-5 flex items-start" id="stars">
    <span class="text-9xl font-bold">PC-DIYer</span>
    <div class="text-2xl font-bold ml-auto flex flex-col w-1/3 p-6">
      <div class="flex">
        <el-select v-model="currentOptionId" class="mr-3" size="large">
          <el-option label="ALL" value="all"></el-option>
          <el-option v-for="option,i in options" :key="i" :label="option.name" :value="option.id"></el-option>
        </el-select>
        <el-button type="primary" @click="emits('share')" size="large">Share</el-button>
      </div>
      <span class="w-full text-end mt-4">Total Price: {{ price }} $</span>
    </div>
  </div>
</template>
<script setup>
const emits = defineEmits(["share", "update:option"])
const props = defineProps({
  price: { type: Number, default: 0 },
  options: { type: Array, default: () => ([]) },
})
const currentOptionId = defineModel({ type: String, default: 'default' })
</script>
<style lang="less" scoped>
.el-select {
  --el-select-font-size: 16px;
}
</style>