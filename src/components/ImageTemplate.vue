<template>
  <transition name="el-fade-in-linear">
    <div v-show="show" id="imagePreview"
      class="fixed z-10 left-0 right-0 top-0 h-screen w-screen p-10 bg-gradient-to-b from-black via-purple-950 to-pink-400 backdrop-filter backdrop-blur-lg">
      <div class="flex items-center justify-end">
        <el-button @click="handleSave">{{ $t('save') }}</el-button>
      </div>
      <div class="flex items-center justify-between">
        <div class="text-8xl font-bold">PC-DIYer</div>
        <div class="">
          <span>{{ $t('generatedTime') }} :</span>
          <span class="text-2xl ml-1 font-bold">{{ getCurrentLocalTimeString() }}</span>
        </div>
      </div>
      <a class="text-3xl font-bold" style="margin-block: 1rem;" href="">https://pcdiyer.yuukisama.cc/</a>
      <table class="w-full conf-table">
        <thead v-if="currentForm" :data="data" border size="large" stripe style="width: 100%;">
          <th prop="label" width="200">{{ $t('component') }}</th>
          <th prop="model">{{ $t('configuration') }}</th>
          <th prop="price" width="150">{{ $t('price') }}</th>
          <th prop="remark" width="400">{{ $t('remark') }}</th>
        </thead>
        <tbody>
          <tr v-for="row, rindex in data" :key="rindex">
            <td>{{ row['label'] }}</td>
            <td>{{ row['model'] }}</td>
            <td>{{ row['price'] }}</td>
            <td>{{ row['remark'] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </transition>
</template>
<script setup>
import { currentForm } from '../utils/useForm';
import useCollapses from '../utils/useCollapses';
import { computed } from 'vue';
import { getCurrentLocalTimeString } from '../utils/utils';
import html2canvas from 'html2canvas';
import { createDownload } from '../utils/utils';

const show = defineModel('show', {
  type: Boolean,
  default: false
})
const formLayout = useCollapses()
const getComponentLabel = (props) => {
  const item = formLayout.find(item => item.prop === props)
  if (item) {
    return item.label
  }
  return ""
}
const data = computed(() => {
  if (currentForm) {
    const ret = []
    for (const key in currentForm.value) {
      ret.push({ ...currentForm.value[key], label: getComponentLabel(key) })
    }
    return ret
  }
  return []
})
const handleSave = () => {
  const imagePreview = document.getElementById('imagePreview')
  html2canvas(imagePreview, {
    scale: 2
  }).then(canvas => {
    const base64Image = canvas.toDataURL('image/png')
    createDownload(base64Image, `PC-DIYer-${getCurrentLocalTimeString()}.png`)
  }).finally(() => {
    show.value = false
  })
}
</script>
<style lang="less" scoped>
.conf-table {
  font-size: 1.8rem;
  border: 2px solid #fff;
  margin-top: 1rem;

  th {
    border: 2px solid #fff;
    font-weight: normal;
  }

  tr {
    border: 1px solid #fff;
  }

  td {
    padding: 3px 10px;
    border: 1px solid #fffa;
    font-weight: bold;
  }
}
</style>