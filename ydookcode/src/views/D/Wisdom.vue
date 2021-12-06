<template>
  <div class="wisdom">
    <div class="textContent">
      <h3>醒世威语 第 {{ PicListIndex }} 语</h3>
      <hr />
      <div class="PicShow1Box">
        <div class="Lbtn" v-on:click="beforeOne">&lt;</div>
        <div class="PicBox">
          <div
            class="CentPic"
            :class="{
              PicBoxMovActR: PicBoxMovActRYes,
              PicBoxMovActL: PicBoxMovActLYes
            }"
          >
            <div class="PicShow1" :style="styleObject1"></div>
            <div class="PicShow2" :style="styleObject2">
              <transition name="slide-fade">
                <div class="PicShowText" v-if="PicShowTextShow">
                  {{ PicShowTextShowText() }}
                </div>
              </transition>
            </div>
            <div class="PicShow3" :style="styleObject3"></div>
          </div>
        </div>
        <div class="Rbtn" v-on:click="nextOne">&gt;</div>
      </div>
      <!-- ===================================================================== -->
      <hr />
      <h3>醒世威语 收录集</h3>
      <div class="TextSetBox">
        <div class="TextSetBoxBtn" v-on:click.stop="TextSetBoxContShow">
          {{ TextSetBoxBtnText }}
        </div>
        <div class="TextSetBoxCont" v-if="TextSetBoxContYes">
          <div v-for="item in PicList" :key="item" class="TextSetBoxText">
            <div class="TextSetBoxTextIndex">{{ item.id }}</div>
            <div
              class="TextSetBoxTextCont"
              :style="TextSetClassObj(item.id)"
              v-on:click.stop="TextSetBoxClick(item.id)"
            >
              {{ item.text }}
            </div>
          </div>
          <!-- TextSetBoxCont END -->
        </div>
      </div>
      <!-- ===================================================================== -->
      <hr />
      <br />
      <br />
      <p>
        一图一视界，一句一菩提。
      </p>
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
const CentPicMovTimeTS = 2000

