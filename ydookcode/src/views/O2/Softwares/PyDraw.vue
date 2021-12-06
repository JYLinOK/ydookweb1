<template>
  <div class="PyDraw">
    <div class="textContent">
      <b><h1>PyDraw</h1></b>
      <b>Open Software of JY Lin</b>
      <hr />
      <br />
      <p>软件名称：PyDraw</p>
      <p>中文名称：派桌</p>
      <p>编程语言：Python3</p>
      <p>
        开源协议：<b>Apache2.0</b> <br />
        A permissive license whose main conditions require preservation of
        copyright and license notices. Contributors provide an express grant of
        patent rights. Licensed works, modifications, and larger works may be
        distributed under different terms and without source code.
      </p>
      <p>GitHub 开源时间：2019年</p>
      <p>
        概述：<br />
        1. 一个基于 Pytohn 编程开发的 GUI 编程软件。<br />
        2. 有了PyDraw, 您可以所见即所得般实时通过拖拉空间进行 Python GUI 编程。<br />
        3. 有了PyDraw, 您可以快速生成您所需要的简单 Python GUI代码，然后直接复制使用即可。<br />
        4. PyDraw 基于 Python附带的官方代买GUI框架库 Tkinter 库编程，深度使用事件等功能需要您具有 Tkinter 框架相关知识。<br />
      </p>
      <br />
      <br />
      <hr />
      <b>GitHub 下载链接：</b>
      <br />
      <br />
      <a class="ABtn" href="https://github.com/JYLinOK/PyDraw" target="_blank">https://github.com/JYLinOK/PyDraw</a>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PyDraw',
  components: {},
  data () {
    return {}
  },

  methods: {}
})
</script>

<style scoped lang="scss">
$CentPicMovTime: 2s;

.PyDraw {
  width: 100%;
  height: 100%;
  background: url('../../../../public/PhotoO2/Softwares/PyDraw.jpg') repeat-x;
  background-size: 100% 100%;
}
.textContent {
  text-align: left;
  width: auto;
  height: 100%;
  // background: rgba(26, 105, 2, 0.3);
  // color: white;
  padding: 10px;
  overflow-y: scroll;
}
.textContent::-webkit-scrollbar {
  background: rgba(37, 58, 30, 0.316);
}
.textContent::-webkit-scrollbar-thumb {
  background: rgba(0, 255, 221, 0.8);
  border-radius: 10px;
}
// ================================================================

.ABtn {
  float: left;
  width: auto;
  height: 20px;
  // background: rgb(255, 38, 0);
  background: rgba(255, 38, 0, 0.6);
  padding: 6px;
  line-height: 20px;
  margin-right: 20px;
  cursor: pointer;
  text-decoration: none;
  color: white;
  margin-bottom: 20px;
}
.ABtn:hover {
  background: rgba(39, 168, 0, 0.6);
  text-decoration: underline;
}
.ABtn:active {
  background: rgb(0, 255, 166);
  color: black;
}
</style>
