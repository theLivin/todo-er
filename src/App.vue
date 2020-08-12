<template>
  <v-app id="v-app">
    <Navbar />
    <v-main class="mx-4 mb-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",

  components: { Navbar },

  data: () => ({
    //
  }),
};
</script>

<style>
* {
  font-family: "Montserrat", sans-serif;
}
#v-app {
  background-color: #f5f5f5;
}
</style>
