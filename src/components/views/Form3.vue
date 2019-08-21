<template>
    <section class="content">
    <div class="row flex-wrapper">

<div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body wrappy">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary" @click="serialize">Go somewhere</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>


<div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary" @click="serialize">Go somewhere</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>


<div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary" @click="serialize">Go somewhere</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>


    </div>
  </section>
</template>
<script>
  export default {
    methods: {
      serialize() {
        this.$router.push('/action4');
      },
    },
    mounted() { },
    name: 'Tasks',
    data() {
      return {
        label: 'Form3',
        showModal: false,
      }
    }
  }
</script>

<style>
.flex-wrapper {
  display: flex;
  flex-direction:row;
}

.wrappy {
  border: 1px solid black;
}
  .timeline-footer a.btn {
    margin-right: 10px;
  }
  .set {
    max-width: 40%;
    border: 1px solid black;
  }
</style>
