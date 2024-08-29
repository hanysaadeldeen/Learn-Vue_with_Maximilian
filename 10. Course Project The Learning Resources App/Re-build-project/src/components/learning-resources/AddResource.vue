<template>
  <base-Dialog
    @close="isDialogOpen = false"
    v-if="isDialogOpen"
    title="SomeThing Wrong Fill the Input Resource"
  >
    <template #default>
      <p>Unfortunatuly, At least one input value is invalid</p>
      <p>Please check all inputs</p>
    </template>
    <template #actions>
      <base-button @click="isDialogOpen = false">Cancel</base-button>
    </template>
  </base-Dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="Title">title</label>
        <input id="Title" name="title" type="text" ref="titleInput" />
      </div>

      <div class="form-control">
        <label for="desc"> description</label>
        <textarea
          id="desc"
          name="description"
          rows="3"
          ref="descriptionTextArea"
        ></textarea>
      </div>

      <div class="form-control">
        <label for="link">link</label>
        <input type="text" id="link" name="link" ref="linkInput" />
      </div>

      <base-button type="submit">Submit Data</base-button>
    </form>
  </base-card>
</template>

<script>
import BaseButton from "@/UI/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      isDialogOpen: false,
    };
  },

  inject: ["addNewresource"],

  methods: {
    submitData() {
      const title = this.$refs.titleInput.value;
      const description = this.$refs.descriptionTextArea.value;
      const link = this.$refs.linkInput.value;
      if (
        title.trim() === "" ||
        description.trim() === "" ||
        link.trim() === ""
      ) {
        this.isDialogOpen = true;
        return;
      }
      this.addNewresource(title, description, link);
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
  resize: none;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
