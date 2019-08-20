<template>
  <section class="content">
    <div class="row center-block">
      
      <ul>
        <li v-for="item in data">
          {{item.a}}
        </li>
      </ul>


    </div>
  </section>
</template>
<script>
  import moment from 'moment'
  import {timeline} from '../../demo'
  const initialData = [{a:1}, {a:2},{a:3}]
  export default {
    name: 'Tasks',
    data() {
      return {
        data: initialData,
      }
    },
    computed: {
      today () {
        return moment().format('MMM Do YY')
      },
      timeline () {
        return timeline
      }
    }
  }
</script>

<style>
  .timeline-footer a.btn {
    margin-right: 10px;
  }
</style>
