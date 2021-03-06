
export default [
  { path: '/', component: () => import('layouts/Index') },
  { path: '/login', component: () => import('pages/Login') },
  { path: '/login/:token', component: () => import('pages/Login') },

  // Always leave this last one
  { path: '*', component: () => import('pages/404') } // Not found
]
