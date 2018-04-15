<template>
  <div class="container">
    <app-header></app-header>
    <transition name="flip" mode="out-in">
      <router-view></router-view>
    </transition>
    {{ 10000000 | addCommasToNumber('.') }}
  </div>
</template>

<script>
  import Home from './components/Home.vue'
  import Header from './components/Header.vue'

  export default {
    components: {
      appHeader: Header,
      appHome: Home
    },
    created() {
      this.$store.dispatch('initStocks')
    }

  }
</script>

<style scoped>
  .flip-enter-active {
    animation: flipInY;
    animation-duration: 0.70s;
  }

  .flip-leave-active {
    animation: flipOutY;
    animation-duration: 0.25s;
  }


  @-webkit-keyframes flipInY {
    from {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 0;
    }

    40% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
      transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }

    60% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
      transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
      opacity: 1;
    }

    80% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
      transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    }

    to {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }
  }

  @keyframes flipInY {
    from {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 0;
    }

    40% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
      transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }

    60% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
      transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
      opacity: 1;
    }

    80% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
      transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    }

    to {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }
  }

  .flipInY {
    -webkit-backface-visibility: visible !important;
    backface-visibility: visible !important;
    -webkit-animation-name: flipInY;
    animation-name: flipInY;
  }

  @-webkit-keyframes flipOutX {
    from {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }

    30% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      opacity: 1;
    }

    to {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      opacity: 0;
    }
  }

  @-webkit-keyframes flipOutY {
    from {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }

    30% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
      transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
      opacity: 1;
    }

    to {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      opacity: 0;
    }
  }

  @keyframes flipOutY {
    from {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }

    30% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
      transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
      opacity: 1;
    }

    to {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      opacity: 0;
    }
  }

  .flipOutY {
    -webkit-backface-visibility: visible !important;
    backface-visibility: visible !important;
    -webkit-animation-name: flipOutY;
    animation-name: flipOutY;
  }

</style>
