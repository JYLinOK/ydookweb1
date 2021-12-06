<template>
  <!-- EBigTtitle ============================================================== -->
  <div class="EBigTtitle">
    <img
      class="iconBtn"
      src="../../../../public/ydook.jpg"
      alt="ydook transfrom"
      v-on:click="YBtn"
    />
    <div class="EdictBtn" @click="clearALL">重置</div>
    <div class="EdictBtn" @click="generateP">生成</div>
    <br />
    <br />
    <br />
    <br />
  </div>
  <!-- EBigContent ============================================================== -->
  <div class="EBigContent" :style="styleObject">
    <div class="EDLeft" :style="styleObjectL">
      <!-- $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ -->
      <!-- $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ -->
      <!-- <siv class="gap"></siv> -->
      <div class="WordBOX">
        <div
          class="Word"
          id="idWord"
          contenteditable="true"
          @keyup="updatedCode"
        >
          一二三四五六七，&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
          <div>林进威天下<b style="font-size:30px">第一</b>！</div>
          <div>&nbsp;一二三四五六七，</div>
          <div>林进威天下第一！&nbsp;</div>
        </div>
      </div>
      <!-- <textarea class="Word" contenteditable="true">中国人<b>很</b>好的，<div class="Pic" contenteditable="false"></div>不信你看</textarea> -->

      <!-- $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ -->
      <!-- $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ -->
    </div>
    <div class="EDRight" :style="styleObjectR">
      <div class="HTMLPageBox">
        <div class="HTMLPage"><span v-html="HTMLCode"></span></div>
      </div>
      <div class="ShoCodeHTMLCode" contenteditable="true">
        {{ HTMLCode }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EBigContent',
  components: {},
  data () {
    return {
      styleObject: {
        height: '90vh'
      },
      styleObjectL: {
        width: '30vw'
      },
      styleObjectR: {
        width: '30vw'
      },
      isSeenLeftBox: false,
      leftBarWidth: 0,
      wordValue: '',
      HTMLCode: ''
    }
  },
  updated () {
    // this.HTMLCode = this.EditCode
  },
  mounted () {
    this.TranWidth()
    this.TranHight()
    console.log('mounted this.HTMLCode = ', this.HTMLCode)
    // this.$refs.refWordBOX.oncontextmenu = () => {
    //   return false
    // }
  },
  created () {
    window.onresize = () => {
      return (() => {
        this.TranWidth()
        this.TranHight()
      })()
    }
  },
  methods: {
    TranWidth () {
      this.styleObjectL.width =
        ((document.body.clientWidth - this.leftBarWidth - 1) / 2).toString() +
        'px'
      this.styleObjectR.width =
        ((document.body.clientWidth - this.leftBarWidth - 1) / 2).toString() +
        'px'
    },
    TranHight () {
      this.styleObject.height =
        (document.body.clientHeight - 55).toString() + 'px'
      console.log('this.styleObject.height = ', this.styleObject.height)
    },
    // eslint-disable-next-line
    YBtn() {
      const routeData = this.$router.resolve({
        name: 'Home'
      })
      window.open(routeData.href, '_blank')
    },
    // $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    updatedCode () {
      console.log('updatedCode')
      // eslint-disable-next-line
      this.HTMLCode = document.getElementById('idWord')!.innerHTML
      console.log('updatedCode this.HTMLCode = ', this.HTMLCode)
      console.log('updatedCode this.HTMLCode = ', this.HTMLCode)
    },
    clearALL () {
      // eslint-disable-next-line
      document.getElementById('idWord')!.innerHTML = ''
      this.HTMLCode = ''
    },
    generateP () {
      console.log('generateP')
    }
  }
})
</script>

<style scoped lang="scss">
// ====================================================================
// ====================================================================
// .EBigContent
.EBigContent {
  text-align: left;
  width: 100vw;
  height: 90vh;
  // background: rgba(0, 38, 255, 0.6);
  // background: rgb(250, 255, 248);
  background-size: 100% 100%;
}

.EDLeft {
  float: left;
  height: 100%;
  // background: rgb(10, 31, 3);
}

.EDRight {
  float: left;
  height: 100%;
  background: rgb(129, 0, 161);
}

// ====================================================================
// ====================================================================
// .EBigTtitle
.EBigTtitle {
  text-align: left;
  width: 100vw;
  height: 35px;
  background: rgb(179, 22, 22);
  background-size: 100% 100%;
}

.iconBtn {
  float: left;
  width: 25px;
  height: 25px;
  // background: rgb(116, 219, 102);
  border-radius: 100%;
  margin-top: 5px;
  margin-left: 25px;
  cursor: pointer;
}

.EdictBtn {
  float: left;
  color: white;
  text-align: center;
  width: auto;
  height: 25px;
  line-height: 25px;
  // background: rgb(116, 219, 102);
  margin-top: 5px;
  margin-left: 25px;
  cursor: pointer;
}
.EdictBtn:hover {
  color: rgb(0, 255, 76);
}
.EdictBtn:active {
  color: rgb(255, 102, 0);
}
// ====================================================================
// ====================================================================
// Word
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
.gap {
  float: left;
  text-align: center;
  width: 170px;
  height: 16px;
  background: rgb(0, 255, 13);
}
.Word {
  margin: auto;
  text-align: left;
  width: 95%;
  min-height: 95%;
  margin-top: 2%;
  border: none;
  outline: none;
  box-shadow: none;
  background: rgb(255, 255, 255);
}
.WordBOX {
  float: left;
  text-align: center;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  border: none;
  outline: none;
  box-shadow: none;
  background: rgba(21, 121, 69, 0.6);
}

.WordBOX::-webkit-scrollbar {
  background: rgba(39, 119, 143, 0.6);
}

.WordBOX::-webkit-scrollbar-thumb {
  background: coral;
}
.Pic {
  width: 100px;
  height: 100px;
  // background: rgb(132, 212, 2);
  background: url('../../../../public/PhotoD/wisdom.jpg');
  background-size: 100% 100%;
  margin: auto;
}
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
.HTMLPage {
  margin: auto;
  text-align: left;
  width: 95%;
  min-height: 95%;
  margin-top: 2%;
  border: none;
  outline: none;
  box-shadow: none;
  background: rgb(255, 255, 255);
}

.HTMLPageBox {
  float: left;
  text-align: center;
  width: 100%;
  height: 50%;
  overflow-y: scroll;
  border: none;
  outline: none;
  box-shadow: none;
  background: rgba(86, 89, 100, 0.6);
}

.HTMLPageBox::-webkit-scrollbar {
  background: rgba(39, 119, 143, 0.6);
}

.HTMLPageBox::-webkit-scrollbar-thumb {
  background: coral;
}

.ShoCodeHTMLCode {
  padding: 10px;
  width: 100%;
  height: 50%;
  background: rgb(226, 248, 201);
  overflow-y: scroll;
}
</style>
