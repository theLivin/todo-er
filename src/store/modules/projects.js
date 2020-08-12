const state = {
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
      title: "Testing with Jest",
      person: "theNamskov",
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
      title: "Learn Node",
      person: "Tomsin",
      due: "9th Aug 2020",
      status: "complete",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
    },
  ],
};

const getters = {
  allProjects: () => {
    return state.projects;
  },
};

const actions = {
  addNewProject: ({ commit }, newProject) => {
    commit("addToProjects", newProject);
  },
};
const mutations = {
  addToProjects(state, project) {
    let projects = state.projects;
    projects.push(project);
  },
};

// export module
export default {
  state,
  getters,
  actions,
  mutations,
};
