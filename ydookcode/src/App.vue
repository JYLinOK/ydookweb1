<template>
  <div id="app">
    <big-box></big-box>
  </div>
</template>

<script>
import BigBox from './components/BigBox.vue'

export default {
  name: 'App',
  components: {
    BigBox
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  overflow: hidden;
}
body::-webkit-scrollbar {
  /* background: rgb(64, 255, 0); */
  display: none;
}
#app {
}
</style>
