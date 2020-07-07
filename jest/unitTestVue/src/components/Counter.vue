<template>
  <div>
    <h1>{{count}}</h1>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++;
    }
  }
}
</script>
