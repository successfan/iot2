
const routes = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MyLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Index.vue') }
  //   ]
  // }

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
  }
]

// // Always leave this as last one
// if (process.env.MODE !== 'ssr') {
//   routes.push({
//     path: '*',
//     component: () => import('src/pandan/pages/Error404.vue')
//   })
// }

export default routes
