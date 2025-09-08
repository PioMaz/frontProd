<template>
    <div class="itemList">

        <div id="content" class="content">

            <v-text-field label="Search item by name" variant="solo" prepend-inner-icon="mdi-magnify" clearable
                v-model="itemName" @keydown.enter="submitValue(itemName)" autofocus="true" hide-details="true"
                density="compact">
                <template v-slot:append>
                    <v-btn icon="mdi-send-outline" color="success" variant="elevated" size="x-small"
                        @click="submitValue(itemName)"></v-btn>
                </template>
            </v-text-field>

        </div>
        <div class="searchResult">
            <v-card class="mx-auto" max-width="600">
                <v-list>
                    <v-list-item v-for="file in files" :key="file.id">
                        <template v-slot:prepend>
                            <v-list-item-title>
                                {{ file.itemId }}
                            </v-list-item-title>
                        </template>
                        <v-list-item>
                            <v-list-item-subtitle>Location: {{ file.locations }}</v-list-item-subtitle>
                        </v-list-item>

                        <template v-slot:append>
                            <!-- <v-btn color="grey-lighten-1" icon="mdi-information" variant="text"></v-btn> -->
                            <v-list-item>
                                <v-list-item-subtitle>Quantity: {{ file.quantity }}</v-list-item-subtitle>
                            </v-list-item>
                        </template>
                        <v-divider></v-divider>
                    </v-list-item>
                </v-list>
            </v-card>
        </div>

    </div>

</template>

<script>

export default {
    name: "ItemsListPage",
    data: () => ({
        itemName: "",
        files: [
            { id: 1, itemId: "ITEM123", quantity: 10, locations: "A1" },
            { id: 2, itemId: "ITEM123", quantity: 5, locations: "C3" },
            { id: 3, itemId: "ITEM123", quantity: 8, locations: "A2" },
            { id: 4, itemId: "ITEM123", quantity: 12, locations: "B1" },
            { id: 5, itemId: "ITEM123", quantity: 7, locations: "E5" },
            { id: 6, itemId: "ITEM123", quantity: 15, locations: "G7" },
            { id: 7, itemId: "ITEM123", quantity: 9, locations: "H8" },
            { id: 8, itemId: "ITEM123", quantity: 6, locations: "J10" },
            { id: 9, itemId: "ITEM123", quantity: 11, locations: "K11" },
            { id: 10, itemId: "ITEM123", quantity: 13, locations: "M13" },
            { id: 11, itemId: "ITEM123", quantity: 10, locations: "A1" },
            { id: 12, itemId: "ITEM123", quantity: 5, locations: "C3" },
            { id: 13, itemId: "ITEM123", quantity: 8, locations: "A2" },
            { id: 14, itemId: "ITEM123", quantity: 12, locations: "B1" },
            { id: 15, itemId: "ITEM123", quantity: 7, locations: "E5" },
            { id: 16, itemId: "ITEM123", quantity: 15, locations: "G7" },
            { id: 17, itemId: "ITEM123", quantity: 9, locations: "H8" },
            { id: 18, itemId: "ITEM123", quantity: 6, locations: "J10" },
            { id: 19, itemId: "ITEM123", quantity: 11, locations: "K11" },
            { id: 20, itemId: "ITEM123", quantity: 13, locations: "M13" }
        ]
    }),
    created() {
        window.addEventListener("scroll", this.actionScroll);
    },
    methods: {
        actionScroll() {
            const scroll = window.scrollY;
            const searchInput = document.getElementById("content");

            if (!searchInput) return;

            if (scroll > 150) {
                searchInput.classList.add("content-padding-down");
                searchInput.classList.remove("content-padding-up");
                searchInput.style.transition = "padding 0.3s";
            } else {
                searchInput.classList.add("content-padding-up");
                searchInput.classList.remove("content-padding-down");
                searchInput.style.transition = "padding 0.3s";
            }
        },
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
    border-bottom: 1px solid #ccc;
    text-align: center;
    position: fixed;
    top: 48px;
    z-index: 10;
    width: 100%;
}

.content-padding-down {
    padding: 5px;
    border: none;
}

.content-padding-up {
    padding: 20px;
}

.searchResult {
    margin-top: 100px;
}
</style>