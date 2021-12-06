<template>
  <div class="YecText">
    <div class="textContent">
      <b><h1>YecText</h1></b>
      <b>Open Software of JY Lin</b>
      <hr />
      <br />
      <p>软件名称：YecText</p>
      <p>中文名称：雅客文</p>
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
        1. 一个基于 C# 编程开发的TXT文字阅读软件。<br />
        2. 该软件可以看作是 Window平台中的文字小说阅读器。<br />
        3. 有了 YecText, 您可以设置多种不同颜色的阅读字体。<br />
        3. 有了 YecText, 您可以设置多种不同大小与格式的阅读字体。<br />
        3. 有了 YecText, 您可以设置自动文字滚动阅读。<br />
      </p>
      <br />
      <br />
      <hr />
      <b>GitHub 下载链接：</b>
      <br />
      <br />
      <a class="ABtn" href="https://github.com/JYLinOK/YecText" target="_blank"
        >https://github.com/JYLinOK/YecText</a
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
  name: 'YecText',
  components: {},
  data () {
    return {}
  },

  methods: {}
})
</script>

<style scoped lang="scss">
$CentPicMovTime: 2s;

.YecText {
  width: 100%;
  height: 100%;
  background: url('../../../../public/PhotoO2/Softwares/YecText.jpg') repeat-x;
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
