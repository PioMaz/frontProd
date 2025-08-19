<template>
    <div class="login-form">
        <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
        </div>
        <form>

            <div class="d-flex align-center justify-space-around">
                <v-avatar color="info" size="100">
                    <v-icon icon="mdi-account-hard-hat" style="font-size: 64px;"></v-icon>
                </v-avatar>
            </div>

            <h3 class="mt-2 mb-4">##LOGIN##</h3>

            <div class="text-subtitle-1 text-medium-emphasis">Email address</div>

            <v-text-field density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline"
                variant="outlined"></v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                Password

                <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer"
                    target="_blank">
                    Forgot password?</a>
            </div>

            <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                density="compact" placeholder="Enter your password" prepend-inner-icon="mdi-lock-outline"
                variant="outlined" @click:append-inner="visible = !visible"></v-text-field>

            <v-btn class="mb-8" color="blue" size="large" block @click="$emit('login')">
                Login
            </v-btn>

        </form>
    </div>
</template>
<script>
export default {
    emits: ["login"],
    data: () => ({
        visible: false,
    }),
}
</script>

<style scoped>
.background {
    width: 430px;
    height: 520px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
}

.background .shape {
    height: 200px;
    width: 200px;
    position: absolute;
    border-radius: 50%;
}

.shape:first-child {
    background: linear-gradient(#0686ff,
            #339cff);
    left: -80px;
    top: -80px;
}

.shape:last-child {
    background: linear-gradient(to right,
            #4f4f4f,
            #737373);
    right: -30px;
    bottom: -80px;
}

form {
    height: 520px;
    width: 400px;
    background-color: rgba(255, 255, 255, 0.13);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 50px 35px;
}

form * {
    letter-spacing: 0.5px;
    outline: none;
    border: none;
}

form h3 {
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
    color: #4f4f4f;
}

button {
    margin-top: 50px;
}

</style>