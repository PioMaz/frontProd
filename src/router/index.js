import { createRouter, createWebHashHistory } from "vue-router";
import WarehousePage from "@/pages/warehouse/WarehousePage.vue";
import ProductionPage from "@/pages/prod/ProdPage.vue";
import PlanningPage from "@/pages/planning/PlanPage.vue";
import ForgotPassword from "@/ForgotPassword.vue";
import InventoryMovement from "@/pages/warehouse/InventoryMovement.vue";
import ItemsList from "@/pages/warehouse/ItemsList.vue";
import LocationList from "@/pages/warehouse/LocationList.vue";
import AddItems from "@/pages/warehouse/AddItems.vue";
import SettingWarehouse from "@/pages/warehouse/SettingWarehouse.vue";

const routes = [
    {
        path: "/",

        children: [
            {
                path: "",
                name: "WarehousePage",
                component: WarehousePage,
                meta: {
                    title: "Warehouse",
                    //   requiresAuth: true,
                    //   role: ["admin", "user"],
                },
            },
            {
                path: "inventory-movement",
                name: "InventoryMovement",
                component: InventoryMovement,
                meta: {
                    title: "Inventory Movement",
                    //   requiresAuth: true,
                    //   role: ["admin", "user"],
                },
            },
            {
                path: "items-list",
                name: "ItemsListPage",
                component: ItemsList,
                meta: {
                    title: "Items List",
                    //   requiresAuth: true,
                    //   role: ["admin", "user"],
                },
            },
            {
                path: "location-list",
                name: "LocationListPage",
                component: LocationList,
                meta: {
                    title: "Location List",
                    //   requiresAuth: true,
                    //   role: ["admin", "user"],
                },
            },
            {
                path: "add-items",
                name: "AddItemsPage",
                component: AddItems,
                meta: {
                    title: "Add Items",
                    //   requiresAuth: true,
                }
            },
            {
                path: "settings",
                name: "SettingsWarehouse",
                component: SettingWarehouse,
                meta:{
                    title: "Settings",
                    // requiresAuth: true,
                }
            }

        ],
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
    {
        path: "/forgot-password",
        name: "ForgotPassword",
        component: ForgotPassword,
        meta: {
            title: "Forgot Password",
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
