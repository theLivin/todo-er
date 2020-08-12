<template>
  <div class="projects">
    <h2 class="grey--text">Projects</h2>

    <v-container>
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.id">
          <v-expansion-panel-header>{{
            project.title
          }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div>
              <div class="ma-2 ml-0 grey--text">
                <small>due by {{ project.due }}</small>
              </div>
              <div>{{ project.description }}</div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Projects",
  components: {},
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Build something in Vue",
          person: "theLivin",
          due: "12th Aug 2020",
          status: "ongoing",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          id: 2,
          title: "Learn Jest",
          person: "theLivin",
          due: "9th Aug 2020",
          status: "complete",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          id: 3,
          title: "Learn Vue",
          person: "Zizi",
          due: "10th Aug 2020",
          status: "overdue",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          id: 4,
          title: "Practice Node",
          person: "theLivin",
          due: "9th Aug 2020",
          status: "complete",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
      ],
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter((project) => project.person === "theLivin");
    },
  },
};
</script>
