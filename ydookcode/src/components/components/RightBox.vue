<template>
  <div class="RightBox" v-if="seenRightBox">
    <router-view
      @isSeenBox2="isSeenBox2Fun"
      @isSeenL2="isSeenL2Fun"
    ></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RightBox',
  props: {
    seenRightBox: Boolean
  },
  data () {
    return {
    }
  },
  methods: {
    // eslint-disable-next-line
    isSeenBox2Fun(item: any) {
      this.$emit('isSeenBox', item)
    },
    // eslint-disable-next-line
    isSeenL2Fun(item: any) {
      this.$emit('isSeenL1', item)
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.RightBox {
  width: 100vw;
  height: 100vh;
  // background: rgb(212, 111, 222);
  // background: rgb(129, 218, 221);
  text-align: center;
  animation: RightBoxMov 2s;
}
@keyframes RightBoxMov {
  from {
    width: 0vw;
  }
  to {
    width: 100vw;
  }
}
</style>
