<template>
  <div class="YWeb">
    <div class="textContent">
      <b><h1>YWeb</h1></b>
      <b>Open Software of JY Lin</b>
      <hr />
      <br />
      <p>软件名称：YWeb</p>
      <p>中文名称：威网</p>
      <p>编程语言：Golang</p>
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
        1. 一个基于 Golang 编程开发的高并发稳定静态服务器软件。<br />
        2. YWeb 完全采用 Golang 原生库设计编程，不含任何第三方库或插件和控件。<br />
        3. YWeb 能够通过自动扫描服务器目录中的静态文件，并自动建立链接实现 HTML 模板展示功能。<br />
        4. YWeb 能够与 JY Lin 另一力作：YDB (完全基于 Golang 编程开发的高并发数据库软件) 完美衔接使用。<br />
        5. YWeb 还具有硬件级密码防盗防破解功能，为您的网站与应用服务器保驾护航。任何非本机迁移都会导致软件启动自毁程序。<br />
        6. YWeb 在 JY Lin 于2019年开发的分类门户导航网站 mdh.ydook.com 与 dh.ydook.com 上应用，强健而稳定地运行超 13800 个小时，保持自启动到停用不间断使用的过程中的零Bug与零错误的记录。<br />
        7. 上述提到的两导航网站 mdh.ydook.com 与 dh.ydook.com 因为 YDOOK 系列网站 2020年布局改变，以零Bug与零错误光荣退役。<br />
      </p>
      <br />
      <br />
      <hr />
      <b>GitHub 下载链接：</b>
      <br />
      <br />
      <a class="ABtn" href="https://github.com/JYLinOK/YWeb" target="_blank"
        >https://github.com/JYLinOK/YWeb</a
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
  name: 'YWeb',
  components: {},
  data () {
    return {}
  },

  methods: {}
})
</script>

<style scoped lang="scss">
$CentPicMovTime: 2s;

.YWeb {
  width: 100%;
  height: 100%;
  background: url('../../../../public/PhotoO2/Softwares/YWeb.jpg') repeat-x;
  background-size: 100% 100%;
}
.textContent {
  text-align: left;
  width: auto;
  height: 100%;
  background: rgba(4, 2, 105, 0.3);
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
