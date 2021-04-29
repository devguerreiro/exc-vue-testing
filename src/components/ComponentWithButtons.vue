<template>
  <div>
    <button class="commit" @click="handleCommit">Commit</button>
    <button class="dispatch" @click="handleDispatch">Dispatch</button>
    <button class="namespaced-dispatch" @click="handleNamespacedDispatch">
      Namespaced dispatch
    </button>
  </div>
</template>

<script>
export default {
  name: "ComponentWithButtons",

  methods: {
    handleCommit: function() {
      this.$store.commit("testMutation", { msg: "Test Commit" });
    },
    handleDispatch: function() {
      this.$store.dispatch("testAction", { msg: "Test Dispatch" });
    },
    handleNamespacedDispatch: function() {
      this.$store.dispatch("namespaced/very/deeply/testAction", {
        msg: "Test Namespaced Dispatch"
      });
    }
  }
};
</script>
