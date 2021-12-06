<template>
  <div class="YecPad">
    <div class="textContent">
      <b><h1>YecPad</h1></b>
      <b>Open Software of JY Lin</b>
      <hr />
      <br />
      <p>软件名称：YecPad</p>
      <p>中文名称：雅客板</p>
      <p>编程语言：C Sharp</p>
      <p>
        开源协议：<b>GNU Affero General Public License v3.0</b> <br />
        Permissions of this strongest
        copyleft license are conditioned on making available complete source
        code of licensed works and modifications, which include larger works
        using a licensed work, under the same license. Copyright and license
        notices must be preserved. Contributors provide an express grant of
        patent rights. When a modified version is used to provide a service over
        a network, the complete source code of the modified version must be made
        available.
      </p>
      <p>GitHub 开源时间：2019年</p>
      <p>
        概述：<br />
        1. 一个基于 C# 编程开发的 TXT 记事本文本编辑器。<br />
        2. 有了 YecPad, 您可以可以轻松编辑 .txt 文本。<br />
        3. YecPad 具有强大的 TXT 文件编辑与阅读功能。<br />
        4. YecPad 具有 TXT 文件打开、编辑、保存与另存为功能。<br />
        5. YecPad 可以进行 .txt 文件中的个别文字字体样式的修改，比如大小，布局对齐还有颜色以及字体类别。<br />
      </p>
      <br />
      <br />
      <hr />
      <b>GitHub 下载链接：</b>
      <br />
      <br />
      <a class="ABtn" href="https://github.com/JYLinOK/YecPad" target="_blank"
        >https://github.com/JYLinOK/YecPad</a
      >
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

.YecPad {
  width: 100%;
  height: 100%;
  background: url('../../../../public/PhotoO2/Softwares/YecPad.jpg') repeat-x;
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
