<template>
<div class="flexy-wrapper">
   
<div class="card" style="width: 18rem;">
          <dl>
            <dt>
              Planned Shipment
            </dt>
            <dd>
              The next planned shipment is in 30 days.
            </dd>
            <dt>
              Additional Cost: $0
            </dt>
            <dd>
              No additional cost associated.
            </dd>
            <dt>
              Benefit: Medium
            </dt>
            <dd>
              Additional options for procurement
            </dd>
            <dd>
              Lowest cost option
            </dd>
            <dt>
              Risk: Low
            </dt>
            <dd>
              The component you need is part of a high redundancy system.  The likelihood of failure for the redundant component within 30 days 3%.
            </dd>
          </dl> 
          <button type="button" class="btn btn-block btn-info"  @click="serialize">
            Button
          </button>
        </div>


<div class="card" style="width: 18rem;">
          <dl>
            <dt>
              Ship now - Economy
            </dt>
            <dd>
              You can ship this component from your preferred supplier in 60 days.
            </dd>
            <dt>
              Additional Cost:  $50
            </dt>
            <dd>
              The cost of economy shipping from your preferred supplier is $50.
            </dd>
            <dt>
              Benefit:  Low
            </dt>
            <dd>
              We have not found any benefits associated with this option.
            </dd>
            <dt>
              Risk:  Medium
            </dt>
            <dd>
              The component you need is part of a high redundancy system.  The likelihood of failure for the redundant component within 60 days is 7%.
            </dd>
          </dl> 
          <button type="button" class="btn btn-block btn-warning" @click="serialize">
            Button
          </button>
</div> 
  


<div class="card" style="width: 18rem;">
          <dl>
            <dt>
              Buy from nearby suppliers
            </dt>
            <dd>
              You can ship this component from a nearby supplier in 7 days
            </dd>
            <dt>
              Additional Cost: $71
            </dt>
            <dd>
              The cost of shipping from this supplier is $15.  The cost of purchasing this item is $55.
            </dd>
            <dt>
              Benefit:  Medium
            </dt>
            <dd>
              This component is highly likely to arrive on time.  Some mitigated risk in shipping complexity.
            </dd>
            <dt>
              Risk: Low
            </dt>
            <dd>
              This is a medium-tier component with a 2% higher risk of failure
            </dd>
          </dl> 
          <button type="button" class="btn btn-block btn-danger" @click="serialize">
            Button
          </button>
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
</style>
