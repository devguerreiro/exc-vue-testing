<template>
  <ComponentWithAsyncCall />
</template>

<script>
import ComponentWithAsyncCall from "./ComponentWithAsyncCall";

export default {
  name: "ParentWithAPICallChild",

  components: {
    ComponentWithAsyncCall
  }
};
</script>
