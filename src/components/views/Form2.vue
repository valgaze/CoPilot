<template>
    <section class="content">
    <div class="row center-block">

    <a href="#" @click="serialize" class="btn btn-primary form-control">Persist</a>

      <h1 class="text-center">Form2</h1>
      <h4>Multiple values</h4>
      <div class="form-group">
        You chose...<br/>
        <alert v-for="name in $store.state.multipleValues" :dismissible="true"
               :iconClasses="[]"
               type="danger"               >
            <i class="fa fa-mail fa-2x"></i>{{name}}
        </alert>
      </div>

      <h4>Select Options</h4>
      <div class="form-group">
          <alert :dismissible="true"
              :iconClasses="[]"
               type="danger"               >
          <span></span>
            <i class="fa fa-mail fa-2x"></i>{{$store.state.selection}}
        </alert>
      </div>

      <h4>Select Options</h4>
      <div class="form-group">
          <alert :dismissible="true"
              :iconClasses="[]"
               type="danger"               >
          <span></span>
            <i class="fa fa-mail fa-2x"></i>{{$store.state.selection}}
        </alert>
      </div>

      <h4>Text area</h4>
      <div class="form-group">
          <alert :dismissible="true"
              :iconClasses="[]"
               type="danger"               >
          <span></span>
            <i class="fa fa-mail fa-2x"></i>{{$store.state.selection}}
        </alert>
      </div>

      <h4>Select Options</h4>
      <div class="form-group">
      </div>

      {{$store.state}}

    </div>
  </section>
</template>
<script>
import Alert from '../widgets/Alert'

  export default {
    methods: {
      serialize() {
        this.$router.push('/action3');
      },
    },
    components: {
      Alert,
    },
    name: 'Tasks',
    data() {
      return {
        label: 'Form2'
      }
    }
  }
</script>

<style>
  .timeline-footer a.btn {
    margin-right: 10px;
  }
</style>
