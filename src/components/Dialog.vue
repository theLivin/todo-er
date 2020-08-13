<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn small outlined color="white lighten-2" dark v-bind="attrs" v-on="on">Add New Project</v-btn>
      </template>

      <v-card>
        <v-card-title class="grey darken-2 white--text">Add New Project</v-card-title>

        <v-card-text>
          <v-form class="ma-3" ref="form">
            <v-text-field
              prepend-icon="mdi-folder"
              v-model="title"
              label="Title"
              :rules="inputRules"
              autocomplete="off"
            ></v-text-field>
            <v-textarea
              prepend-icon="mdi-lead-pencil"
              v-model="description"
              rows="1"
              auto-grow
              label="Description"
              :rules="inputRules"
              autocomplete="off"
            ></v-textarea>

            <!-- Date picker -->
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  prepend-icon="mdi-calendar"
                  label="Due Date"
                  v-bind="attrs"
                  v-on="on"
                  :value="dueDate"
                  :rules="[(v) => v.length > 3 || 'Select a due date']"
                  autocomplete="off"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date"></v-date-picker>
            </v-menu>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-btn depressed color="error" @click="dialog = false">Close</v-btn>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!isValidated"
            :loading="loading"
            depressed
            color="success"
            @click="onSubmit"
          >Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import format from "date-fns/format";

export default {
  name: "Dialog",
  data() {
    return {
      title: "",
      description: "",
      date: null,
      inputRules: [(v) => v.length > 3 || "Must type at least 3 characters"],
      loading: false,
      dialog: false, //dialog displayed status
    };
  },
  methods: {
    ...mapActions(["addNewProject"]),
    onSubmit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        setTimeout(() => {
          const project = {
            title: this.title,
            person: "theLivin",
            description: this.description,
            status: "ongoing",
            due: this.dueDate,
          };
          this.addNewProject(project);
          this.loading = false;
          this.dialog = false;
          this.$emit("openSnackbar");
          this.title = "";
          this.description = "";
          this.date = null;
        }, 1200);
      }
    },
  },
  computed: {
    dueDate() {
      return this.date ? format(new Date(this.date), "do MMM yyyy") : "";
    },
    isValidated() {
      return (
        this.title.length > 3 &&
        this.dueDate.length > 3 &&
        this.description.length > 3
      );
    },
  },
};
</script>
