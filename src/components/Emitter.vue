<template>
  <div></div>
</template>

<script>
export default {
  name: "Emitter",

  methods: {
    emitEvent: function() {
      this.$emit("myEvent", "name", "password");
    }
  }
};
</script>