export default defineComponent({
  name: 'Wisdom',
  components: {},
  data () {
    return {
      PicListIndex: 1,
      PicSet: '../../../public/PhotoD/PicSet/',
      PicList: [
        {
          id: 1,
          text: '兴趣，是一切学习的开始'
        },
        {
          id: 2,
          text: '纵使路途颠簸，前路仍有光明'
        },
        {
          id: 3,
          text: '浩瀚云遮日，壮心山不停'
        },
        {
          id: 4,
          text: '凌空一境界，自在云空无'
        },
        {
          id: 5,
          text: '秀丽山川河，斑斓云运空，人生多值得'
        },
        {
          id: 6,
          text: '平静之下，也可拥有气质'
        },
        {
          id: 7,
          text: '高峰的攀登，需要忍耐与信心'
        },
        {
          id: 8,
          text: '敢于寂寞，甘于寂寞，才能领悟峰顶的秀丽风光'
        },
        {
          id: 9,
          text: '不要伤感时间，因为时间不会伤感你'
        },
        {
          id: 10,
          text: '成功的关键是找到关键之处'
        },
        {
          id: 11,
          text: '时间与空间不可分'
        },
        {
          id: 12,
          text: '成功的背后，往往是默默无闻的强大努力'
        },
        {
          id: 13,
          text: '矛盾只需奏响冰与火之歌'
        },
        {
          id: 14,
          text: '斗争只为进取，斗狠源于野性'
        },
        {
          id: 15,
          text: '真诚与信任，是合作成功的前提'
        },
        {
          id: 16,
          text: '美如仙境，荡涤心灵，归于平和，万物归于静美'
        },
        {
          id: 17,
          text: '孤帆远影，需要勇气与信心同行'
        },
        {
          id: 18,
          text: '即使前路尽是沙漠，也要勇敢走出新路'
        },
        {
          id: 19,
          text: '万里乌云翻滚压，心中明日逐光行'
        },
        {
          id: 20,
          text: '岁月与美酒同饮，真诚与好友同在'
        }
      ],
      styleObject1: {
        background: 'white',
        backgroundSize: '100% 100%'
      },
      styleObject2: {
        background:
          'url(' +
          require('../../../public/PhotoD/PicSet/1.jpg') +
          ') no-repeat',
        backgroundSize: '100% 100%'
      },
      styleObject3: {
        background:
          'url(' +
          require('../../../public/PhotoD/PicSet/2.jpg') +
          ') no-repeat',
        backgroundSize: '100% 100%'
      },
      PicBoxMovActRYes: false,
      PicBoxMovActLYes: false,
      PicShowTextShow: true,
      TextSetBoxContYes: false,
      TextSetBoxBtnText: '展开'
    }
  },

  methods: {
    // eslint-disable-next-line
    TextSetBoxClick(id: any) {
      this.PicListIndex = id
      console.log('TextSetBoxClick this.PicListIndex = ', this.PicListIndex)
      const len = this.PicList.length

      if (id > 1) {
        if (this.PicListIndex < len + 1) {
          this.styleObject3.background =
            'url(' +
            require('../../../public/PhotoD/PicSet/' +
              this.PicListIndex.toString() +
              '.jpg') +
            ') no-repeat'
        } else {
          this.styleObject3.background = 'white'
        }
        this.styleObject2.background =
          'url(' +
          require('../../../public/PhotoD/PicSet/' +
            (this.PicListIndex - 1).toString() +
            '.jpg') +
          ') no-repeat'
        if (id > 2) {
          this.styleObject1.background =
            'url(' +
            require('../../../public/PhotoD/PicSet/' +
              (this.PicListIndex - 2).toString() +
              '.jpg') +
            ') no-repeat'
        } else {
          this.styleObject1.background = 'white'
        }

        this.PicBoxMovActRYes = true
        this.PicShowTextShow = false
        setTimeout(() => {
          this.styleObject2.background =
            'url(' +
            require('../../../public/PhotoD/PicSet/' +
              this.PicListIndex.toString() +
              '.jpg') +
            ') no-repeat'
          this.styleObject1.background =
            'url(' +
            require('../../../public/PhotoD/PicSet/' +
              (this.PicListIndex - 1).toString() +
              '.jpg') +
            ') no-repeat'
          if (this.PicListIndex < len) {
            this.styleObject3.background =
              'url(' +
              require('../../../public/PhotoD/PicSet/' +
                (this.PicListIndex + 1).toString() +
                '.jpg') +
              ') no-repeat'
          } else {
            this.styleObject3.background = 'white'
          }

          this.PicBoxMovActRYes = false
          this.PicShowTextShow = true
        }, CentPicMovTimeTS)
      } else {
        this.styleObject1.background = 'white'
        this.styleObject2.background = 'white'
        this.styleObject3.background =
          'url(' +
          require('../../../public/PhotoD/PicSet/' +
            this.PicListIndex.toString() +
            '.jpg') +
          ') no-repeat'

        this.PicBoxMovActRYes = true
        this.PicShowTextShow = false
        setTimeout(() => {
          // this.styleObject1.background = 'white'
          this.styleObject2.background =
            'url(' +
            require('../../../public/PhotoD/PicSet/' +
              this.PicListIndex.toString() +
              '.jpg') +
            ') no-repeat'
          this.styleObject3.background =
            'url(' +
            require('../../../public/PhotoD/PicSet/' +
              (this.PicListIndex + 1).toString() +
              '.jpg') +
            ') no-repeat'
          this.PicBoxMovActRYes = false
          this.PicShowTextShow = true
        }, CentPicMovTimeTS)
      }
    },
    // eslint-disable-next-line
    TextSetClassObj(id: any) {
      // console.log('id = ', id)
      if (id === this.PicListIndex) {
        return {
          active: true,
          background: 'rgb(0, 255, 213)',
          color: 'black'
        }
      }
    },
    TextSetBoxContShow () {
      this.TextSetBoxContYes = !this.TextSetBoxContYes
      if (this.TextSetBoxContYes === false) {
        this.TextSetBoxBtnText = '展开'
      } else {
        this.TextSetBoxBtnText = '收起'
      }
    },
    PicShowTextShowText () {
      return this.PicList[this.PicListIndex - 1].text
    },
    beforeOne () {
      if (this.PicListIndex > 1) {
        this.PicBoxMovActLYes = true
        this.PicShowTextShow = false

        this.PicListIndex -= 1
        console.log('nextOne this.PicListIndex = ', this.PicListIndex)

        setTimeout(() => {
          if (this.PicListIndex !== 1) {
            this.styleObject1.background =
              'url(' +
              require('../../../public/PhotoD/PicSet/' +
                (this.PicListIndex - 1).toString() +
                '.jpg') +
              ') no-repeat'
          } else {
            this.styleObject1.background = 'white'
          }
          this.styleObject2.background =
            'url(' +
            require('../../../public/PhotoD/PicSet/' +
              this.PicListIndex.toString() +
              '.jpg') +
            ') no-repeat'

          this.PicBoxMovActLYes = false
          this.PicShowTextShow = true
        }, CentPicMovTimeTS)
      }
    },
    nextOne () {
      const len = this.PicList.length
      if (this.PicListIndex < len) {
        this.PicBoxMovActRYes = true
        this.PicShowTextShow = false
        this.PicListIndex += 1
        console.log('nextOne this.PicListIndex = ', this.PicListIndex)

        setTimeout(() => {
          if (this.PicListIndex < len) {
            this.styleObject3.background =
              'url(' +
              require('../../../public/PhotoD/PicSet/' +
                (this.PicListIndex + 1).toString() +
                '.jpg') +
              ') no-repeat'
          } else {
            this.styleObject3.background = 'white'
          }
          this.styleObject2.background =
            'url(' +
            require('../../../public/PhotoD/PicSet/' +
              this.PicListIndex.toString() +
              '.jpg') +
            ') no-repeat'
          this.styleObject1.background =
            'url(' +
            require('../../../public/PhotoD/PicSet/' +
              (this.PicListIndex - 1).toString() +
              '.jpg') +
            ') no-repeat'

          this.PicBoxMovActRYes = false
          this.PicShowTextShow = true
        }, CentPicMovTimeTS)
      }
    }
  }
})
</script>

