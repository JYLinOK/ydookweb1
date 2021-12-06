<template>
  <div class="OpenSource">
    <div class="textContent">
      <h3>JY Lin 开源软件及代码 &nbsp;&nbsp; Open Sources of JY Lin</h3>
      <hr />
      <br />
      <h2 class="HTitle">为什么要开源？</h2>
      <hr />
      <p>
        对于不同的软硬件作品，通常开源者基于不同的目的与需要进行开源。<br />
        所以，个人开源的个人原因不尽相同，但是，不同的开源的共同原因与目的是大致相同的。<br />
        一般来说，开源是一种贡献精神于分享智慧精神的体现，是软件界最值得尊敬的行为之一。<br />
      </p>
      <br/>
      <br/>
      <h2 class="HTitle">进一步了解开源</h2>
      <hr />
      <p>
        当作者将作品的源代码公开后，该软件或者框架就是开源了。<br />
        不同的开源作品遵循着不同的开源协议，使用者或者参考着再借鉴开源代码前，需要理解与阅读相关协议。<br />
      </p>
      <br />
      <br />
      <h2 class="HTitle">开源就是免费吗？</h2>
      <hr />
      <p>
        开源不等于免费，免费不等于开源。也就是说，某代码开源了，相关软件仍然有机会可以商用。商用的软件的源代码，也可以开源。<br />
      </p>
      <br />
      <br />
      <h2 class="HTitle">应该怎样对待开源</h2>
      <hr />
      <p>
        开源软件或框架及其初代开发者，以及后来加入的贡献开发者，都值得我们的尊敬。<br />
        开源，更加注重的是知识分享，注重的是软件的设计思路与方法的分享，而不是公开的免费套用代码。<br />
        开源软件或者框架，也需要接受开源协议的限制。不能滥用或者不按照不尊重开源着的意愿使用开源代码。<br />
      </p>
      <br />
      <br />
      <h2 class="HTitle">JY Lin 开源的原因</h2>
      <hr />
      <p>
        主要用以分享难以个人继续维护的却富有意义的软件与框架。<br />
        次要原因在于用作个人软件编程能力的展示与发展之路的认证。<br />
      </p>
      <br />
      <br />
      <h2 class="HTitle">哪里可以找到 JY Lin 开源软件的源代码并下载？</h2>
      <hr />
      <p>
        可以通过 JY Lin 的 GitHub 主页访问下载：<br />
        <br />
        <a class="ABtn" href="https://github.com/JYLinOK" target="_blank">https://github.com/JYLinOK</a>
      </p>
      <br />
      <br />
      <br />
      <br />
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
  name: 'OpenSource',
  components: {},
  data () {
    return {}
  },

  methods: {}
})
</script>

<style scoped lang="scss">
$CentPicMovTime: 2s;
.HTitle {
  color: white;
}

.OpenSource {
  width: 100%;
  height: 100%;
  background: url('../../../public/PhotoO2/OpenSource.jpg') repeat-x;
  background-size: 100% 100%;
}
.textContent {
  text-align: left;
  width: auto;
  height: 100%;
  // background: rgba(26, 105, 2, 0.3);
  color: rgb(0, 255, 213);
  // color: rgb(255, 255, 255);
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
}
.ABtn:active {
  background: rgb(0, 255, 166);
  color: black;
}
</style>
