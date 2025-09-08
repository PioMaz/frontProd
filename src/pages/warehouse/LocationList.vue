<template>
    <div class="itemList">
        <div class="content">
            <div>
                Enter location you want to search
                <v-text-field label="Label" variant="solo" v-model="itemName" @keydown.enter="submitValue(itemName)"
                    autofocus="true"></v-text-field>
                <div>
                    <v-btn icon="mdi-check" color="success" size="x-large" @click="submitValue(itemName)"></v-btn>
                </div>
            </div>

        </div>
        <div class="searchResult">
            <v-card class="mx-auto" max-width="600">
                <v-list>
                    <!-- section one -->
                    <v-list-item v-for="file in files" :key="file.id">
                        <div style="display: flex; width: 100%;">
                            <!-- Section one: Location -->
                            <div style="flex: 1; max-width: 33%; display: flex; flex-direction: column; justify-content: center;">
                                <v-list-item-subtitle>
                                    Location
                                </v-list-item-subtitle>
                                <v-list-item-title>
                                    {{ file.locations }}
                                </v-list-item-title>
                            </div>
                            <!-- Section two: Items -->
                            <div style="flex: 2; max-width: 66%;">
                                <v-table density="compact" style="width: 100%;">
                                    <thead>
                                        <tr>
                                            <th style="text-align: left;">NAME</th>
                                            <th style="text-align: left;">QUANTITY</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in file.items" :key="item.id">
                                            <td>{{ item.itemId }}</td>
                                            <td>{{ item.quantity }} psc</td>
                                        </tr>
                                    </tbody>
                                </v-table>
                            </div>
                        </div>
                    </v-list-item>
                    <v-divider></v-divider>
                </v-list>
            </v-card>
        </div>
    </div>

</template>

<script>

export default {
    name: "LocationListPage",
    data: () => ({
        itemName: "",
        files: [
            {
                id: 1,
                locations: "A1-00",
                items: [
                    { id: 101, itemId: "Item-A1-1", quantity: 5 },
                    { id: 102, itemId: "Item-A1-2", quantity: 3 },
                    { id: 103, itemId: "Item-A1-3", quantity: 7 }
                ]
            },
            {
                id: 2,
                locations: "A1-01",
                items: [
                    { id: 201, itemId: "Item-B2-1", quantity: 4 },
                    { id: 202, itemId: "Item-B2-2", quantity: 6 },
                    { id: 203, itemId: "Item-B2-3", quantity: 2 },
                    { id: 204, itemId: "Item-B2-4", quantity: 8 }
                ]
            },
            {
                id: 3,
                locations: "A1-02",
                items: [
                    { id: 301, itemId: "Item-C3-1", quantity: 9 },
                    { id: 302, itemId: "Item-C3-2", quantity: 1 },
                    { id: 303, itemId: "Item-C3-3", quantity: 5 },
                    { id: 304, itemId: "Item-C3-4", quantity: 3 },
                    { id: 305, itemId: "Item-C3-5", quantity: 7 }
                ]
            },
            {
                id: 4,
                locations: "A1-03",
                items: [
                    { id: 401, itemId: "Item-D4-1", quantity: 2 },
                    { id: 402, itemId: "Item-D4-2", quantity: 4 },
                    { id: 403, itemId: "Item-D4-3", quantity: 6 }
                ]
            },
            {
                id: 5,
                locations: "A1-04",
                items: [
                    { id: 501, itemId: "Item-E5-1", quantity: 8 },
                    { id: 502, itemId: "Item-E5-2", quantity: 3 },
                    { id: 503, itemId: "Item-E5-3", quantity: 5 },
                    { id: 504, itemId: "Item-E5-4", quantity: 7 }
                ]
            },
            {
                id: 6,
                locations: "A1-05",
                items: [
                    { id: 601, itemId: "Item-F6-1", quantity: 1 },
                    { id: 602, itemId: "Item-F6-2", quantity: 2 },
                    { id: 603, itemId: "Item-F6-3", quantity: 3 },
                    { id: 604, itemId: "Item-F6-4", quantity: 4 },
                    { id: 605, itemId: "Item-F6-5", quantity: 5 }
                ]
            },
            {
                id: 7,
                locations: "A1-06",
                items: [
                    { id: 701, itemId: "Item-G7-1", quantity: 6 },
                    { id: 702, itemId: "Item-G7-2", quantity: 7 },
                    { id: 703, itemId: "Item-G7-3", quantity: 8 }
                ]
            },
        ]
    }),
    methods: {
        submitValue(field) {
            console.log(field);
        },
    },
}
</script>

<style scoped>
.itemList {
    background-color: #fff;
}

.content {
    padding: 20px;
    background-color: #fff;
    /* border: 1px solid #ccc; */
    text-align: center;
}
</style>