<style scoped lang="scss">
$CentPicMovTime: 2s;

.wisdom {
  width: 100%;
  height: 100%;
  background: url('../../../public/PhotoD/wisdom.jpg') repeat-x;
  background-size: 100% 100%;
}
.textContent {
  text-align: left;
  // width: 99%;
  width: auto;
  height: 100%;
  // background: rgba(22, 170, 163, 0.479);
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

// =====================================================================================================
// =====================================================================================================
@media only screen and (max-width: 600px) {
// _______________________________________________________________________________
// PicShow1
.PicShow1Box {
  margin: auto;
  width: 280px;
  height: 160px;
  // background: rgb(231, 185, 229);
}
.PicBox {
  float: left;
  margin: auto;
  width: 240px;
  height: 160px;
  background: rgb(0, 116, 100);
  overflow: hidden;
}
.CentPic {
  float: left;
  margin: auto;
  width: 720px;
  height: 160px;
  background: rgb(111, 207, 33);
  overflow: hidden;
  margin-left: -240px;
}

// PicBoxMovActR
.PicBoxMovActR {
  animation: PicBoxMovActRMov $CentPicMovTime;
  animation-fill-mode: forwards;
}
@keyframes PicBoxMovActRMov {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(-240px);
  }
}
// PicBoxMovActL
.PicBoxMovActL {
  animation: PicBoxMovActLMov $CentPicMovTime;
  animation-fill-mode: forwards;
}
@keyframes PicBoxMovActLMov {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(240px);
  }
}

// =================================================================
.PicShow1 {
  float: left;
  margin: auto;
  width: 240px;
  height: 160px;
  background: rgb(255, 72, 0);
}

.PicShow2 {
  float: left;
  margin: auto;
  width: 240px;
  height: 160px;
  background: rgb(0, 255, 55);
}
.PicShowText {
  margin: auto;
  margin-top: 70px;
  width: 100%;
  height: 60px;
  // background: rgba(255, 72, 0, 0.623);
  text-align: center;
  animation: PicShowTextMov 2s;
  animation-fill-mode: forwards;
}
@keyframes PicShowTextMov {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transition: all 1s ease;
}

.PicShow3 {
  float: left;
  margin: auto;
  width: 240px;
  height: 160px;
  background: rgb(218, 0, 255);
}

