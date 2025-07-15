import { createRouter, createWebHistory } from 'vue-router'
import sourceData from "@/HomePageTranslations.json"

const routes = [ 
  {
    path: "/home/:lang",
    name: "home",
    component: () => import("@/views/HomePage.vue"),
    beforeEnter(to, from) {
      const exists = Object.keys(sourceData).includes(to.params.lang);
      if (!exists) return {
        name: "NotFound",
        // allows keeping the URL while rendering a different page
        params: {pathMatch: to.path.split("/").slice(1)},
        query: to.query,
        hash: to.hash
      }
    },
    children: [
      {
        path: "",
        name: "homeChild",
        component: () => import("@/views/HomeCard.vue"),
        props: true
      }
    ]
  },
  {
  path: "/",
  redirect: "/home/en"
  },
  {
    path: "/home",
    redirect: "/home/en"
  },
  {
    path: "/countriesCards",
    name: "countriesCards",
    component: () => import("@/views/CountriesCards.vue")
  },
  {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import("@/views/NotFound.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Scroll behaviour option
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || new Promise((resolve) => {
      setTimeout(() => resolve({ top: 0 }), 300)
    })
  }
})

export default router
