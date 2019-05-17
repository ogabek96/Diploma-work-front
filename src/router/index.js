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
    path: '/users',
    component: Layout,
    meta: {
      roles: ['SUPER_ADMIN']
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/users/index'),
        name: 'Users',
        meta: {
          title: 'Users',
          roles: ['SUPER_ADMIN'],
          icon: 'peoples',
          noCache: true
        }
      }
    ]
  },

  {
    path: '/companies',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/companies/index'),
        name: 'Companies',
        meta: {
          title: 'Companies',
          roles: ['SUPER_ADMIN', 'OWNER'],
          icon: 'enterprise',
          noCache: true
        }
      },
      {
        path: 'create',
        component: () => import('@/views/companies/create'),
        name: 'CreateCompany',
        meta: { title: 'Create Company', icon: 'edit' },
        hidden: true
      },
      {
        path: 'edit/:id(\\S+)',
        component: () => import('@/views/companies/edit'),
        name: 'EditCompany',
        meta: { title: 'Edit Company', noCache: true, activeMenu: '/companies/index' },
        hidden: true
      },
      {
        path: 'detail/:id(\\S+)',
        component: () => import('@/views/companies/detail'),
        name: 'CompanyDetail',
        meta: { title: 'Company Detail', noCache: true, activeMenu: '/companies/index' },
        hidden: true
      }
    ]
  },

  {
    path: '/branches',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/branches/index'),
        name: 'Branches',
        meta: {
          title: 'Branches',
          roles: ['SUPER_ADMIN', 'OWNER'],
          icon: 'shopping',
          noCache: true
        }
      },
      {
        path: 'create',
        component: () => import('@/views/branches/create'),
        name: 'CreateCompany',
        meta: { title: 'Create Company', icon: 'edit' },
        hidden: true
      },
      {
        path: 'edit/:id(\\S+)',
        component: () => import('@/views/branches/edit'),
        name: 'EditCompany',
        meta: { title: 'Edit Company', noCache: true, activeMenu: '/branches/index' },
        hidden: true
      }
    ]
  },

  {
    path: '/bot-users',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/bot-users/index'),
        name: 'Bot users',
        meta: {
          title: 'Bot users',
          roles: ['SUPER_ADMIN', 'OWNER'],
          icon: 'shopping',
          noCache: true
        }
      },
      {
        path: 'create',
        component: () => import('@/views/bot-users/create'),
        name: 'CreateCompany',
        meta: { title: 'Create Company', icon: 'edit' },
        hidden: true
      },
      {
        path: 'edit/:id(\\S+)',
        component: () => import('@/views/bot-users/edit'),
        name: 'EditCompany',
        meta: { title: 'Edit Company', noCache: true, activeMenu: '/bot-users/index' },
        hidden: true
      }
    ]
  },

  {
    path: '/items',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/items/index'),
        name: 'Items',
        meta: {
          title: 'Items',
          roles: ['SUPER_ADMIN', 'OWNER'],
          icon: 'items',
          noCache: true
        }
      },
      {
        path: 'edit/:id(\\S+)',
        component: () => import('@/views/items/edit'),
        name: 'Items',
        meta: {
          title: 'Items',
          roles: ['SUPER_ADMIN', 'OWNER'],
          noCache: true
        },
        hidden: true
      },
      {
        path: 'create/:id(\\S+)',
        component: () => import('@/views/items/create'),
        name: 'Items',
        meta: {
          title: 'Items',
          roles: ['SUPER_ADMIN', 'OWNER'],
          icon: 'shopping',
          noCache: true
        },
        hidden: true
      }
    ]
  },
  {
    path: '/settings',
    component: Layout,
    meta: {
      roles: ['SUPER_ADMIN', 'OWNER']
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/settings/index'),
        name: 'Settings',
        meta: {
          title: 'Settings',
          roles: ['SUPER_ADMIN', 'OWNER'],
          icon: 'settings',
          noCache: true
        }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