// =================================================================
// =================================================================
.Lbtn {
  float: left;
  width: 20px;
  height: 160px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background: rgb(255, 153, 0);
  color: white;
  text-align: center;
  line-height: 160px;
  font-weight: bolder;
  user-select: none;
  cursor: pointer;
}
.Lbtn:hover {
  background: rgb(255, 72, 0);
}
.Lbtn:active {
  background: rgb(0, 255, 221);
  color: black;
}
.Rbtn {
  float: left;
  width: 20px;
  height: 160px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background: rgb(255, 153, 0);
  color: white;
  text-align: center;
  line-height: 160px;
  font-weight: bolder;
  user-select: none;
  cursor: pointer;
}
.Rbtn:hover {
  background: rgb(255, 72, 0);
}
.Rbtn:active {
  background: rgb(0, 255, 221);
  color: black;
}

// ====================================================
.TextSetBox {
  margin: auto;
  width: 90%;
  height: 360px;
  // background: rgb(226, 84, 28);
}
.TextSetBoxBtn {
  text-align: center;
  width: 50px;
  height: auto;
  background: rgba(0, 202, 61, 0.6);
  cursor: pointer;
  user-select: none;
  border-radius: 3px;
}
.TextSetBoxBtn:hover {
  background: rgb(255, 81, 0);
}
.TextSetBoxBtn:active {
  background: rgb(0, 255, 221);
  color: black;
}
.TextSetBoxCont {
  padding: 6px;
  text-align: left;
  width: 100%;
  height: 90%;
  background: rgba(255, 136, 0, 0.3);
  animation: TextSetBoxContMov 2s;
  animation-fill-mode: forwards;
  overflow-x: hidden;
  overflow-y: scroll;
}
@keyframes TextSetBoxContMov {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
.TextSetBoxCont::-webkit-scrollbar {
  background: rgba(37, 58, 30, 0.316);
}
.TextSetBoxCont::-webkit-scrollbar-thumb {
  background: rgba(0, 255, 221, 0.8);
}

// TextSetBoxText ==================================
.TextSetBoxText {
  text-align: left;
  width: 100%;
  height: 50px;
  // background: rgba(1, 255, 158, 0.6);
  margin-bottom: 16px;
}
.TextSetBoxTextIndex {
  float: left;
  width: 18%;
  height: auto;
  // background: rgba(255, 196, 0, 0.8);
  background: rgba(102, 255, 0, 0.8);
  text-align: center;
  color: black;
  cursor: pointer;
  border-radius: 3px;
  margin-right: 2%;
}
.TextSetBoxTextCont {
  float: left;
  text-align: center;
  width: 80%;
  height: 60px;
  background: rgba(1, 255, 158, 0.6);
  cursor: pointer;
  border-radius: 6px;
}
.TextSetBoxTextCont:hover {
  background: rgb(60, 255, 0);
  // background: rgb(0, 255, 213);
  color: black;
}
.TextSetBoxTextCont:active {
  background: rgb(255, 72, 0);
  // background: rgb(0, 255, 213);
  color: white;
}

// _______________________________________________________________________________
}
// =====================================================================================================
// =====================================================================================================

// =====================================================================================================
// =====================================================================================================
@media only screen and (min-width: 601px) {
// _______________________________________________________________________________
// PicShow1
.PicShow1Box {
  margin: auto;
  width: 460px;
  height: 300px;
  // background: rgb(231, 185, 229);
}
.PicBox {
  float: left;
  margin: auto;
  width: 400px;
  height: 300px;
  background: rgb(0, 168, 146);
  overflow: hidden;
}
.CentPic {
  float: left;
  margin: auto;
  width: 1600px;
  height: 300px;
  background: rgb(111, 207, 33);
  overflow: hidden;
  margin-left: -400px;
}

// PicBoxMovActR
.PicBoxMovActR {
  animation: PicBoxMovActRMov $CentPicMovTime;
  animation-fill-mode: forwards;
}
@keyframes PicBoxMovActRMov {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(-400px);
  }
}
// PicBoxMovActL
.PicBoxMovActL {
  animation: PicBoxMovActLMov $CentPicMovTime;
  animation-fill-mode: forwards;
}
@keyframes PicBoxMovActLMov {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(400px);
  }
}

// =================================================================
.PicShow1 {
  float: left;
  margin: auto;
  width: 400px;
  height: 300px;
  background: rgb(255, 72, 0);
}

