<template>
    <div class="login-form">
        <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
        </div>
        <form v-if="!sendEmail">

            <h5 class="mt-2 mb-4 text-center">FORGOT PASSWORD?</h5>

            <div class="text-subtitle-1 text-medium-emphasis pt-4">Type your email address</div>

            <v-text-field density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline"
                variant="outlined" hide-details></v-text-field>
            <v-btn class="mt-4" color="blue" size="small" block @click="sendEmail = true">
                Send email
            </v-btn>

        </form>
        <form v-if="sendEmail && !confirmed">

            <div class="text-subtitle-2 text-medium-emphasis mt-5 pt-4 mb-5 pb-5 text-center">We sent a verification
                code to your email
                address.
                <br>
                Please check your email and type the code below.
            </div>

            <v-otp-input :length="5" class="mb-5 pt-5" v-model="optInput"></v-otp-input>
            <v-btn class="mt-5" color="blue" size="small" block @click="confirmed = true">
                Veryfy code
            </v-btn>

            <h6 class="mt-2 mb-4 text-center text-caption">Did not receive the code? <span
                    style="color: #0686ff; cursor: pointer;" @click="resend()">Resend</span></h6>
        </form>
        <form v-if="sendEmail && confirmed">

            <h5 class="mt-2 mb-4 text-center">SET NEW PASSWORD</h5>

            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                New password
            </div>

            <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                density="compact" placeholder="New password" prepend-inner-icon="mdi-lock-outline" variant="outlined"
                @click:append-inner="visible = !visible"></v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                Confirm new password
            </div>

            <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                density="compact" placeholder="Confirm new password" prepend-inner-icon="mdi-lock-outline"
                variant="outlined" @click:append-inner="visible = !visible"></v-text-field>

            <v-btn class="mb-8" color="blue" size="small" block @click="backToLogin(); $router.push('/')">
                Submit
            </v-btn>

        </form>
        <v-snackbar v-model="snackbar" :timeout="timeout" color="success">
            {{ text }}
        </v-snackbar>
    </div>
</template>
<script>
export default {
    emits: ["loginAgain"],
    data: () => ({
        visible: false,
        sendEmail: false,
        confirmed: false,
        optInput: "",
        snackbar: false,
        text: "",
        timeout: 2000,
    }),
    methods: {
        resend() {
            this.snackbar = true;
            this.text = "Verification code has been resent to your email.";
            this.timeout = 3000;
            this.optInput = "";
        },
        backToLogin() {
            // this.snackbar = true;
            // this.text = "Your password has been changed successfully.";
            // this.timeout = 3000;
            this.$emit('loginAgain');
        }
    }
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

@media (max-width: 959px) {
    .background .shape {
        height: 80px;
        width: 80px;
    }

    .shape:first-child {
        left: 0px;
        top: -15px;
    }

    .shape:last-child {
        right: 0px;
        bottom: -15px;
    }
}
</style>