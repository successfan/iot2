
const routes = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MyLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Index.vue') }
  //   ]
  // }
  {
    path: '/b',
    component: () => import('../../panda/pages/Error404.vue'),
    // component: () => import('src/project/pandan/pages/Error404.vue'),
    // children: [
    //   {
    //     path: '', component: () => import('src/pandan/pages/Index.vue'),
    //     children: [
    //       { path: '', component: () => import('src/pandan/pages/Index2.vue') }
    //     ]
    //   }
    // ]
  },
  {
    path: '/',
    // component: () => import('../layouts/MyLayout.vue'),
    component: () => import('../layouts/MyLayout.vue'),
    // children: [
    //   {
    //     path: '', component: () => import('src/pandan/pages/Index.vue'),
    //     children: [
    //       { path: '', component: () => import('src/pandan/pages/Index2.vue') }
    //     ]
    //   }
    // ]
  },
]

// // Always leave this as last one
// if (process.env.MODE !== 'ssr') {
//   routes.push({
//     path: '*',
//     component: () => import('src/pandan/pages/Error404.vue')
//   })
// }

export default routes
