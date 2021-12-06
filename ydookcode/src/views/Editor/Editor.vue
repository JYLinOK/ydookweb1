<template>
  <div class="Editor">
    <message-warn
      v-if="messageErShow"
      :messageEr="messageErNow"
      :toPath="toPathNow"
    ></message-warn>
    <br />
    <div class="EDTitle">Editor</div>
    <div class="PSWBox">
      <div class="IDName">
        账号：<input type="text" v-model="Mname" placeholder="edit me" />
      </div>
      <div class="IDPSW">
        密码：<input
          type="password"
          v-model="Mpassword"
          placeholder="edit me"
        />
      </div>
    </div>
    <div class="SubmitBox">
      <div class="Submit" type="submit" v-on:click.stop="ToEditorPanel">
        确定
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import axios from 'axios'
import MessageWarn from '@/components/message/MessageWarn.vue'
// import qs from 'qs'

export default defineComponent({
  name: 'Editor',
  components: { MessageWarn },
  setup () {
    onUnmounted(() => {
      // console.log('Editor onUnmounted!')
      // this.$emit('isSeenL2', false)
    })
  },
  data () {
    return {
      Mname: '',
      Mpassword: '',
      messageErNow: '',
      toPathNow: '',
      messageErShow: false,
      testTimesEr: 0
      // set: ['']
    }
  },
  methods: {
    ToEditorPanel () {
      axios('/api/mock/login').then(res => {
        // console.log('axios.req = ', res)
        // console.log('axios.status = ', res.status)
        // console.log('axios.statusText = ', res.statusText)
        // console.log('axios.headers = ', res.headers)
        // console.log('axios.config = ', res.config)
        // console.log('axios.request = ', res.request)
        // console.log('axios.data = ', res.data)
        // console.log('typeof axios.data.list[0] = ', typeof res.data.list[0])
        // console.log('typeof axios.data.list[1] = ', typeof res.data.list[1])
        // console.log('axios.data.list[0] = ', res.data.list[0])
        // console.log('axios.data.list[1] = ', res.data.list[1])
        // console.log('axios.data.list.length = ', res.data.list.length)
        // Test if the browser support the sessionStorage
        // console.log('typeof(Storage) = ', typeof Storage)
        // console.log('this.Mname = ', this.Mname)
        // console.log('this.Mpassword = ', this.Mpassword)

        if (res.data.list.length > 0) {
          const ses = window.sessionStorage
          if (
            this.Mname === res.data.list[0] &&
            this.Mpassword === res.data.list[1]
          ) {
            ses.setItem('data', JSON.stringify(true))
            // Jump to EditorPanel
            // this.$router.push({ name: 'EditorPanel' })
            // =======================================================
            const routeData = this.$router.resolve({
              name: 'EditorPanel'
            })
            window.open(routeData.href, '_blank')
          } else {
            // const TestNumber = ses.setItem('data', JSON.stringify(true))
            this.testTimesEr += 1
            // console.log('this.testTimesEr = ', this.testTimesEr)
            this.messageErNow = '信息错误'
            this.toPathNow = 'Author'
            this.messageErShow = true
            ses.setItem('data', JSON.stringify(false))
          }
          // const objD = ses.getItem('data')
          // console.log('typeof objD = ', typeof objD)
          // console.log('objD = ', JSON.parse(objD || '[]'))
          // console.log('objD.list = ', JSON.parse(objD || '[]').list)
        }
      })
      // this.$emit('RETseenBox', 0)
      // this.set = ['1', '2']
    }
  }
})
</script>

<style scoped lang="scss">
.Editor {
  width: 100%;
  height: 100%;
  background: black;
  background-size: 100% 100%;
}

.PSWBox {
  margin: auto;
  width: 100%;
  text-align: center;
  background: rgb(202, 0, 0);
  margin-top: 16%;
  color: white;
}

.IDName {
  width: 300px;
  // background: rgb(30, 0, 202);
  margin: auto;
  margin-bottom: 5px;
}
.IDPSW {
  width: 300px;
  // background: rgb(202, 0, 202);
  margin: auto;
  margin-bottom: 10px;
}

.EDTitle {
  color: white;
}

.SubmitBox {
  // background: rgb(0, 133, 29);
  // background: rgb(202, 0, 0);
  cursor: pointer;
  user-select: none;
  text-align: center;
  color: white;
}
.Submit {
  margin: auto;
  width: 216px;
  // text-align: left;
  text-align: center;
  // background: rgb(202, 0, 0);
  cursor: pointer;
  user-select: none;
  border-radius: 20px;
}
.Submit:hover {
  background: rgb(255, 1, 1);
}
.Submit:active {
  background: rgb(22, 255, 1);
  color: black;
}
</style>
