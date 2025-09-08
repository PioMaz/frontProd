<template>
    <div ref="fullscreenElement" class="fullscreen">
        <!-- <v-btn height="48" @click="toggleFullscreen; $router.push('/')">
            <v-icon icon="mdi-arrow-left" variant="plain"></v-icon>
        </v-btn> -->

        <!-- {{ locationA.value + '---' + locationA.status }}
        {{ itemId.value + '---' + itemId.status }}
        {{ quantity.value + '---' + quantity.status }}
        {{ locationB.value + '---' + locationB.status }} -->

        <div class="fullscreen-content"
            style="display: flex; justify-content: center; align-items: center; height: 80%;">
            <div v-if="!locationA.status">
                <h1 class="text-h5 text-center">Scan the location from which you are transferring items</h1>

                <v-text-field label="Label" variant="solo" v-model="locationA.value"
                    @keydown.enter="submitValue(locationA)" autofocus="true"></v-text-field>
                <div>
                    <!-- <v-btn height="48" @click="toggleFullscreen; $router.push('/')">
                        <v-icon icon="mdi-arrow-left" variant="plain"></v-icon>
                    </v-btn> -->

                    <v-btn icon="mdi-check" color="success" size="x-large" @click="submitValue(locationA)"> </v-btn>
                </div>
            </div>

            <div v-if="locationA.status && !itemId.status">
                Enter the item ID you want to transfer
                <v-text-field label="Label" variant="solo" v-model="itemId.value"
                    @keydown.enter="submitValue(itemId)" autofocus="true"></v-text-field>
                <div>
                    <v-btn icon="mdi-check" color="success" size="x-large" @click="submitValue(itemId)"></v-btn>
                </div>
            </div>

            <div v-if="locationA.status && itemId.status && !quantity.status">
                Enter the quantity of items you want to transfer
                <v-number-input :reverse="false" controlVariant="split" label="" :hideInput="false" :inset="false"
                    variant="solo" v-model="quantity.value" @keydown.enter="submitValue(quantity)" autofocus="true"></v-number-input>
                <div>
                    <v-btn icon="mdi-check" color="success" size="x-large" @click="submitValue(quantity)"></v-btn>
                </div>
            </div>

            <div v-if="locationA.status && itemId.status && quantity.status">
                Scan the location to which you are transferring items.
                <v-text-field label="Label" variant="solo" v-model="locationB.value"
                    @keydown.enter="submitValue(locationB)" autofocus="true"></v-text-field>
                <div>
                    <v-btn icon="mdi-check" color="success" size="x-large" @click="submitValue(locationB)"></v-btn>
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
import { ref, onMounted } from 'vue';
import { useFullscreen } from '@vueuse/core';

export default {
    name: "WarehousePage",
    data: () => ({
        locationA: { value: "", status: false },
        itemId: { value: "", status: false },
        quantity: { value: null, status: false },
        locationB: { value: "", status: false },
    }),
    setup() {
        const fullscreenElement = ref(null);
        const { isFullscreen, toggle } = useFullscreen(fullscreenElement);

        const toggleFullscreen = () => {
            toggle();
        };

        onMounted(() => {
            if (!isFullscreen.value) {
                toggle();
            }
        });

        return {
            fullscreenElement,
            isFullscreen,
            toggleFullscreen,
        };
    },
    methods: {
        clear() {
            const fields = [this.locationA, this.itemId, this.quantity, this.locationB];
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
.fullscreen {
    background-color: #fff;
}

.fullscreen-content {
    padding: 20px;
    background-color: #fff;
    /* border: 1px solid #ccc; */
    text-align: center;
}
</style>