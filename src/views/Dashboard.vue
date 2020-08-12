<template>
  <div class="dashboard">
    <h2 class="grey--text">Dashboard</h2>

    <v-container class="my-2">
      <v-row>
        <v-col>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                text
                icon
                @click="sortProjectsById()"
              >
                <v-icon>{{ sortByIdIcon }}</v-icon>
              </v-btn>
            </template>
            <span>Sort</span>
          </v-tooltip>

          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                text
                @click="sortProjectsBy('title')"
              >
                <v-icon left>mdi-folder</v-icon>
                <small>by project</small>
              </v-btn>
            </template>
            <span>Sort by project title</span>
          </v-tooltip>

          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                text
                @click="sortProjectsBy('person')"
              >
                <v-icon left>mdi-account</v-icon>
                <small>by person</small>
              </v-btn>
            </template>
            <span>Sort projects by person's name</span>
          </v-tooltip>
        </v-col>
      </v-row>

      <v-card
        tile
        flat
        class="grey lighten-4"
        v-for="project in allProjects"
        :key="project.id"
      >
        <v-row no-gutters :class="`pa-2 project ${project.status}`">
          <v-col cols="12" md="6">
            <small class="grey--text">Project Title</small>
            <div>{{ project.title }}</div>
          </v-col>

          <v-col cols="6" sm="4" md="2">
            <small class="grey--text">Person</small>
            <div>{{ project.person }}</div>
          </v-col>

          <v-col cols="6" sm="4" md="2">
            <small class="grey--text">Due by</small>
            <div>{{ project.due }}</div>
          </v-col>

          <v-col cols="2" sm="4" md="2">
            <div class="text-right">
              <v-chip
                small
                :style="{ backgroundColor: statusColor(project.status) }"
                class="white--text"
                >{{ project.status }}</v-chip
              >
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  components: {},
  data() {
    return {
      isIdAscending: true,
      sortByIdIcon: "mdi-sort-descending",
    };
  },
  methods: {
    statusColor(status) {
      const colors = {
        complete: "#3cd1c2",
        ongoing: "orange",
        overdue: "tomato",
      };

      return colors[status];
    },
    sortProjectsById() {
      if (this.isIdAscending) {
        // sort in descenging order
        this.allProjects.sort((a, b) => (a["id"] > b["id"] ? -1 : 1));
        this.isIdAscending = false;
        // change icon
        this.sortByIdIcon = "mdi-sort-ascending";
      } else {
        // sort in ascending order
        this.allProjects.sort((a, b) => a["id"] - b["id"]);
        this.isIdAscending = true;
        // change icon
        this.sortByIdIcon = "mdi-sort-descending";
      }
    },
    sortProjectsBy(pref) {
      this.allProjects.sort((a, b) => {
        let newA = a[pref].toUpperCase();
        let newB = b[pref].toUpperCase();

        if (newA < newB) return -1;
        if (newA > newB) return 1;

        return 0;
      });
    },
  },
  computed: {
    ...mapGetters(["allProjects"]),
  },
};
</script>

<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}

.project.ongoing {
  border-left: 4px solid orange;
}

.project.overdue {
  border-left: 4px solid tomato;
}
</style>
