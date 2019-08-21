<template>
  <div id="app">
      <transition name="slidefun" mode="out-in">
        <router-view v-bind:key="$route.params.id"></router-view>
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

.slidefun-enter-active,
.slidefun-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.slidefun-enter,
.slidefun-leave-active {
  opacity: 0
}
</style>