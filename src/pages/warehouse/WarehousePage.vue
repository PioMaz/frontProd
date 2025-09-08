<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12" sm="6" md="3" class="d-flex justify-center">
                <RouterLink to="/inventory-movement" exact-active-class="active">
                    <v-btn class="button-warehouse" color="primary">
                        Inventory movement
                    </v-btn>
                </RouterLink>

            </v-col>
            <v-col cols="12" sm="6" md="3" class="d-flex justify-center">
                <RouterLink to="/items-list" exact-active-class="active">
                    <v-btn class="button-warehouse" color="primary">
                        Items
                    </v-btn>
                </RouterLink>
            </v-col>
            <v-col cols="12" sm="6" md="3" class="d-flex justify-center">
                <RouterLink to="/location-list" exact-active-class="active">
                    <v-btn class="button-warehouse" color="primary">
                        Locations
                    </v-btn>
                </RouterLink>
            </v-col>
            <v-col cols="12" sm="6" md="3" class="d-flex justify-center">
                <v-btn class="button-warehouse" color="primary">
                    Work list
                </v-btn>
            </v-col>
            <v-col cols="12" sm="6" md="3" class="d-flex justify-center">
                <RouterLink to="/add-items" exact-active-class="active">
                    <v-btn class="button-warehouse" color="primary" prepend-icon="mdi-plus">
                        Add items
                    </v-btn>
                </RouterLink>
            </v-col>
            <v-col cols="12" sm="6" md="3" class="d-flex justify-center">
                <RouterLink to="/settings" exact-active-class="active">
                    <v-btn class="button-warehouse" color="primary" prepend-icon="mdi-cog">
                        Settings
                    </v-btn>
                </RouterLink>
            </v-col>
        </v-row>
        <router-view />
    </v-container>
</template>

<script>
export default {
    name: "WarehousePage",
    data: () => ({
    }),
}
</script>

<style scoped>
.button-warehouse {
    width: clamp(120px, 40vw, 300px) !important;
    height: clamp(120px, 40vw, 300px) !important;
    font-size: clamp(1rem, 2vw, 1.2rem);
    min-width: 0 !important;
    min-height: 0 !important;
    max-width: 100% !important;
    max-height: 100% !important;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media (max-width: 959px) {
    .button-warehouse {
        width: clamp(280px, 40vw, 400px) !important;
        height: clamp(120px, 40vw, 400px) !important;
    }
}
</style>