<template>
    <section class="content">
    <div class="row center-block">
      <h1 class="text-center">Form1</h1>


      <h4>Select Options</h4>
      <div id='example-3' class="form-group form-check">
        <input type="checkbox" id="jack" value="Jack" v-model="multipleValues">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="multipleValues">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="multipleValues">
        <label for="mike">Mike</label>
        <br>
      </div>


      <h4>Select Options</h4>
      <div class="form-group">
      <select v-model="selection" class="form-control">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
       Selected value: {{selection}}
      </div>


      <h4>Checkbox Options</h4>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
          <label class="form-check-label" for="defaultCheck1">
            Default checkbox
          </label>
        </div>
      </div>



      <h4>Text area</h4>
      <div class="form-group">
        <textarea v-model="textareaModel" placeholder="Text, text, text" class="form-control"></textarea>
      </div>

    <h4>Radio Buttons</h4>
      <div class="form-group">
          <input type="radio" id="one" value="optiona" v-model="radioButton">
          <label for="one">option a</label>
          <br>
          <input type="radio" id="two" value="optionb" v-model="radioButton">
          <label for="two">option b</label>
          <br/>
          <input type="radio" id="two" value="optionc" v-model="radioButton">
          <label for="two">option c</label>
          <br>

        <alert v-if="radioButton=== 'optiona'" :dismissible="true"
               type="danger"
               :iconClasses="['fa', 'fa-check']"
               title="DONT CHOOSE OPTION A!">
          <span></span>
          <a href="https://github.com/misterGF/CoPilot" target="_blank">
            <i class="fa fa-reply fa-2x"></i>
          </a>
        </alert>

         <alert v-if="radioButton=== 'optionb'" :dismissible="true"
               type="success"
               :iconClasses="['fa', 'fa-check']"
               title="Good job choosing b!">
          <span></span>
          <a href="https://github.com/misterGF/CoPilot" target="_blank">
            <i class="fa fa-reply fa-2x"></i>
          </a>
        </alert>
      </div>

       <a href="#" @click="serialize" class="btn btn-primary form-control">Persist</a>


    </div>
  </section>
</template>
<script>
import Alert from '../widgets/Alert'

  export default {
    components: {
      Alert,
    },
    name: 'Tasks',
    data() {
      return {
        label: 'Form1',
        multipleValues: [],
        textareaModel: '',
        selection: null,
        radioButton: null,
      }
    },
    methods: {
      serialize() {

        const multipleValues = this.multipleValues;
        const radioButton = this.radioButton;
        const selection = this.selection;
        const textareaModel = this.textareaModel;

        const payload = {
          multipleValues,
          radioButton,
          selection,
          textareaModel,
        }
        this.$store.commit('setMultiple', payload);
        
        
        this.$router.push('/action2');
      },


    }
  }
</script>

<style>
  .timeline-footer a.btn {
    margin-right: 10px;
  }
</style>
