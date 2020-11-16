<template>
  <v-app>
    <v-img src='../assets/3164373.jpg'>
      <v-card width="400px" class="mx-auto my-5">
        <v-card-title class="pb-0">
          <h1 class="mx-auto mb-5"><v-img
          alt="Otto Logo"
          class="shrink mr-2"
          contain
          src="../assets/otto.jpg"
          transition="scale-transition"
          width="180"
        /></h1>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              color="indigo"
              label="Usuario"
              prepend-icon="mdi-account-circle"
              v-model="user"
            />
            <v-text-field
              color="indigo"
              label="Contraseña"
              :type="showPassword ? 'text' : 'password'"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              v-model="password"
            />
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn dark color="indigo" @click="login">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-img>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import firebase from "firebase";
export default {
  data: () => ({
    user: "",
    password: "",
    showPassword: false,
  }),
  methods: {
    ...mapActions(["setCurrentUser"]),
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user, this.password)
        .then(() => {
          this.setCurrentUser(firebase.auth().currentUser);
          this.$router.push("/");
        })
        .catch(() => {
          alert("no no no");
        });
    },
  },
};
</script>
