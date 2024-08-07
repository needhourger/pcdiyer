<template>
  <div class="p-6 rounded-lg mb-4 relative"
    style="border: 3px solid rgb(254,242,242)"
    :style="{
      borderColor: form.option.color ? form.option.color : null,
    }">
    <div class="absolute right-3 top-0">
      <el-button circle text type="danger" @click="emits('remove')">
        <el-icon><RemoveFilled/></el-icon>
      </el-button>
    </div>
    <el-form label-position="top" inline :model="form" v-if="form">
      <FormItemsTemplate v-model="form" :formLabels="commonFormLabels"/>
      <el-collapse class="w-full mx-3">
        <el-collapse-item :title="$t('advanceConfigurations')">
          <FormItemsTemplate v-model="form" :formLabels="advanceFormLabels"/>
        </el-collapse-item>
      </el-collapse>
    </el-form>
  </div>
</template>
<script setup>
import { RemoveFilled } from "@element-plus/icons-vue"
import FormItemsTemplate from "./FormItemsTemplate.vue";
import { computed } from "vue";
const props = defineProps({
  formLabels: { type: Array, default: () => ([]) }
})
const emits = defineEmits(["remove"])
const form = defineModel()
const COMMON_FORM_LABEL = ["model","price","count","link"]
const advanceFormLabels = computed(() => {
  return props.formLabels.filter(item => !COMMON_FORM_LABEL.includes(item.prop))
})
const commonFormLabels = computed(() => {
  return props.formLabels.filter(item => COMMON_FORM_LABEL.includes(item.prop))
})
</script>
<style lang="less" scoped>
.el-collapse {
  --el-collapse-header-font-size: 1.4rem;
}
</style>
