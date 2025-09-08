<template>
    <div class="additems">

        <div class="additems-content"
            style="display: flex; justify-content: center; align-items: center; height: 80%;">
            <div v-if="!itemId.status">
                Enter the item ID you want to add
                <v-text-field label="Label" variant="solo" v-model="itemId.value"
                    @keydown.enter="submitValue(itemId)" autofocus="true"></v-text-field>
                <div>
                    <v-btn icon="mdi-check" color="success" size="x-large" @click="submitValue(itemId)"></v-btn>
                </div>
            </div>

            <div v-if="itemId.status && !quantity.status">
                Enter the quantity of items you want to add
                <v-number-input :reverse="false" controlVariant="split" label="" :hideInput="false" :inset="false"
                    variant="solo" v-model="quantity.value" @keydown.enter="submitValue(quantity)" autofocus="true"></v-number-input>
                <div>
                    <v-btn icon="mdi-check" color="success" size="x-large" @click="submitValue(quantity)"></v-btn>
                </div>
            </div>

            <div v-if="itemId.status && quantity.status">
                <h1 class="text-h5 text-center"> Scan the location to which you are adding items.</h1>

                <v-text-field label="Label" variant="solo" v-model="locationA.value"
                    @keydown.enter="submitValue(locationA)" autofocus="true"></v-text-field>
                <div>

                    <v-btn icon="mdi-check" color="success" size="x-large" @click="submitValue(locationA)"> </v-btn>
                </div>
            </div>
        </div>

        <v-btn class="flex-grow-1" height="48" variant="tonal" block @click="clear(); $router.push('/')"
            style="position: absolute; bottom: 0px;">
            Cancel
        </v-btn>
    </div>

</template>

<script>

export default {
    name: "AddItemsPage",
    data: () => ({
        locationA: { value: "", status: false },
        itemId: { value: "", status: false },
        quantity: { value: 0, status: false },
    }),
    methods: {
         clear() {
            const fields = [this.locationA, this.itemId, this.quantity];
            fields.forEach(field => {
                field.value = typeof field.value === 'number' ? null : "";
                field.status = false;
            });
        },
        submitValue(field) {
            if (field && field.value !== "" && field.value !== null) {
                field.status = true;
            } else {
                field.status = false;
            }
        },
    },
}
</script>

<style scoped>
.additems {
    background-color: #fff;
}

.additems-content {
    padding: 20px;
    background-color: #fff;
    /* border: 1px solid #ccc; */
    text-align: center;
}
</style>