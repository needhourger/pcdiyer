<template>
  <div class="w-full h-10 py-3 px-10 flex items-center justify-between">
    <div>
      <el-tooltip effect="dark" content="github">
        <el-button size="large" class="w-8" text @click="redirect2Github">
          <el-icon size="large">
            <img src="@/assets/images/github.svg">
          </el-icon>
        </el-button>
      </el-tooltip>
    </div>
    <div>
      <el-tooltip effect="dark" :content="$t('save2Image')">
        <el-button size="large" class="w-8" text @click="save2Image">
          <el-icon color="#FFF">
            <PictureRounded />
          </el-icon>
        </el-button>
      </el-tooltip>
      <el-tooltip effect="dark" :content="$t('share')">
        <el-button @click="handleShare" size="large" class="w-8" text>
          <el-icon color="#fff">
            <Share />
          </el-icon>
        </el-button>
      </el-tooltip>
      <el-popover :width="200" placement="bottom-start" :title="$t('language')" trigger="hover">
        <template #reference>
          <el-button size="large" text class=" w-9">
            <el-icon>
              <img src="@/assets/images/global.svg">
            </el-icon>
          </el-button>
        </template>
        <div class="flex flex-col items-center justify-center">
          <el-button v-for="lang, index in languages" :key="index" @click="handleChangeLang(lang)"
            class="w-full mx-2 my-1">{{ lang }}</el-button>
        </div>
      </el-popover>
    </div>
  </div>
  <ImageTemplate :show="imageTemplateShow" />
</template>
<script setup>
import { computed, nextTick, ref } from 'vue';
import i18nGlobal from '../i18n';
import { useI18n } from 'vue-i18n';
import { Share, PictureRounded } from '@element-plus/icons-vue'
import { diyForm } from '../utils/useForm';
import { copy2Clipboard, createDownload } from '../utils/utils';
import { Base64 } from "js-base64"
import html2canvas from 'html2canvas';
import ImageTemplate from './ImageTemplate.vue';

const imageTemplateShow = ref(false)
const { locale } = useI18n()
const languages = computed(() => {
  return i18nGlobal.global.availableLocales
})
const handleChangeLang = (lang) => {
  locale.value = lang
  localStorage.setItem('language', lang)
  window.location.reload()
}
const handleShare = () => {
  const b64 = Base64.encodeURL(JSON.stringify(diyForm, null, 0))
  const baseUrl = window.location.href
  const shareUrl = `${baseUrl}?catalog=${b64}`
  setTimeout(async () => {
    await copy2Clipboard(shareUrl)
  }, 100);
}

const save2Image = () => {
  imageTemplateShow.value = true
  nextTick(() => {
    const element = document.getElementById("imagePreview")
    html2canvas(element).then(canvas => {
      const imageURL = canvas.toDataURL('image/png')
      const downloadTime = new Date()
      const imageName = `pcdiyer-${downloadTime.toUTCString()}.png`
      createDownload(imageURL, imageName)
    }).finally(() => {
      setTimeout(() => {
        imageTemplateShow.value = false
      }, 1500);
    })
  })
}

const redirect2Github = () => {
  window.open('https://github.com/needhourger/pcdiyer','_blank')
}
</script>
<style lang="less" scoped></style>