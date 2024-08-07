<template>
  <div class="w-full h-10 py-3 px-10 flex items-center justify-end">
    <el-tooltip effect="dark" :content="$t('share')">
      <el-button type="primary" @click="handleShare" size="large" class="flex items-center w-8" text>
        <el-icon color="#fff"><Share/></el-icon>
      </el-button>
    </el-tooltip>
    <el-popover :width="200"
      placement="bottom-start" :title="$t('language')" trigger="hover">
      <template #reference>
        <el-button size="large" text class=" w-9">
          <el-icon>
            <img src="@/assets/images/global.svg">
          </el-icon>
        </el-button>
      </template>
      <div class="flex flex-col items-center justify-center">
        <el-button v-for="lang,index in languages" :key="index"
          @click="handleChangeLang(lang)"
          class="w-full mx-2 my-1">{{ lang }}</el-button>
      </div>
    </el-popover>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import i18nGlobal from '../i18n';
import { useI18n } from 'vue-i18n';
import { Share } from '@element-plus/icons-vue'
import { diyForm } from '../utils/useForm';
import { copy2Clipboard } from '../utils/utils';
import { Base64 } from "js-base64"

const { locale } = useI18n()
const languages = computed(() => {
  return i18nGlobal.global.availableLocales
})
const handleChangeLang = (lang) => {
  locale.value = lang
  localStorage.setItem('language',lang)
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
</script>

<style lang="less" scoped>

</style>