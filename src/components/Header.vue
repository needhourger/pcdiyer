<template>
  <div class="w-full text-center mb-5 flex items-start" id="stars">
    <span class="text-9xl font-bold">PC-DIYer</span>
    <div class="text-2xl font-bold ml-auto mt-auto">
      Total Price: {{ price }} $
      <el-button type="primary" @click="emits('share')">Share</el-button>
    </div>
  </div>
</template>
<script setup>
const emits = defineEmits(["share"])
const props = defineProps({
  price: { type: Number, default: 0}
})
</script>
<style lang="less" scoped>
</style>