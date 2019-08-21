<template>
<div class="flexy-wrapper">
   
<div class="card card-item">
  <div class="card-header">
      Planned Shipment
  </div>
  <div class="card-body">
    <h5 class="card-title">The next planned shipment is in <u>30</u> days.</h5>
    <p class="card-text">
      <div class="cheater-row">
        <div>Additional Cost:</div><div>$0</div>
      </div>
      <ul><li>No additional cost associated.</li></ul>
      
      <div class="cheater-row">
        <div>Benefit:</div><div>Medium</div>
      </div>
      <ul>
        <li>Additional options for procurement</li>
        <li>Lowest cost option</li>
      </ul>

      <div class="cheater-row">
        <div>Risk:</div><div>Low</div>
      </div>
      <ul>
        <li>The component you need is part of a high redundancy system.  The likelihood of failure for the redundant component within 60 days is 7%.</li>
      </ul>
      <div class="col-md-12 text-center"> 
        <a href="#" class="btn btn-primary text">Go somewhere</a>
      </div>
  </div>
</div>



<div class="card card-item">
  <div class="card-header">
              Ship now - Economy
  </div>
  <div class="card-body">
    <h5 class="card-title">You can ship this component from your preferred supplier in <u>60</u> days.</h5>
    <p class="card-text">
      <div class="cheater-row">
        <div>Additional Cost:</div><div>$50</div>
      </div>
      <ul><li>The cost of economy shipping from your preferred supplier is $50.</li></ul>
      
      <div class="cheater-row">
        <div>Benefit:</div><div>Low</div>
      </div>
      <ul>
        <li>We have not found any benefits associated with this option.</li>

      </ul>

      <div class="cheater-row">
        <div>Risk:</div><div>Medium</div>
      </div>
      <ul>
        <li>The component you need is part of a high redundancy system.  The likelihood of failure for the redundant component within 30 days 3%.</li>
      </ul>
      <div class="col-md-12 text-center"> 
        <a href="#" class="btn btn-primary text">Go somewhere</a>
      </div>
  </div>
</div>




<div class="card card-item">
  <div class="card-header">
              Buy from nearby suppliers
  </div>
  <div class="card-body">
    <h5 class="card-title">You can ship this component from your preferred supplier in <u>7</u> days.</h5>
    <p class="card-text">
      <div class="cheater-row">
        <div>Additional Cost:</div><div>$71</div>
      </div>
      <ul><li>The cost of shipping from this supplier is $15.  The cost of purchasing this item is $55.</li></ul>
      
      <div class="cheater-row">
        <div>Benefit:</div><div>Medium</div>
      </div>
      <ul>
        <li>This component is highly likely to arrive on time.  Some mitigated risk in shipping complexity.</li>
      </ul>

      <div class="cheater-row">
        <div>Risk:</div><div>Low</div>
      </div>
      <ul>
        <li>This is a medium-tier component with a 2% higher risk of failure</li>
      </ul>
      <div class="col-md-12 text-center"> 
        <a href="#" class="btn btn-primary text">Go somewhere</a>
      </div>
  </div>
</div>




</div>

</template>
<script>
  export default {
    methods: {
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
        active: 0,
        label: 'Form3',
        showModal: false,
      }
    }
  }
</script>

<style>
.flexy-wrapper {
  display: flex;
  flex-direction:row;
  background: beige;
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
