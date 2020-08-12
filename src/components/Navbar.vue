<template>
  <nav>
    <!-- Snackbar -->
    <v-snackbar top v-model="snackbar" timeout="3000">
      New project added successfully

      <template v-slot:action="{ attrs }">
        <v-btn dark text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <!-- Top Navigation Bar -->
    <v-app-bar app flat>
      <v-app-bar-nav-icon @click="toggleNavigationDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-black">Todo</span>
        <span class="font-weight-light">er</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- Menu -->
      <v-menu offset-y>
        <!-- Toggler -->
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            <v-icon left>mdi-arrow-down-drop-circle-outline</v-icon>Menu
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.id"
            router
            :to="link.route"
          >
            <v-list-item-content>{{ link.text }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- Signout -->
      <v-btn color="grey" outlined class="ml-2">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <!--  Navigation Bar On The Side-->
    <v-navigation-drawer app v-model="drawer" color="#555555" dark>
      <v-col cols="12" class="d-flex flex-column align-center mt-5">
        <v-avatar size="100">
          <img src="/avatars/avatar-1.png" alt="avatar" />
        </v-avatar>
        <h2 class="white--text pa-3 font-weight-regular">theLivin</h2>

        <!-- Dialog -->
        <Dialog @openSnackbar="snackbar = true" />
      </v-col>

      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.id"
          router
          :to="link.route"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>{{ link.text }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Dialog from "./Dialog";

export default {
  name: "Navbar",
  components: { Dialog },
  data() {
    return {
      drawer: false,
      snackbar: false,
      links: [
        { id: 1, icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { id: 2, icon: "mdi-folder", text: "Projects", route: "/projects" },
        { id: 3, icon: "mdi-account-multiple", text: "Team", route: "/team" },
      ],
    };
  },
  methods: {
    toggleNavigationDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style></style>
