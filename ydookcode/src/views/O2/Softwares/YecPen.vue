<template>
  <div class="YecPen">
    <div class="textContent">
      <b><h1>YecPen</h1></b>
      <b>Open Software of JY Lin</b>
      <hr />
      <br />
      <p>软件名称：YecPen</p>
      <p>中文名称：雅客笔</p>
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
        1. 一个基于 C# 编程开发的桌面PC彩色画板绘图软件。<br />
        2. 有了 YecPen, 您可以用多种颜色与宽范围粗细的彩色笔随意涂鸦。<br />
        3. 有了 YecPen, 您可以轻松地将涂鸦后的大作保存在本地。<br />
        4. YecPen 还具有正弦函数动态展示与实时函数参数调节与效果播放功能。可以用于三角函数教学。<br />
      </p>
      <br />
      <br />
      <hr />
      <b>GitHub 下载链接：</b>
      <br />
      <br />
      <a class="ABtn" href="https://github.com/JYLinOK/YecPen" target="_blank"
        >https://github.com/JYLinOK/YecPen</a
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
  name: 'YecPen',
  components: {},
  data () {
    return {}
  },

  methods: {}
})
</script>

<style scoped lang="scss">
$CentPicMovTime: 2s;

.YecPen {
  width: 100%;
  height: 100%;
  background: url('../../../../public/PhotoO2/Softwares/YecPen.jpg') repeat-x;
  background-size: 100% 100%;
}
.textContent {
  text-align: left;
  width: auto;
  height: 100%;
  // background: rgba(26, 105, 2, 0.3);
  color: white;
  // color: rgb(0, 255, 213);
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