.PicShow2 {
  float: left;
  margin: auto;
  width: 400px;
  height: 300px;
  background: rgb(0, 255, 55);
}
.PicShowText {
  margin: auto;
  margin-top: 132px;
  width: 100%;
  height: 30px;
  line-height: auto;
  // background: rgba(255, 72, 0, 0.623);
  text-align: center;
  font-size: 26px;
  animation: PicShowTextMov 2s;
  animation-fill-mode: forwards;
}
@keyframes PicShowTextMov {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transition: all 1s ease;
}

.PicShow3 {
  float: left;
  margin: auto;
  width: 400px;
  height: 300px;
  background: rgb(218, 0, 255);
}

// =================================================================
// =================================================================

.Lbtn {
  float: left;
  width: 30px;
  height: 300px;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  background: rgb(255, 153, 0);
  color: white;
  font-size: 30px;
  text-align: center;
  line-height: 300px;
  font-weight: bolder;
  user-select: none;
  cursor: pointer;
}
.Lbtn:hover {
  background: rgb(255, 72, 0);
}
.Lbtn:active {
  background: rgb(0, 255, 221);
  color: black;
}
.Rbtn {
  float: left;
  width: 30px;
  height: 300px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  background: rgb(255, 153, 0);
  color: white;
  font-size: 30px;
  text-align: center;
  line-height: 300px;
  font-weight: bolder;
  user-select: none;
  cursor: pointer;
}
.Rbtn:hover {
  background: rgb(255, 72, 0);
}
.Rbtn:active {
  background: rgb(0, 255, 221);
  color: black;
}

// ====================================================
.TextSetBox {
  margin: auto;
  width: 90%;
  height: 378px;
  // background: rgb(226, 84, 28);
}
.TextSetBoxBtn {
  text-align: center;
  width: 50px;
  height: auto;
  background: rgba(0, 202, 61, 0.6);
  cursor: pointer;
  user-select: none;
}
.TextSetBoxBtn:hover {
  background: rgb(255, 81, 0);
}
.TextSetBoxBtn:active {
  background: rgb(0, 255, 221);
  color: black;
}
.TextSetBoxCont {
  padding: 6px;
  text-align: left;
  width: 100%;
  height: 90%;
  background: rgba(255, 136, 0, 0.3);
  animation: TextSetBoxContMov 2s;
  animation-fill-mode: forwards;
  overflow-x: hidden;
  overflow-y: scroll;
}
@keyframes TextSetBoxContMov {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
.TextSetBoxCont::-webkit-scrollbar {
  background: rgba(37, 58, 30, 0.316);
}
.TextSetBoxCont::-webkit-scrollbar-thumb {
  background: rgba(0, 255, 221, 0.8);
}

// TextSetBoxText ==================================
.TextSetBoxText {
  text-align: left;
  width: 100%;
  height: 25px;
  // background: rgba(1, 255, 158, 0.6);
  margin-bottom: 20px;
}
.TextSetBoxTextIndex {
  float: left;
  width: 10%;
  height: 30px;
  // background: rgba(255, 196, 0, 0.8);
  background: rgba(102, 255, 0, 0.8);
  text-align: center;
  line-height: 30px;
  color: black;
  cursor: pointer;
}
.TextSetBoxTextCont {
  float: left;
  text-align: center;
  width: 90%;
  height: 30px;
  line-height: 30px;
  background: rgba(1, 255, 158, 0.6);
  cursor: pointer;
}
.TextSetBoxTextCont:hover {
  background: rgb(60, 255, 0);
  // background: rgb(0, 255, 213);
  color: black;
}
.TextSetBoxTextCont:active {
  background: rgb(255, 72, 0);
  // background: rgb(0, 255, 213);
  color: white;
}

// _______________________________________________________________________________
}
// =====================================================================================================
// =====================================================================================================

// =====================================================================================================
// =====================================================================================================
@media only screen and (min-width: 1001px) {
// _______________________________________________________________________________
// PicShow1
.PicShow1Box {
  margin: auto;
  width: 900px;
  height: 600px;
  // background: rgb(231, 185, 229);
}
.PicBox {
  float: left;
  margin: auto;
  width: 800px;
  height: 600px;
  background: rgb(0, 168, 146);
  overflow: hidden;
}
.CentPic {
  float: left;
  margin: auto;
  width: 2400px;
  height: 600px;
  background: rgb(111, 207, 33);
  overflow: hidden;
  margin-left: -800px;
}

// PicBoxMovActR
.PicBoxMovActR {
  animation: PicBoxMovActRMov $CentPicMovTime;
  animation-fill-mode: forwards;
}
@keyframes PicBoxMovActRMov {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(-800px);
  }
}
// PicBoxMovActL
.PicBoxMovActL {
  animation: PicBoxMovActLMov $CentPicMovTime;
  animation-fill-mode: forwards;
}
@keyframes PicBoxMovActLMov {
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(800px);
  }
}

