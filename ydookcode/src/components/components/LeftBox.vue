<template>
  <div
    class="IconLeft"
    v-on:dblclick="closeLeftCont"
    v-on:click="closeLeftContOnly"
    v-if="seenLBox"
  >
    <div class="LBtn" v-on:click.stop="Yfun">Y</div>
    <div class="LBtn" v-on:click.stop="Dfun">D</div>
    <div class="LBtn" v-on:click.stop="Ofun">O</div>
    <div class="LBtn" v-on:click.stop="OOfun">O</div>
    <div class="LBtn" v-on:click.stop="Kfun">K</div>
    <div class="LBtnBottom" v-on:click.stop="AIfun">AI</div>
  </div>
  <!-- ======================================================================================= -->
  <!-- ======================================================================================= -->
  <div class="ContentLeft1" v-if="seenBox === 1" v-on:click="closeRightCont">
    <div class="ToolBar">
      <div class="BackBtn" v-on:click.stop="closeLefttCont">&lt;</div>
    </div>
    <div class="H1Title">Yes</div>
    <p>Yes, you can make it!</p>
    <hr />
    <div v-on:click.stop="Rbox">
      <router-link class="BigBtn" to="/">欢迎</router-link>
    </div>
    <div v-on:click.stop="Rbox">
      <router-link class="BigBtn" to="/Introduction">简介</router-link>
    </div>
    <div v-on:click.stop="Rbox">
      <router-link class="BigBtn" to="/Vison">愿景</router-link>
    </div>
    <div v-on:click.stop="Rbox">
      <router-link class="BigBtn" to="/Author">作者</router-link>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <h2>欢迎</h2>
    访问 YDOOK 系列网站。<br />
    <br />
    意境无限，创新不止。--JY Lin<br />
    <br />
    <br />
    <br />
  </div>
  <!-- ======================================================================================= -->
  <!-- ======================================================================================= -->

  <!-- ======================================================================================= -->
  <!-- ======================================================================================= -->
  <div class="ContentLeft2" v-if="seenBox === 2" v-on:click="closeRightCont">
    <div class="ToolBar">
      <div class="BackBtn" v-on:click.stop="closeLefttCont">&lt;</div>
    </div>
    <div class="H1Title">Do</div>
    <p>Do, what you want to do!</p>
    <hr />
    <div v-on:click.stop="Rbox">
      <router-link class="BigBtn" to="/Wisdom">醒世威语</router-link>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <h2>生活</h2>
    总是富有乐趣，同时也也充满挑战；<br />
    与挑战并存的，是同生于此的机会与机遇。<br />
    <br />
    <h2>JY Lin</h2>
    将生活中的感悟汇总成 《醒世威语》, 分享于读者。希望你我有所领悟与体会。<br />
    <br />
    <p>点击上面<b>[醒世威语]</b>进入对应模块。</p>
    <br />
    <br />
  </div>
  <!-- ======================================================================================= -->
  <!-- ======================================================================================= -->

  <!-- ======================================================================================= -->
  <!-- ======================================================================================= -->
  <div class="ContentLeft3" v-if="seenBox === 3" v-on:click="closeRightCont">
    <div class="ToolBar">
      <div class="BackBtn" v-on:click.stop="closeLefttCont">&lt;</div>
    </div>
    <div class="H1Title">On</div>
    <p>On, keep move on to the success!</p>
    <hr />
    <div v-on:click.stop="Rbox">
      <router-link class="BigBtn" to="/ExpandAcademic">学术网站</router-link>
    </div>
    <br />
    <br />
    <br />
    <br />
    <h2>分享</h2>
    分享乐趣，知识同传。<br />
    <br />
    <br />
    <h2>拓展</h2>
    拓展在于展示更多富有乐趣的第三方网站。<br />
    <br />
    <br />
    <br />
  </div>
  <!-- ======================================================================================= -->
  <!-- ======================================================================================= -->

  <!-- ======================================================================================= -->
  <!-- ======================================================================================= -->
  <div class="ContentLeft4" v-if="seenBox === 4" v-on:click="closeRightCont">
    <div class="ToolBar">
      <div class="BackBtn" v-on:click.stop="closeLefttCont">&lt;</div>
    </div>
    <div class="H1Title">Open</div>
    <p>Open, and share with you!</p>
    <hr />
    <div v-on:click.stop="Rbox">
      <router-link class="BigBtn" to="/OpenSource">JY Lin 开源语</router-link>
    </div>
    <br />
    <br />
    <br />
    <hr />
    <h3>JY Lin 开源软件及框架</h3>
    在这里，您可以下载所有的 JY Lin 开源软件：<br />
    <br />
    <hr />
    <div v-on:click.stop="Rbox">
      <router-link class="BigBtn" to="/PyDraw">PyDraw</router-link>
    </div>
    <br />
    <br />
    <br />
    一个基于 Python 编程开发的 GUI 编程软件。<br />
    <hr />
    <div v-on:click.stop="Rbox">
      <router-link class="BigBtn" to="/YecPad">YecPad</router-link>
    </div>
    <br />
    <br />
    <br />
    一个基于 C# 编程开发的TXT记事本文本编辑器。
    <hr />
    <div v-on:click.stop="Rbox">
      <router-link class="BigBtn" to="/YecText">YecText</router-link>
    </div>
    <br />
    <br />
    <br />
    一个基于 C# 编程开发的TXT文字阅读软件。
    <div v-on:click.stop="Rbox">
      <router-link class="BigBtn" to="/YecPen">YecPen</router-link>
    </div>
    <br />
    <br />
    <br />
    一个基于 C# 编程开发的绘图与sin函数展示软件。
    <hr />
    <div v-on:click.stop="Rbox">
      <router-link class="BigBtn" to="/YWeb">YWeb</router-link>
    </div>
    <br />
    <br />
    <br />
    一个基于 Golang 编程开发的稳定服务器软件。
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <hr />
    <h2>开源</h2>
    开源，是最真诚的分享之一。<br />
    <br />
    <br />
    <h2>GitHub</h2>
    JY Lin 开源软件、框架及代码优先在 GitHub 分享。<br />
    <br />
    <br />
    <br />
  </div>
  <!-- ======================================================================================= -->
  <!-- ======================================================================================= -->

  <!-- ======================================================================================= -->
  <!-- ======================================================================================= -->
  <div class="ContentLeft5" v-if="seenBox === 5" v-on:click="closeRightCont">
    <div class="ToolBar">
      <div class="BackBtn" v-on:click.stop="closeLefttCont">&lt;</div>
    </div>
    <div class="H1Title">Key</div>
    <p>Key, the key to success!</p>
    <hr />
    <br />
    <br />
    <p>本版块主要用于展示 JY Lin 先生的软硬件设计作品，包括：</p>
    <p>1. 软硬件电子设计作品；</p>
    <p>2. 纯软件编程设计作品。</p>
    <br />
    <br />
    <p>展示的软硬件编程设计作品以商用收费为主。</p>
    <br />
    <br />
    相关代码正在编程中，敬请期待！<br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
  <!-- ======================================================================================= -->
  <!-- ======================================================================================= -->

  <!-- ======================================================================================= -->
  <!-- ======================================================================================= -->
  <div class="ContentLeft6" v-if="seenBox === 6" v-on:click="closeRightCont">
    <div class="ToolBar">
      <div class="BackBtn" v-on:click.stop="closeLefttCont">&lt;</div>
    </div>
    <div class="H1Title">AI</div>
    <p>AI, artificial intelligence!</p>
    <hr />
    <br />
    <br />
    <p>本版块主要用于展示 JY Lin 先生两大AI力作：</p>
    <p>1. AI 搜索引擎；</p>
    <p>2. AI 对话机器人。</p>
    <br />
    <br />
    相关代码正在编程中，敬请期待！<br />
    <br />
    <br />
    <br />
    <br />
  </div>
  <!-- ======================================================================================= -->
  <!-- ======================================================================================= -->
  <right-box
    v-bind:seenRightBox="seenRightBox"
    @isSeenBox="isSeenBoxFun"
    @isSeenL1="isSeenL1Fun"
  ></right-box>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

