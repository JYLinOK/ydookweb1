<template>
  <div class="author">
    <div class="textContent">
      Author<br />
      <h1>作者 JY Lin</h1>
      <!-- <router-link  to="/Editor">
        <div class="PersonPic"></div>
      </router-link> -->
      <div class="PersonPic" v-on:dblclick.stop="ToEditor"></div>
      <p>
        JY Lin 的中文名为：<b>林进威</b>。
      </p>
      <p><b>本科学校</b>：上海市华东师范大学</p>
      <p><b>本科专业</b>：电子科学与技术</p>
      <p><b>目前工作</b>：南方科技大学 实验室科学助理 负责软硬件开发</p>
      <p><b>兴趣爱好</b>：创新设计，发明创造，挑战新技术，设计制作高新科技。</p>
      <br />
      <hr />
      <br />
      <h3>YDOOK 第三方拓展平台：</h3>
      <p>
        <b>GiHub: JYLinOK</b>：<a
          href="https://github.com/JYLinOK"
          target="_blank"
          class="aLink"
          >https://github.com/JYLinOK</a
        >
      </p>
      <p>
        <b>CSDN 博客: YDOOK</b>：<a
          href="https://ydook.blog.csdn.net"
          target="_blank"
          class="aLink"
          >https://ydook.blog.csdn.net</a
        >
      </p>
      <p>
        <b>ORCID: JY Lin: 0000-0003-0558-6699</b>：<a
          href="https://orcid.org/0000-0003-0558-6699"
          target="_blank"
          class="aLink"
          >https://orcid.org/0000-0003-0558-6699</a
        >
      </p>
      <p>
        <b>博客园: YDOOK</b>：<a
          href="https://www.cnblogs.com/ydook"
          target="_blank"
          class="aLink"
          >https://www.cnblogs.com/ydook</a
        >
      </p>
      <p>
        <b>知乎: YDOOK官方</b>：<a
          href="https://www.zhihu.com/people/ydook.com"
          target="_blank"
          class="aLink"
          >https://www.zhihu.com/people/ydook.com</a
        >
      </p>
      <p>
        <b>OSCHINA: YDOOKOS</b>：<a
          href="https://my.oschina.net/ydookos"
          target="_blank"
          class="aLink"
          >https://my.oschina.net/ydookos</a
        >
      </p>
      <p>
        <b>SegmentFault: YDOOK</b>：<a
          href="https://segmentfault.com/u/ydook"
          target="_blank"
          class="aLink"
          >https://segmentfault.com/u/ydook</a
        >
      </p>
      <br />
      <br />
      <em>技术犹如鲜花一般，需要在恰当与需要的时候，绽放光彩。</em>
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
  name: 'Author',
  components: {},
  data () {
    return {}
  },
  methods: {
    ToEditor () {
      this.$emit('isSeenBox2', 0)
      // this.$emit('isCLoseL2', false)
      this.$router.push({ name: 'Editor' })
    }
  }
})
</script>

<style scoped lang="scss">
.aLink {
  color: white;
  // text-decoration: none;
}
.aLink:hover {
  color: rgb(0, 255, 236);
}
.PersonPic {
  width: 150px;
  height: 200px;
  background: url('../../../public/PhotoY/JY.png') no-repeat;
  background-size: 100% 100%;
  animation: authorMov 2s;
}
@keyframes authorMov {
  0% {
    transform: skew(0, 0deg) scale(1);
  }
  25% {
    transform: skew(0, 90deg) scale(1);
  }
  50% {
  }
  75% {
  }
  100% {
    transform: skew(360deg) scale(1.05);
  }
}

.author {
  width: 100%;
  height: 100%;
  background: url('../../../public/PhotoY/author.jpg') repeat-x;
  background-size: 100% 100%;
}

.textContent {
  text-align: left;
  // width: 99%;
  width: auto;
  height: 100%;
  background: rgba(12, 95, 221, 0.5);
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