// =================================================================
.PicShow1 {
  float: left;
  margin: auto;
  width: 800px;
  height: 600px;
  background: rgb(255, 72, 0);
}

.PicShow2 {
  float: left;
  margin: auto;
  width: 800px;
  height: 600px;
  background: rgb(0, 255, 55);
}
.PicShowText {
  margin: auto;
  margin-top: 270px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  // background: rgba(255, 72, 0, 0.623);
  text-align: center;
  font-size: 30px;
  animation: PicShowTextMov 3s;
  animation-fill-mode: forwards;
}
@keyframes PicShowTextMov {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transition: all 1s ease;
}

.PicShow3 {
  float: left;
  margin: auto;
  width: 800px;
  height: 600px;
  background: rgb(218, 0, 255);
}

// =================================================================
// =================================================================

.Lbtn {
  float: left;
  width: 50px;
  height: 600px;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  background: rgb(255, 153, 0);
  color: white;
  font-size: 36px;
  text-align: center;
  line-height: 600px;
  font-weight: bolder;
  user-select: none;
  cursor: pointer;
}
.Lbtn:hover {
  background: rgb(255, 72, 0);
}
.Lbtn:active {
  background: rgb(0, 255, 221);
  color: black;
}
.Rbtn {
  float: left;
  width: 50px;
  height: 600px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  background: rgb(255, 153, 0);
  color: white;
  font-size: 36px;
  text-align: center;
  line-height: 600px;
  font-weight: bolder;
  user-select: none;
  cursor: pointer;
}
.Rbtn:hover {
  background: rgb(255, 72, 0);
}
.Rbtn:active {
  background: rgb(0, 255, 221);
  color: black;
}

// ====================================================
.TextSetBox {
  margin: auto;
  width: 90%;
  height: 378px;
  // background: rgb(226, 84, 28);
}
.TextSetBoxBtn {
  text-align: center;
  width: 50px;
  height: auto;
  background: rgba(0, 202, 61, 0.6);
  cursor: pointer;
  user-select: none;
}
.TextSetBoxBtn:hover {
  background: rgb(255, 81, 0);
}
.TextSetBoxBtn:active {
  background: rgb(0, 255, 221);
  color: black;
}
.TextSetBoxCont {
  padding: 6px;
  text-align: left;
  width: 100%;
  height: 90%;
  background: rgba(255, 136, 0, 0.3);
  animation: TextSetBoxContMov 2s;
  animation-fill-mode: forwards;
  overflow-x: hidden;
  overflow-y: scroll;
}
@keyframes TextSetBoxContMov {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
.TextSetBoxCont::-webkit-scrollbar {
  background: rgba(37, 58, 30, 0.316);
}
.TextSetBoxCont::-webkit-scrollbar-thumb {
  background: rgba(0, 255, 221, 0.8);
}

// TextSetBoxText ==================================
.TextSetBoxText {
  text-align: left;
  width: 100%;
  height: 25px;
  // background: rgba(1, 255, 158, 0.6);
  margin-bottom: 10px;
}
.TextSetBoxTextIndex {
  float: left;
  width: 5%;
  height: 25px;
  // background: rgba(255, 196, 0, 0.8);
  background: rgba(102, 255, 0, 0.8);
  text-align: center;
  line-height: 25px;
  color: black;
  cursor: pointer;
}
.TextSetBoxTextCont {
  float: left;
  text-align: center;
  width: 95%;
  height: 25px;
  line-height: 25px;
  background: rgba(1, 255, 158, 0.6);
  cursor: pointer;
}
.TextSetBoxTextCont:hover {
  background: rgb(60, 255, 0);
  // background: rgb(0, 255, 213);
  color: black;
}
.TextSetBoxTextCont:active {
  background: rgb(255, 72, 0);
  // background: rgb(0, 255, 213);
  color: white;
}

// _______________________________________________________________________________
}
// =====================================================================================================
// =====================================================================================================
</style>
