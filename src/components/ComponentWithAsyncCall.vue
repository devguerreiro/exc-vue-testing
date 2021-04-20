<template>
  <div></div>
</template>

<script>
import axios from "axios";

export default {
  name: "ComponentWithAsyncCall",

  created() {
    this.makeApiCall();
  },

  methods: {
    makeApiCall: async () => {
      console.log("Making api call");
      await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    }
  }
};
</script>
