<script setup>
</script>

<template>
  <div class="h-screen bg-gradient-to-b from-black via-purple-950 to-pink-400 backdrop-filter backdrop-blur-lg">
    <div class="w-full text-center p-8">
      <span class="text-9xl font-bold text-center jersey-10-regular">PC-DIYer</span>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jersey+10&display=swap');

.jersey-10-regular {
  font-family: "Jersey 10", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
