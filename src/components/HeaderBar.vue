<template>
  <div class="w-full h-10 py-3 px-10 flex items-center justify-end">
    <el-popover :width="200"
      placement="bottom-start" :title="$t('language')" trigger="click">
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

const { locale } = useI18n()
const languages = computed(() => {
  return i18nGlobal.global.availableLocales
})
const handleChangeLang = (lang) => {
  locale.value = lang
  localStorage.setItem('language',lang)
  window.location.reload()
}
</script>

<style lang="less" scoped>

</style>