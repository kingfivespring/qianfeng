export default {
    path: '/movie',
    component: () => import('@/views/Movie'),
    children: [
        {path: 'city', component: () => import('@/components/city')},
        {path: 'now', component: () => import('@/components/now')},
        {path: 'coming', component: () => import('@/components/coming')},
        {path: 'search', component: () => import('@/components/search')},
        {path: '/movie', redirect: '/movie/now'}

    ]
}