<template>
  <v-app>
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Otto logo"
          class="shrink mr-2"
          contain
          src="./assets/ottokraus.png"
          transition="scale-transition"
          width="90"
        />
      </div>
      <div class="d-flex align-center">
        <v-img
          alt="Goliat"
          class="shrink mr-2"
          contain
          src="./assets/Goliat.png"
          transition="scale-transition"
          width="60"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn v-if="currentUser" text>
        <span class="mr-2" @click.prevent="logout">Cerrar Sesión</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view>
        </router-view>
    </v-main>
  </v-app>
</template>

<script>
import firebase from 'firebase'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'App',
  data: () => ({
  }),
  computed:{
    ...mapState(["currentUser"])
  },
  methods:{
    ...mapActions(["setCurrentUser"]),
    logout(){
      firebase.auth().signOut().then(()=>{
        this.setCurrentUser(null)
        this.$router.push('/login')
      })
    }
  },
  created(){
    this.setCurrentUser(firebase.auth().currentUser)
  }
};
</script>