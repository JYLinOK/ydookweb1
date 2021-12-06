<template>
  <div class="introduction">
    <div class="textContent">
      Introduction<br />
      <h1>简介</h1>
      <p>
        YDOOK 是 www.ydook.com 与 www.ydook.cn 的网站简称。 同时也是 JY Lin
        先生的系列系统平台与其参与的第三方拓展平台的统称。
      </p>
      <p>
        1. 2019年01月，www.ydook.com 与 www.ydook.cn 这两个域名被 JY Lin
        注册。注册为国际顶级域名。
      </p>
      <p>
        2. 2019年03月，www.ydook.com 网站上线，采用纯 HTML5 + CSS3 + Javascript
        编程。
      </p>
      <p>
        3. 2019年05月，YDOOK 系列的电脑版导航网站 dh.ydook.com 与手机版导航网站
        mdh.ydook.com 双双上线，采用 HTML5 + CSS3 + Javascript + Golang 编程。
        同时搭载 JY Lin 自主研发的数据库软件 YDB 与 JY Lin 自主研发的服务器软件
        YWeb。YDB 与 YWeb 皆是纯采用 Golang 编程。Golang
        编程Web技术为当时与现在热门技术。 YWeb 框架已经在 GitHub 与
        中国开源两知名开源网站开源。
      </p>
      <p>
        4. 2019年06月，YDOOK 系列的电脑版搜索网站 so.ydook.com
        的前端设计初步完成，JY Lin 开始 AI搜索引擎的研发。
      </p>
      <p>
        5. 2020年12月，经过超19个月的线上云实际测试，YDOOK 系列的电脑版导航网站
        dh.ydook.com 与手机版导航网站 mdh.ydook.com, 以及其搭载的YDB 与 YWeb
        框架正式退役，值得注意的是，在整个实际测试与使用的过程过，它们都没有出现过一次Bug。这充分证明了上述网站与软件框架的稳定性。
      </p>
      <p>
        6. 2020年01月，YDOOK 系列主网站 www.ydook.com
        暂停运行，进行全新改写。采用 vue + python 后台技术，搭建全新超智能
        AI网站。
      </p>
      <p>
        7. 2020年02月，更新后的初版 YDOOK 系列主网站 www.ydook.com
        正式上线运行。
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Introduction',
  components: {},
  data () {
    return {}
  }
})
</script>

<style scoped lang="scss">
.introduction {
  width: 100%;
  height: 100%;
  background: url('../../../public/PhotoY/introduction.jpg') repeat-x;
  background-size: 100% 100%;
}
.textContent {
  text-align: left;
  // width: 99%;
  width: auto;
  height: 100%;
  background: rgba(22, 170, 163, 0.479);
  color: white;
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
</style>
