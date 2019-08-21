<template>
<div class="start3-wrapper">
  <h1>Confirmation + Insights</h1>

      <p>You have chosen shipping option... <b><u>{{$store.state.purchaseChoice || defongo }}</u></b></p>
      <i>Status: Your order has been processed through SAP and a confirmation notification has been sent to your devices</i>
      <br/>

      <p>
      Our system is constantly learning and improving in order to provide you with the most relevant and powerful suggestions available. You are an important part of this effort, so before you go we would like to know what is your <b>top reason</b> for the choice you made today?

      </p>  


      

      </p>
      Lowe additional cost, lower risk, increase benefit  
    
      We're building a system that gets smarter, could 


<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">
    Lowest/lower cost
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
    Lowest/lower risk
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
    High benefit/advantage
  </label>
</div>




      <button class="btn btn-primary" @click="restart">Go to dashboard</button>
</div>
</template>

<script>
  export default {
    methods: {
      restart() {
        this.$router.push('/start');
      },
      select(item) {
          this.$router.push('/start3');
        // this.active = Number(item);
      },
      serialize() {
        this.$router.push('/start3');
      },
    },
    mounted() { },
    name: 'Tasks',
    data() {
      return {
        showBox: false,
        defongo: 'Ship now - Economy',
        active: 0,
        label: 'Form3',
        showModal: false,
      }
    }
  }
</script>

<style>
.start3-wrapper {
  background: beige;
  height: 100vh;
  padding: 2%;
}
.card-item > .card-header {
  font-weight: 600;
  font-size: 1.4em;
}
.cheater-row {
  display: flex;
  justify-content: space-between;
}

.cheater-row > div {
  font-weight: 800;
}

.card-item {
  padding: 2%;
}
</style>
