<template>
  <div class="MessageWarn">
    <div class="MessageWarnCont">{{ messageEr }}</div>
    <div class="MessageWarnOK" v-on:click="MessageWarnOKFun">OK</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MessageWarn',
  data () {
    return {}
  },
  props: {
    messageEr: String,
    toPath: String
  },
  methods: {
    MessageWarnOKFun () {
      this.$router.push({ name: this.toPath })
      console.log('MessageWarnOKFun = ', this.messageEr)
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.MessageWarn {
  position: fixed;
  margin: auto;
  width: 100%;
  height: 100%;
  background: rgba(250, 100, 0, 0.5);
}

.MessageWarnCont {
  text-align: center;
  margin: auto;
  margin-top: 18%;
  width: 300px;
  height: 100px;
  background: rgb(250, 36, 0);
  border-radius: 10px;
  color: white;
  line-height: 100px;
  border: 2px solid;
}

.MessageWarnOK {
  text-align: center;
  margin: auto;
  margin-top: 10px;
  width: 60px;
  height: 30px;
  background: rgb(250, 36, 0);
  border-radius: 10px;
  color: white;
  line-height: 30px;
  border: 2px solid;
  user-select: none;
  cursor: pointer;
}
.MessageWarnOK:hover {
  background: rgb(60, 255, 0);
  color: black;
}
</style>
