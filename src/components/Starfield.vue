<template>
  <div class="absolute left-0 top-0 right-0 -z-10" style="width: 100%; height: 600px;">
    <canvas id="canvas" class="w-full h-full" />
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
const totalStars = 200

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min ;
}

const createStars = () => {
  const stars = []
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  const w = canvas.width
  const h = canvas.height

  const canvas2 = document.createElement('canvas'),
  ctx2 = canvas2.getContext('2d')
  canvas2.width = 100;
  canvas2.height = 100;
  const half = canvas2.width / 2
  const gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half)
  gradient2.addColorStop(0.2, '#FF4')
  gradient2.addColorStop(0.3, '#FF2C')
  gradient2.addColorStop(0.45,'#FF35')
  gradient2.addColorStop(1, 'transparent')

  ctx2.fillStyle = gradient2
  ctx2.beginPath()
  ctx2.arc(half, half, half, 0, Math.PI * 2)
  ctx2.fill()

  const star = function () {
    this.radius = random(15, 45) / 12;
    this.timePassed = random(0, totalStars)
    this.alpha = random(2, 10) / 10;
    this.x = random(0,w)
    this.y = random(0,h)
    stars.push(this)
  }
  star.prototype.draw = function () {
    const twinkle = random(0,10)

    if (twinkle === 1 && this.alpha > 0) {
      this.alpha -= 0.05;
    } else if (twinkle === 2 && this.alpha < 1) {
      this.alpha += 0.05
    }
    ctx.globalAlpha = this.alpha;
    ctx.drawImage(canvas2, this.x, this.y, this.radius, this.radius)
  }

  for (let i = 0; i < totalStars; i++) {
    new star()
  }

  function animation() {
    ctx.clearRect(0,0,w,h)
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 0.8
    ctx.fillStyle = 'transparent'
    ctx.fillRect(0,0,w,h)
    ctx.globalCompositeOperation = 'lighter';
    for (let i = 0; i < stars.length; i++) {
      stars[i].draw()
    }
    window.requestAnimationFrame(animation)
  }
  animation()
}

onMounted(() => {
  createStars()
})
</script>
<style lang="less" scoped></style>
