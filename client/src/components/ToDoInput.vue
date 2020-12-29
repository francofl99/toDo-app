<template> 

</template>

<script>
export default {
  name: "ToDoInput",

  methods: {
    addToDo() {
      this.$store.dispatch("addToDo", this.newToDo);
    },
  },

  data: () => ({
    newToDo: "",
  }),
};
</script>

<style></style>
