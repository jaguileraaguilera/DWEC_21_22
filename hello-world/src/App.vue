<template>
  <nota />
  <button @click="login">LoginGoogle</button>
  <micomponente v-show="mostrar" titulo="Stars Wars" @llegada = "muestra"></micomponente>
  <micomponente titulo="eventos" @llegada = "muestra" />
  <img alt="Vue logo" src="./assets/logo.png">
  <img src="./assets/dormido.jpg">
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import micomponente from './components/micomponente.vue';
import nota from './components/nota.vue';
import './firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


export default {
  name: 'App',

  data () {
    return {
      mostrar : true
    }
  },

  components: {
    micomponente, nota
  },

  methods: {
    muestra(tit) {
      console.log(tit);
      this.mostrar = false;
    },
    login(){
      const provider = new GoogleAuthProvider();

      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result);
          // This gives you a Google Access Token. You can use it to access the Google API.
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;
          // The signed-in user info.
          // const user = result.user;
          // ...
        }).catch((error) => {
          console.log(error.message);
          // Handle Errors here.
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // The email of the user's account used.
          // const email = error.email;
          // The AuthCredential type that was used.
          // const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
