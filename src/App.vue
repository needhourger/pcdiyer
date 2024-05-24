<template>
  <div class="min-h-screen bg-gradient-to-b from-black via-purple-950 to-pink-400 backdrop-filter backdrop-blur-lg">
    <Starfield/>
    <router-view></router-view>
  </div>
</template>
<script setup>
import Starfield from './components/Starfield.vue';

</script>

<style>
</style>
