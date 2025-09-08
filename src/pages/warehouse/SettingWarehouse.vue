<template>
    <div class="settingwarehouse">
        <v-row>
            <v-col>
                <v-btn icon="mdi-arrow-left" color="primary" size="x-large" @click="$router.push('/')"></v-btn>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col>
                <h1> Warehouse Settings Page </h1>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "SettingWarehouse",
    data: () => ({

    }),
    methods: {

    },
}

</script>

<style scoped>
.settingwarehouse {
    padding: 16px;
}
</style>