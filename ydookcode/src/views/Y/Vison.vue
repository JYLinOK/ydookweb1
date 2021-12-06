<template>
  <div class="vison">
    <div class="textContent">
      Vison<br />
      <h1>愿景</h1>
      <p>
        YDOOK 的中文译名为：<b>维度</b>。
      </p>
      <p>YDOOK 的核心愿景是：让AI技术更具价值！</p>
      <p>YDOOK 广义愿景是：可以通过IT硬软件技术使得世界变得美好！</p>
      <hr/>
      <br/>
      <b>YDOOK 维度诗意诠释：</b>
      <p>
        维度万物，互联你我。<br/>
        技术小步，发展大步。<br/>
        人工智能，真智能化。<br/>
      </p>
      <br>
      <br>
      <em>技术犹如鲜花一般，需要在恰当与需要的时候，绽放光彩。</em>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Vison',
  components: {},
  data () {
    return {}
  }
})
</script>

<style scoped lang="scss">
.vison {
  width: 100%;
  height: 100%;
  background: url('../../../public/PhotoY/vison.jpg') repeat-x;
  background-size: 100% 100%;
}
.textContent {
  text-align: left;
  // width: 99%;
  width: auto;
  height: 100%;
  background: rgba(255, 0, 170, 0.339);
  color: white;
  padding: 10px;
  overflow-y: scroll;
}
.textContent::-webkit-scrollbar {
  background: rgba(37, 58, 30, 0.226);
}
.textContent::-webkit-scrollbar-thumb {
  background: rgba(0, 255, 221, 0.8);
  border-radius: 10px;
}
</style>
