import { createRouter, createWebHashHistory } from "vue-router";
import WarehousePage from "@/pages/warehouse/WarehousePage.vue";
import ProductionPage from "@/pages/prod/ProdPage.vue";
import PlanningPage from "@/pages/planning/PlanPage.vue";


const routes = [
    {
        path: "/",
        name: "WarehousePage",
        component: WarehousePage,
        meta: {
            title: "Warehouse",
            //   requiresAuth: true,
            //   role: ["admin", "user"],
        },
    },
    {
        path: "/production",
        name: "ProductionPage",
        component: ProductionPage,
        meta: {
            title: "Production",
            //   requiresAuth: true,
            //   role: ["admin", "user"],
        },
    },
    {
        path: "/planning",
        name: "PlanningPage",
        component: PlanningPage,
        meta: {
            title: "Planning",
            //   requiresAuth: true,
            //   role: ["admin", "user"],
        },
    },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
