<template>
  <div>
    {{ numbers }}
  </div>
</template>

<script>
export default {
  name: "NumberRenderer",

  props: {
    even: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    numbers: function() {
      const even = [];
      const odd = [];

      for (let i = 1; i < 10; i++) {
        if (i % 2 === 0) {
          even.push(i);
        } else {
          odd.push(i);
        }
      }

      return this.even === true ? even.join(", ") : odd.join(", ");
    }
  }
};
</script>
