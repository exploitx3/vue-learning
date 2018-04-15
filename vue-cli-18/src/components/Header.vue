<template>
  <header>
    <h1>The Header Component</h1>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <router-link to="/" class="navbar-brand">Stock Trader</router-link>
        </div>

        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
            <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li><a>End Day</a></li>
            <li class="dropdown" @click="isDropdownOpen = !isDropdownOpen" :class="{open: isDropdownOpen}">
              <a href="#"
                 class="dropdown-toggle"
                 data-toggle="dropdown"
                 role="button" aria-haspopup="true"
                 aria-expanded="false">Dropdown
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li><a href="#">Save Data</a></li>
                <li><a href="#">Load Data</a></li>
                <li><a href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </header>

</template>

<script>
  export default {
    data: function () {
      return {
        isDropdownOpen: false
      }
    },

    methods: {},
    components: {},
    directives: {}
  }
</script>

<style>
</style>
