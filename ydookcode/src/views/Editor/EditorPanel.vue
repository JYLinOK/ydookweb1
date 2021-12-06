<template>
  <div class="EditorPanel">
    <e-big-content></e-big-content>
    <e-big-bottom-bar></e-big-bottom-bar>
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EBigBottomBar from './BasicComponents/EBigBottomBar.vue'
import EBigContent from './BasicComponents/EBigContent.vue'

export default defineComponent({
  name: 'EditorPanel',
  components: { EBigContent, EBigBottomBar },
  data () {
    return {
      a: 123
    }
  },
  mounted () {
    this.$emit('isSeenL2', false)
    this.$emit('isSeenBox2', false)
  },
  methods: {}
})
</script>

<style scoped lang="scss">
.EditorPanel {
  width: 100vw;
  height: 100vh;
  // background: black;
  background-size: 100% 100%;
  color: black;
}
</style>
