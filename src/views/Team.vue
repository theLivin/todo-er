<template>
  <div class="team">
    <h2 class="grey--text">Team</h2>

    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="member in team" :key="member.id">
          <v-card class="text-center ma-3 pa-3">
            <v-avatar size="100" class="pa=3">
              <img :src="member.avatar" :alt="member.name" />
            </v-avatar>
            <v-card-text>
              <h2 class="font-weight-regular">{{member.name}}</h2>
              <div class="grey--text ma-2 pa-2">
                <v-chip>
                  <v-icon left>{{member.icon}}</v-icon>
                  {{member.skill}}
                </v-chip>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn icon v-if="member.repo" :href="member.repo" target="_blank">
                <v-icon>mdi-github</v-icon>
              </v-btn>

              <v-spacer></v-spacer>
              <v-btn icon @click="toggleNotify(member)">
                <v-icon class="notification" v-if="member.notify">mdi-bell-ring</v-icon>
                <v-icon v-else>mdi-bell-outline</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Team",
  components: {},
  data() {
    return {
      team: [
        {
          id: 1,
          name: "theLivin",
          icon: "mdi-language-javascript",
          skill: "Vue.js",
          avatar: "/avatars/avatar-1.png",
          repo: "https://github.com/theLivin",
          notify: true,
        },
        {
          id: 2,
          name: "Tomsin",
          icon: "mdi-language-python",
          skill: "Django",
          avatar: "/avatars/avatar-4.png",
          repo: "https://github.com/eothompson",
          notify: false,
        },
        {
          id: 3,
          name: "Zizi",
          icon: "mdi-android",
          skill: "Java",
          avatar: "/avatars/avatar-3.png",
          repo: "https://github.com/or33",
          notify: true,
        },
        {
          id: 4,
          name: "theNamskov",
          icon: "mdi-nodejs",
          skill: "Node.js",
          avatar: "/avatars/avatar-5.png",
          repo: "https://github.com/theNamskov",
          notify: true,
        },
        {
          id: 5,
          name: "Bolo",
          icon: "mdi-language-php",
          skill: "Laravel",
          avatar: "/avatars/avatar-2.png",
          notify: false,
        },
        {
          id: 6,
          name: "Ekow",
          icon: "mdi-camera",
          skill: "Photography",
          avatar: "/avatars/avatar-6.png",
          notify: false,
        },
      ],
    };
  },
  methods: {
    toggleNotify(target) {
      target.notify = !target.notify;
    },
  },
};
</script>


<style>
.notification {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>