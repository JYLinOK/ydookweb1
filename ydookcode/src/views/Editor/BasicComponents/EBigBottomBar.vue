<template>
  <div class="EBigBottomBar">
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EBigBottomBar',
  components: {},
  data () {
    return {}
  },
  setup () {
    // onUnmounted(() => {
    // console.log('Editor onUnmounted!')
    // this.$emit('isCLoseL2', false)
    // })
  },
  methods: {}
})
</script>

<style scoped lang="scss">
.EBigBottomBar {
  width: 100%;
  height: 20px;
  bottom: 0px;
  background: rgba(255, 213, 136, 0.6);
  background-size: 100% 100%;
}
</style>
