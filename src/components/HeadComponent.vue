<template>
  <div class="w-full text-center mb-5 flex items-start px-10" id="stars">
    <span class="text-9xl font-bold">PC-DIYer</span>
    <div class="text-2xl font-bold ml-auto flex flex-col w-1/3 p-6">
      <div class="flex">
        <el-select v-model="currentOptionId" class="mr-3" size="large">
          <el-option label="ALL" value="all"></el-option>
          <el-option v-for="option,i in options" :key="i" :label="option.name" :value="option.id"></el-option>
        </el-select>
      </div>
      <div class="w-full text-end mt-4" v-if="props.forms">
        <div v-for="option, oindex in options" :style="{ color: option.color }">
          {{ option.id }} : {{ totalPrice(option.id) }} $
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';
import { totalPrice } from '../utils/utils.js'
import { currentOptionId } from '../utils/useForm.js';
const emits = defineEmits(["update:option"])
const props = defineProps({
  forms: { type: Object, default: () => ({}) },
})
const options = computed(() => {
  return props.forms.options
})

</script>
<style lang="less" scoped>
.el-select {
  :deep(.el-select__wrapper) {
    font-size: 18px;
  }
}
</style>