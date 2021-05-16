<template>
  <video autoplay loop class="camera-video">
      <source :src='require("@/assets/video/camera.mp4")' type='video/mp4'>
  </video>
</template>

<style>
.camera-video {
  height: 150px;
  width: auto;
}
</style>
