<template>
<div class="test-wrapper" @click="setVar">
   <div v-if="showModal">
      <transition name="modal">
         <div class="modal-mask">
            <div class="modal-wrapper">
               <div class="modal-dialog" role="document">
                  <div class="modal-content">
                     <div class="modal-header">
                        <h5 class="modal-title">ALERT!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" @click="showModal = false">&times;</span>
                        </button>
                     </div>
                     <div class="modal-body">
                        <p>Your inventory has dropped to <b><u>0</u></b> units.</p>

                        <p>Would you like to re-order?</p>
                     </div>
                     <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="proceed = false">No</button>
                        <button type="button" class="btn btn-success" @click="proceed">Yes</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </transition>
   </div>
</div>
</template>
<script>
  export default {
    mounted() {
      setTimeout(() => {
        this.showModal = true;
      }, this.countDown);
    },

    methods: {
      setVar() {
        this.showModal = true;
      },
      proceed() {
        this.$router.push('/start2');
      },
      serialize() {
        // this.$store.commit('setMultiple', {selection: 'BINGO'});
        this.$router.push('/start2');
      },
    },
    data() {
      return {
        label: 'Form4',
        showModal: false,
        countDown: 7000,
      }
    }
  }
</script>

<style>
.test-wrapper {
  background: url('/static/img/background_sap.jpg');
  margin: 0;
      position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}


</style>
