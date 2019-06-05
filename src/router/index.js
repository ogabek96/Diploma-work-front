import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

/* Router Modules */

// import nestedRouter from './modules/nested'

/** note: sub-menu only appear when children.length>=1
 *
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['SUPER_ADMIN','OWNER']    will control the page roles (you can set multiple roles)
    title: 'title'               the name show in sub-menu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if true, the page will no be cached(default is false)
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
    affix: true                  if true, the tag will affix in the tags-view
  }
**/
export const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },

  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/auth-redirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },

  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  },

  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true, affix: true }
      }
    ]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/registration',
    component: Layout,
    meta: {
      roles: ['SUPER_ADMIN']
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/registration/index'),
        name: 'Регистрация пациента',
        meta: {
          title: 'Регистрация пациента',
          roles: ['SUPER_ADMIN'],
          icon: 'peoples',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/patients',
    component: Layout,
    meta: {
      roles: ['SUPER_ADMIN']
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/patients/index'),
        name: 'Пациенты',
        meta: {
          title: 'Пациенты',
          roles: ['SUPER_ADMIN'],
          icon: 'peoples',
          noCache: true
        }
      },
      {
        path: '/patients/:id/edit',
        component: () => import('@/views/patients/edit'),
        name: 'Пациенты',
        meta: {
          title: 'Пациенты',
          roles: ['SUPER_ADMIN'],
          noCache: true,
          activeMenu: '/patients/index' },
        hidden: true
      },
      {
        path: '/patients/:id/detail',
        component: () => import('@/views/patients/detail'),
        name: 'Пациенты',
        meta: {
          title: 'Пациенты',
          roles: ['SUPER_ADMIN'],
          noCache: true,
          activeMenu: '/patients/index' },
        hidden: true
      }
    ]
  },

  {
    path: '/first-evaluation',
    component: Layout,
    meta: {
      roles: ['SUPER_ADMIN']
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/first-evaluation'),
        name: 'Модуль первичного выявления',
        meta: {
          title: 'Модуль первичного выявления',
          roles: ['SUPER_ADMIN'],
          icon: 'peoples',
          noCache: true
        }
      },
      {
        path: ':id/evaluation',
        component: () => import('@/views/first-evaluation/evaluation-table'),
        name: 'firstEvaluationTable',
        meta: {
          title: 'Модуль первичного выявления',
          roles: ['SUPER_ADMIN'],
          icon: 'peoples',
          noCache: true
        },
        hidden: true
      },
      {
        path: ':patientId/evaluation/add',
        component: () => import('@/views/first-evaluation/add'),
        name: 'Модуль первичного выявления',
        meta: {
          title: 'Модуль первичного выявления',
          roles: ['SUPER_ADMIN'],
          icon: 'peoples',
          noCache: true
        },
        hidden: true
      },
      {
        path: ':patientId/evaluation/:id/edit',
        component: () => import('@/views/first-evaluation/edit'),
        name: 'Модуль первичного выявления',
        meta: {
          title: 'Модуль первичного выявления',
          roles: ['SUPER_ADMIN'],
          icon: 'peoples',
          noCache: true
        },
        hidden: true
      },
      {
        path: ':patientId/evaluation/:id/detail',
        component: () => import('@/views/first-evaluation/detail'),
        name: 'Модуль первичного выявления',
        meta: {
          title: 'Модуль первичного выявления',
          roles: ['SUPER_ADMIN'],
          icon: 'peoples',
          noCache: true
        },
        hidden: true
      }
    ]
  },

  {
    path: '/anamnestic',
    component: Layout,
    meta: {
      roles: ['SUPER_ADMIN']
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/anamnestic'),
        name: 'Модуль анамнестические данные',
        meta: {
          title: 'Модуль анамнестические данные',
          roles: ['SUPER_ADMIN'],
          icon: 'peoples',
          noCache: true
        }
      },
      {
        path: ':id/anamnestic',
        component: () => import('@/views/anamnestic/anamnestic-table'),
        name: 'anamnesticTable',
        meta: {
          title: 'Модуль анамнестические данные',
          roles: ['SUPER_ADMIN'],
          icon: 'peoples',
          noCache: true
        },
        hidden: true
      },
      {
        path: ':patientId/anamnestic/add',
        component: () => import('@/views/anamnestic/add'),
        name: 'Модуль анамнестические данные',
        meta: {
          title: 'Модуль анамнестические данные',
          roles: ['SUPER_ADMIN'],
          icon: 'peoples',
          noCache: true
        },
        hidden: true
      },
      {
        path: ':patientId/anamnestic/:id/edit',
        component: () => import('@/views/anamnestic/edit'),
        name: 'Модуль анамнестические данные',
        meta: {
          title: 'Модуль анамнестические данные',
          roles: ['SUPER_ADMIN'],
          icon: 'peoples',
          noCache: true
        },
        hidden: true
      },
      {
        path: ':patientId/anamnestic/:id/detail',
        component: () => import('@/views/anamnestic/detail'),
        name: 'Модуль анамнестические данные',
        meta: {
          title: 'Модуль анамнестические данные',
          roles: ['SUPER_ADMIN'],
          icon: 'peoples',
          noCache: true
        },
        hidden: true
      }
    ]
  },
  {
    path: '/diagnosis',
    component: Layout,
    meta: {
      roles: ['SUPER_ADMIN']
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/diagnosis'),
        name: 'Модуль диагностический',
        meta: {
          title: 'Модуль диагностический',
          roles: ['SUPER_ADMIN'],
          icon: 'peoples',
          noCache: true
        }
      },
      {
        path: ':id/diagnosis',
        component: () => import('@/views/diagnosis/diagnosis-table'),
        name: 'diagnosisTable',
        meta: {
          title: 'Модуль диагностический',
          roles: ['SUPER_ADMIN'],
          icon: 'peoples',
          noCache: true
        },
        hidden: true
      },
      {
        path: ':patientId/diagnosis/add',
        component: () => import('@/views/diagnosis/add'),
        name: 'Модуль диагностический',
        meta: {
          title: 'Модуль диагностический',
          roles: ['SUPER_ADMIN'],
          icon: 'peoples',
          noCache: true
        },
        hidden: true
      },
      {
        path: ':patientId/diagnosis/:id/edit',
        component: () => import('@/views/diagnosis/edit'),
        name: 'Модуль диагностический',
        meta: {
          title: 'Модуль диагностический',
          roles: ['SUPER_ADMIN'],
          icon: 'peoples',
          noCache: true
        },
        hidden: true
      },
      {
        path: ':patientId/diagnosis/:id/detail',
        component: () => import('@/views/diagnosis/detail'),
        name: 'Модуль диагностический',
        meta: {
          title: 'Модуль диагностический',
          roles: ['SUPER_ADMIN'],
          icon: 'peoples',
          noCache: true
        },
        hidden: true
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
