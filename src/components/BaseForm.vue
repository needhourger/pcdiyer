<template>
  <div>
    <el-form label-position="top" inline :model="form">
      <el-form-item v-for="item, i in formLabels" :key="i" :label="item.label" :prop="item.prop" size="large"
        :class="item.class">
        <el-select v-if="item.type === 'select'" filterable allow-create v-model="form[`${item.prop}`]"
          :placeholder="item.placeholder">
          <el-option v-for="option, index in item.options" :key="index" :label="option" :value="option"></el-option>
        </el-select>
        <el-input v-if="item.type === 'input'" :placeholder="item.placeholder" v-model="form[`${item.prop}`]"
          :prefix-icon="item.prefixIcon" :suffix-icon="item.suffixIcon">
          <template #prefix>
            <span>{{ item.prefix }}</span>
          </template>
          <template #suffix>
            <span>{{ item.suffix }}</span>
          </template>
        </el-input>
        <el-input v-if="item.type === 'number'" v-model.number="form[`${item.prop}`]" :prefix-icon="item.prefixIcon"
          :suffix-icon="item.suffixIcon">
          <template #prefix>
            <span>{{ item.prefix }}</span>
          </template>
          <template #suffix>
            <span>{{ item.suffix }}</span>
          </template>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
defineProps({
  formLabels: { type: Array, default: () => ([]) }
})
const form = defineModel()
</script>
<style lang="less" scoped>
.el-form-item {
  margin: 0;
  margin-bottom: 0.5rem;
  padding: 0 0.5rem;
  --el-form-label-font-size: 1.6rem;
  --el-text-color-regular: #fff;
}

.el-select {
  :deep(.el-select__wrapper) {
    font-size: 1.2rem;
  }
}

.el-input {
  font-size: 1.2rem;
}
</style>
