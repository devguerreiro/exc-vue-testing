<template>
  <div>
    <div class="username">{{ username }}</div>
  </div>
</template>

<script>
export default {
  name: "ComponentWithVuex",

  data: function() {
    return {
      username: this.$store.state.username
    };
  }
};
</script>
