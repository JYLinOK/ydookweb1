<template>
  <div class="div">
    <div class="Content">
      www.ydook.com + www.ydook.cn<br />
      <h1>Welcom to ydook!</h1>
      <div class="BigTitle">意境无限，创新不止！</div>
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
      <div class="right">
      <a class="rightA" href="https://www.miit.gov.cn/" target="_blank">粤ICP备19004091号 © 2019-2020 www.ydoo.com </a>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {},
  data () {
    return {
    }
  }
})
</script>

<style scoped lang="scss">
$lucency: 0.3;

.div {
  background: url('../../public/PhotoY/home.jpg') repeat-x;
  background-size: 100% 100%;
  height: 100%;
  color: white;
}
.Content {
  width: 100%;
  height: 100%;
  // background: rgba(0, 255, 115, 0.425);
  padding-top: 10px;
  padding-bottom: 10px;
  // background: linear-gradient(
  //   to right,
  //   rgb(0, 255, 170, $lucency),
  //   rgb(0, 225, 255, $lucency),
  //   rgba(0, 51, 128, $lucency)
  // );
}

@media only screen and (max-width: 600px) {
  .BigTitle {
    margin: auto;
    margin-top: 36%;
    // background: rgba(6, 196, 243, 0.399);
    // background: linear-gradient(
    //   to right,
    //   rgb(0, 255, 170, $lucency),
    //   rgb(0, 225, 255, $lucency),
    //   rgba(0, 51, 128, $lucency)
    // );
    width: auto;
    height: 100px;
    line-height: 100px;
    color: white;
    text-align: center;
    font-size: 26px;
    font-weight: bolder;
    animation: BigTitleMov 9s;
    animation-iteration-count: infinite;
  }
}

@media only screen and (min-width: 601px) {
  .BigTitle {
    margin: auto;
    margin-top: 9%;
    // background: rgba(6, 196, 243, 0.399);
    // background: linear-gradient(
    //   to right,
    //   rgb(0, 255, 170, $lucency),
    //   rgb(0, 225, 255, $lucency),
    //   rgba(0, 51, 128, $lucency)
    // );
    width: auto;
    height: 100px;
    line-height: 100px;
    color: white;
    text-align: center;
    font-size: 40px;
    font-weight: bolder;
    animation: BigTitleMov 9s;
    animation-iteration-count: infinite;
  }
}

@media only screen and (min-width: 1001px) {
  .BigTitle {
    margin: auto;
    margin-top: 16%;
    // background: rgba(6, 196, 243, 0.399);
    // background: linear-gradient(
    //   to right,
    //   rgb(0, 255, 170, $lucency),
    //   rgb(0, 225, 255, $lucency),
    //   rgba(0, 51, 128, $lucency)
    // );
    width: auto;
    height: 100px;
    line-height: 100px;
    color: white;
    text-align: center;
    font-size: 60px;
    font-weight: bolder;
    animation: BigTitleMov 9s;
    animation-iteration-count: infinite;
  }
}

@keyframes BigTitleMov {
  0% {
    transform: skew(0, 0deg) scale(1);
  }
  25% {
    transform: skew(0, 90deg) scale(1);
  }
  50% {
    transform: skew(0, 180deg) scale(1.2);
  }
  75% {
    transform: rotateX(270deg) scale(1);
  }
  100% {
    transform: rotateX(360deg) scale(1);
  }
}
// ========================================================================
.right {
  text-align: center;
  margin: auto;
  width: 100%;
  bottom: 10px;
  // background: rgb(255, 166, 0);
  cursor: pointer;
  color: white;
}
.rightA {
  text-decoration: none;
  // color: rgba(65, 100, 100, 0.6);
  color: white;
  font-size: 13px;
}

.rightA:hover {
  color: rgb(0, 255, 255);
  text-decoration: underline;
}
</style>
