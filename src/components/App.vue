<template>
  <div id="app">

    <transition name="fade" mode="out-in">
    <router-view></router-view>
    </transition>

  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        section: 'Head'
      }
    },
    methods: {
      logout () {
        this.$store.commit('SET_USER', null)
        this.$store.commit('SET_TOKEN', null)

        if (window.localStorage) {
          window.localStorage.setItem('user', null)
          window.localStorage.setItem('token', null)
        }

        this.$router.push('/login')
      }
    }
  }
</script>

<style>
.view > div  {
  transition: height 0.2s;
}

</style>