import RightBox from './RightBox.vue'

export default defineComponent({
  name: 'LeftBox',
  components: {
    RightBox
  },
  data () {
    return {
      seenBox: 0,
      seenBoxSave: 0,
      seenRightBox: true,
      seenLBox: true
    }
  },
  setup () {
    // console.log('Vue3.0 Enter created! LeftBox!')
    onMounted(() => {
      // console.log('Vue3.0 Enter onMounted! LeftBox! in stup!')
    })
  },
  provide () {
    return {
      isSeenBox: this.seenLBox
    }
  },
  methods: {
    closeLefttCont () {
      this.seenBox = 0
      this.seenRightBox = true
    },
    closeLeftCont () {
      this.seenBox = 0
      this.seenRightBox = false
    },
    closeLeftContOnly () {
      if (this.seenBox !== 0) {
        this.seenBox = 0
      } else {
        this.seenBox = this.seenBoxSave
      }
    },
    closeRightCont () {
      this.seenRightBox = false
    },
    Yfun () {
      // `this` 指向该组件实例
      if (this.seenBox !== 1) {
        this.seenBox = 1
      } else {
        this.seenBox = 0
        if (this.seenRightBox === false) {
          this.seenRightBox = true
        }
      }
      this.seenBoxSave = this.seenBox
    },
    Dfun () {
      if (this.seenBox !== 2) {
        this.seenBox = 2
      } else {
        if (this.seenRightBox === false) {
          this.seenRightBox = true
        }
        this.seenBox = 0
      }
      this.seenBoxSave = this.seenBox
    },
    Ofun () {
      if (this.seenBox !== 3) {
        this.seenBox = 3
      } else {
        if (this.seenRightBox === false) {
          this.seenRightBox = true
        }
        this.seenBox = 0
      }
      this.seenBoxSave = this.seenBox
    },
    OOfun () {
      if (this.seenBox !== 4) {
        this.seenBox = 4
      } else {
        if (this.seenRightBox === false) {
          this.seenRightBox = true
        }
        this.seenBox = 0
      }
      this.seenBoxSave = this.seenBox
    },
    Kfun () {
      if (this.seenBox !== 5) {
        this.seenBox = 5
      } else {
        if (this.seenRightBox === false) {
          this.seenRightBox = true
        }
        this.seenBox = 0
      }
      this.seenBoxSave = this.seenBox
    },
    AIfun () {
      if (this.seenBox !== 6) {
        this.seenBox = 6
      } else {
        if (this.seenRightBox === false) {
          this.seenRightBox = true
        }
        this.seenBox = 0
      }
      this.seenBoxSave = this.seenBox
    },
    Rbox () {
      this.seenRightBox = true
      console.log(this.seenRightBox)
    },
    // eslint-disable-next-line
    isSeenBoxFun(item: any) {
      if (item === 0) {
        this.seenBox = 0
        // console.log('isSeenBoxFun this.seenBox = ', this.seenBox)
        // console.log('isSeenBoxFun item = ', item)
      }
    },
    // eslint-disable-next-line
    isSeenL1Fun(item: any) {
      if (item === false) {
        this.seenLBox = false
        // console.log('LeftBox isSeenL1 item = ', item)
      } else {
        this.seenLBox = true
        // console.log('LeftBox isSeenL1 item = ', item)
      }
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$ContentLeftMovTime: 0.6s;

.IconLeft {
  float: left;
  width: 36px;
  height: 100%;
  background: rgb(255, 60, 0);
  padding: 0;
  margin: 0;
  z-index: -1;
}

.ContentLeft1 {
  float: left;
  // width: 360px;
  width: 20%;
  height: 100%;
  background: rgb(231, 202, 123);
  padding: 0;
  margin: 0;
  padding-left: 10px;
  padding-right: 10px;
  animation: ContentLeftMov $ContentLeftMovTime;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
}
@keyframes ContentLeftMov {
  from {
    width: 0%;
  }
  to {
    width: 20%;
  }
}
.ContentLeft1::-webkit-scrollbar {
  display: none;
}
.ContentLeft2::-webkit-scrollbar {
  display: none;
}
.ContentLeft3::-webkit-scrollbar {
  display: none;
}
.ContentLeft4::-webkit-scrollbar {
  display: none;
}
.ContentLeft5::-webkit-scrollbar {
  display: none;
}
.ContentLeft6::-webkit-scrollbar {
  display: none;
}
.ContentLeft2 {
  float: left;
  width: 20%;
  height: 100%;
  background: rgb(231, 202, 123);
  padding: 0;
  margin: 0;
  padding-left: 10px;
  padding-right: 10px;
  animation: ContentLeftMov $ContentLeftMovTime;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
}

.ContentLeft3 {
  float: left;
  width: 20%;
  height: 100%;
  background: rgb(231, 202, 123);
  padding: 0;
  margin: 0;
  padding-left: 10px;
  padding-right: 10px;
  animation: ContentLeftMov $ContentLeftMovTime;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
}

.ContentLeft4 {
  float: left;
  width: 20%;
  height: 100%;
  background: rgb(231, 202, 123);
  padding: 0;
  margin: 0;
  padding-left: 10px;
  padding-right: 10px;
  animation: ContentLeftMov $ContentLeftMovTime;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
}
.ContentLeft5 {
  float: left;
  width: 20%;
  height: 100%;
  background: rgb(231, 202, 123);
  padding: 0;
  margin: 0;
  padding-left: 10px;
  padding-right: 10px;
  animation: ContentLeftMov $ContentLeftMovTime;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
}
.ContentLeft6 {
  float: left;
  width: 20%;
  height: 100%;
  background: rgb(231, 202, 123);
  padding: 0;
  margin: 0;
  padding-left: 10px;
  padding-right: 10px;
  animation: ContentLeftMov $ContentLeftMovTime;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
}

.LBtn {
  width: 100%;
  height: 36px;
  background: rgb(34, 192, 139);
  margin-top: 10px;
  text-align: center;
  font-size: 26px;
  line-height: 36px;
  font-weight: bolder;
  cursor: pointer;
  user-select: none;
}
.LBtnBottom {
  position: fixed;
  width: 36px;
  height: 36px;
  background: rgb(22, 221, 188);
  bottom: 20px;
  text-align: center;
  font-size: 26px;
  line-height: 36px;
  font-weight: bolder;
  cursor: pointer;
  user-select: none;
}
// .BigBtn
.BigBtn {
  float: left;
  width: auto;
  height: auto;
  background: rgb(201, 5, 5);
  text-decoration: none;
  color: white;
  line-height: auto;
  padding: 6px;
  cursor: pointer;
  margin-right: 20px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.BigBtn:hover {
  background: orangered;
}
.BigBtn:active {
  background: rgb(0, 255, 234);
  color: black;
}

@media only screen and (max-width: 500px) {
  // H1Title
  .H1Title {
    width: auto;
    height: 26px;
    line-height: 26px;
    background: rgb(209, 92, 92);
    font-size: 26px;
    color: white;
  }
}
@media only screen and (min-width: 501px) {
  // H1Title
  .H1Title {
    width: auto;
    height: 46px;
    line-height: 46px;
    background: rgb(209, 92, 92);
    font-size: 46px;
    color: white;
  }
}

// ToolBar
.ToolBar {
  width: 100%;
  height: 10px;
  // background: rgb(255, 145, 0);
}
.BackBtn {
  float: right;
  text-align: center;
  width: 30px;
  height: 10px;
  background: rgba(0, 160, 139, 0.6);
  font-size: 10px;
  color: white;
  cursor: pointer;
  display: none;
}
.BackBtn:hover {
  background: rgb(255, 115, 0);
}
.BackBtn:active {
  background: rgb(0, 225, 255);
}
</style>
