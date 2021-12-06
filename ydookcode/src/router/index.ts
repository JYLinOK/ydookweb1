import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Introduction from '../views/Y/Introduction.vue'
import Vison from '../views/Y/Vison.vue'
import Author from '../views/Y/Author.vue'
import Wisdom from '../views/D/Wisdom.vue'
import ExpandAcademic from '../views/O1/ExpandAcademic.vue'
import OpenSource from '../views/O2/OpenSource.vue'
import PyDraw from '../views/O2/Softwares/PyDraw.vue'
import YecPad from '../views/O2/Softwares/YecPad.vue'
import YecText from '../views/O2/Softwares/YecText.vue'
import YecPen from '../views/O2/Softwares/YecPen.vue'
import YWeb from '../views/O2/Softwares/YWeb.vue'
import Editor from '../views/Editor/Editor.vue'
import EditorPanel from '../views/Editor/EditorPanel.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'YDOOK 维度AI 官方首页'
    }
  },
  {
    path: '/Introduction:?',
    name: 'Introduction',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Y/Introduction.vue'),
    component: Introduction,
    meta: {
      title: '简介 YDOOK'
    }
  },
  {
    path: '/Vison',
    name: 'Vison',
    component: Vison,
    meta: {
      title: '愿景 YDOOK'
    }
  },
  {
    path: '/Author',
    name: 'Author',
    component: Author,
    meta: {
      title: '林进威 YDOOK 作者'
    }
  },
  {
    path: '/Wisdom',
    name: 'Wisdom',
    component: Wisdom,
    meta: {
      title: '醒世威语 YDOOK'
    }
  },
  {
    path: '/ExpandAcademic',
    name: 'ExpandAcademic',
    component: ExpandAcademic,
    meta: {
      title: '国内外学术网站分享 YDOOK'
    }
  },
  {
    path: '/OpenSource',
    name: 'OpenSource',
    component: OpenSource,
    meta: {
      title: '开源贡献 YDOOK'
    }
  },
  {
    path: '/PyDraw',
    name: 'PyDraw',
    component: PyDraw,
    meta: {
      title: 'PyDraw YDOOK 开源软件'
    }
  },
  {
    path: '/YecPad',
    name: 'YecPad',
    component: YecPad,
    meta: {
      title: 'YecPad YDOOK 开源软件'
    }
  },
  {
    path: '/YecText',
    name: 'YecText',
    component: YecText,
    meta: {
      title: 'YecText YDOOK 开源软件'
    }
  },
  {
    path: '/YecPen',
    name: 'YecPen',
    component: YecPen,
    meta: {
      title: 'YecPen YDOOK 开源软件'
    }
  },
  {
    path: '/YWeb',
    name: 'YWeb',
    component: YWeb,
    meta: {
      title: 'YWeb YDOOK 开源软件'
    }
  },
  {
    path: '/Editor',
    name: 'Editor',
    component: Editor,
    meta: {
      title: 'Editor YDOOK'
    }
  },
  {
    path: '/EditorPanel',
    name: 'EditorPanel',
    component: EditorPanel,
    meta: {
      title: 'EditorPanel YDOOK',
      requireAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
