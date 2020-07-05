
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue'),
        redirect: 'diary',
        children: [
          {
            path: 'diary',
            component: () => import('pages/Diary.vue')
          },
          {
            path: 'finances',
            component: () => import('pages/Finances.vue')
          }
        ]
      },
      { path: 'settings', component: () => import('pages/Settings.vue'), meta: { title: 'page.settings' } }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
