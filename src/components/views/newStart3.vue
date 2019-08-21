<template>
<div class="newstart3-wrapper">
  <h1>Confirmation + Insights</h1>

      <p>You have chosen shipping option... <b><u>{{$store.state.purchaseChoice || defongo }}</u></b></p>




      <alert :dismissible="true"
               type="success"
               :iconClasses="['fa', 'fa-id-success']"
               title="Supply issue with X572 Unit">
        <router-link to="/route1">
          <span>             <i class="fa fa-check fa-2x"></i>
 Status: Your order has been processed through SAP and a confirmation notification has been sent to your devices</span>
          </router-link>
        </alert>


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




      <button class="btn btn-primary" @click="restart">Submit and go to dashboard</button>
</div>
</template>

<script>
import Alert from '../widgets/Alert'

  export default {
    components: {
      Alert,
    },
    methods: {
      restart() {
        // alert('fire')
        this.$router.push('/');
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
.newstart3-wrapper {
  padding: 2%;
  /* background: beige;
  height: 100vh;
  padding: 2%; */
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
