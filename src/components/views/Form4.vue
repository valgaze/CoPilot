<template>
    <section class="content">
    <div class="row center-block">
      <h1 class="text-center">Form4</h1>
      <button @click="serialize">Start over</button>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'Form4',
    methods: {
      serialize() {
        this.$router.push('/action1');
      },
    },
    data() {
      return {
        label: 'Form4'
      }
    }
  }
</script>

<style>
  .timeline-footer a.btn {
    margin-right: 10px;
  }
</style>
