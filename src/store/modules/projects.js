import db from "../firebase/";

db.collection("projects").onSnapshot(function(docs) {
  const changes = docs.docChanges();

  changes.forEach((change) => {
    if (change.type === "added") {
      state.projects.push({
        ...change.doc.data(),
        id: change.doc.id,
      });
    }
  });
});

const state = {
  projects: [],
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
    db.collection("projects")
      .add(project)
      .then(function() {
        console.log("New project added successfully...");
      })
      .catch(function(error) {
        console.log(error);
      });
  },
};

// export module
export default {
  state,
  getters,
  actions,
  mutations,
};
