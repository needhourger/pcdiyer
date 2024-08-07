<template>
  <div class="">
    <HeaderBar/>
    <HeadComponent :forms="diyForm" @share="handleShare" v-model="currentOptionId" />
    <el-collapse @change="handleCollapseChange" class="px-10">
      <el-collapse-item v-for="collapse, cindex in collapses" :key="cindex" :name="collapse.prop">
        <template #title>
          <div class="title">
            <div class="flex items-center w-60">
              <el-icon class="mr-2">
                <component :is="collapse.icon"></component>
              </el-icon>
              <span>{{ collapse.label }}</span>
            </div>
            <div v-show="collapse.isCollapse"
              class="text-gray-400 text-start overflow-hidden text-ellipsis text-nowrap">
              <span
                v-for="form, findex in diyForm[collapse.prop].filter(v => currentOptionId === 'all' || v.option.id === currentOptionId)"
                :key="findex">
                <span :style="{ color: form.option.color + 'aa' }">{{ form.model }}</span>
                <span v-if="form.count > 1" class="text-blue-300">x{{ form.count }}</span> &nbsp;&nbsp; </span>
              <template
                v-if="currentOptionId !== 'all' && diyForm[collapse.prop].filter(v => v.option.id === currentOptionId).length === 0">
                <span v-for="form, findex in diyForm[collapse.prop].filter(v => v.option.id === 'default')"
                  :key="findex">
                  <span :style="{ color: form.option.color + 'aa' }">{{ form.model }}</span>
                  <span v-if="form.count > 1" class="text-blue-300">x{{ form.count }}</span> &nbsp;&nbsp; </span>
              </template>
            </div>
            <div class="ml-auto flex items-center">
              <template
                v-for="option, oindex in diyForm.options.filter(v => currentOptionId === 'all' || v.id === currentOptionId)"
                :key="oindex">
                <span class="w-16" :style="{ color: option.color + 'aa' }">{{ singlePrice(diyForm[collapse.prop],
                  option.id) }} $</span>
              </template>
              <el-button class="m-1" text circle
                @click.stop="handleAddForm(diyForm[collapse.prop], collapse.formBase())">
                <el-icon>
                  <CirclePlusFilled />
                </el-icon>
              </el-button>
              <el-button class="mr-3" @click.stop="handleAddOption(diyForm[collapse.prop], collapse.formBase())">{{ $t('addOption') }}</el-button>
            </div>
          </div>
        </template>
        <div class="p-3 ml-4">
          <template v-for="form, findex in diyForm[collapse.prop]" :key="findex">
            <BaseForm v-if="currentOptionId === 'all' || currentOptionId === form.option.id"
              v-model="diyForm[collapse.prop][findex]" :formLabels="labels[collapse.labelsName]"
              @remove="handleRemove(diyForm[collapse.prop], findex)" />
          </template>
          <template
            v-if="currentOptionId !== 'all' && diyForm[collapse.prop].filter(v => currentOptionId === v.option.id).length === 0">
            <template v-for="form, findex in diyForm[collapse.prop]" :key="findex">
              <BaseForm v-if="form.option.id === 'default'" v-model="diyForm[collapse.prop][findex]"
                :formLabels="labels[collapse.labelsName]" @remove="handleRemove(diyForm[collapse.prop], findex)" />
            </template>
          </template>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script setup>
import { CirclePlusFilled } from "@element-plus/icons-vue";
import BaseForm from "../components/BaseForm.vue";
import HeadComponent from '../components/HeadComponent.vue';
import HeaderBar from "../components/HeaderBar.vue";
import { diyForm } from "../utils/useForm.js";
import { onMounted, reactive } from "vue";
import { ref } from "vue"
import { Base64 } from "js-base64"
import { copy2Clipboard, randomColorHex, singlePrice } from '../utils/utils.js'
import { useRoute } from "vue-router";
import { v4 } from "uuid"
import useCollapses from "../utils/useCollapses.js";
import useFormLabels from "../utils/useFormLabels.js";

const labels = useFormLabels()
const collapses = useCollapses()
const currentOptionId = ref('all')
const route = useRoute()
const handleAddOption = (forms, form) => {
  const optionId = v4()
  const optionColor = randomColorHex()
  diyForm.options.push(reactive({
    id: optionId,
    color: optionColor,
    name: optionId
  }))
  forms.push(reactive({ ...form, option: { id: optionId, color: optionColor } }))
}
const handleAddForm = (forms, form) => {
  const optionId = currentOptionId.value === 'all' ? 'default' : currentOptionId.value
  const color = diyForm.options.find(v => v.id === optionId).color
  forms.push(reactive({ ...form, option: { id: optionId, color: color } }));
};
const handleRemove = (forms, index) => {
  const removedOptionId = forms[index].option.id
  forms.splice(index, 1);
  if (removedOptionId !== 'default') {
    let options = 0
    for (const key in diyForm) {
      for (const form in diyForm[key]) {
        if (form.option.id === removedOptionId) {
          options++
        }
      }
    }
    if (options === 0) {
      diyForm.options = diyForm.options.filter(v => v.id !== removedOptionId)
    }
  }
};

const handleCollapseChange = (activeNames) => {
  for (let i = 0; i < collapses.length; i++) {
    if (activeNames.indexOf(collapses[i].prop) !== -1) {
      collapses[i].isCollapse = false
    } else {
      collapses[i].isCollapse = true
    }
  }
}
const handleShare = () => {
  const b64 = Base64.encodeURL(JSON.stringify(diyForm, null, 0))
  const baseUrl = window.location.href
  const shareUrl = `${baseUrl}?catalog=${b64}`
  setTimeout(async () => {
    await copy2Clipboard(shareUrl)
  }, 100);
}
const extractShareData = () => {
  const b64 = route.query.catalog || null
  if (!b64) return
  const decoded = Base64.decode(b64)
  const data = JSON.parse(decoded)
  Object.assign(diyForm, data)
}
onMounted(() => {
  extractShareData()
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
