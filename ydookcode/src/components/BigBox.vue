<template>
  <div class="BigBox">
    <left-box></left-box>
    <right-box></right-box>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LeftBox from './components/LeftBox.vue'

export default defineComponent({
  name: 'BigBox',
  components: { LeftBox },
  props: {
    msg: String
  },
  data () {
    return {
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.BigBox {
  width: 100vw;
  height: 100vh;
  // background: rgb(0, 181, 194);
  overflow: hidden;
  // text-align: center;
}

.LeftBox {
  float: left;
  width: auto;
  height: 100%;
  background: rgb(124, 194, 109);
}

.IconLeft {
  float: left;
  width: 50px;
  height: 100%;
  background: red;
  padding: 0;
  margin: 0;
}

.ContentLeft {
  float: left;
  width: 360px;
  height: 100%;
  background: rgb(231, 202, 123);
  padding: 0;
  margin: 0;
  overflow-y: scroll;
}
</style>
