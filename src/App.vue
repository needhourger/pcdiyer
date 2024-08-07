<template>
  <div class="min-h-screen bg-gradient-to-b from-black via-purple-950 to-pink-400 backdrop-filter backdrop-blur-lg">
    <Starfield />
    <transition name="el-fade-in-linear">
      <router-view v-slot="{ Component }" :max="10">
        <keep-alive>
          <component :is="Component" v-if="$route.meta.keepAlive"></component>
        </keep-alive>
        <component :is="Component" v-if="!$route.meta.keepAlive"></component>
      </router-view>
    </transition>
  </div>
</template>
<script setup>
import Starfield from './components/Starfield.vue';
</script>
<style></style>
