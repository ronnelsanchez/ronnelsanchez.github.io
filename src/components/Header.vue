<template>

<fixed-header :fixed.sync="isFixed">
  <header class="header" :class="{ 'scrolled': isFixed, 'responsive': expand }">
    <b-container>
      <b-row class="header-content">
        <div class="brand">
          <b-link to="/" exact>
            <img src="../assets/img/rs.svg" alt="" class="logo">
          </b-link>
        </div>
        <div class="toggle"  :class="{ 'open': expand }" @click="expand = !expand">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container_top-nav">
          <ul class="top-nav float-right">
            <li><b-link @click="expand = !expand" :to="{ path: '/' }" exact>Work</b-link></li>
            <li><b-link @click="expand = !expand" :to="{ path: '/about' }" exact>About</b-link></li>
            <li><b-link href="https://dribbble.com/ronnelsanchez">Dribbble</b-link></li>
            <li><b-link href="https://www.behance.net/ronnelsanchez">Behance</b-link></li>
            <li><b-link href="https://ph.linkedin.com/in/ronnelsanchez">Linkedin</b-link></li>
            <li><b-link @click="expand = !expand" :to="{ path: '/contact' }" exact>Contact</b-link></li>
          </ul>
        </div>
      </b-row>
    </b-container>
  </header>
</fixed-header>

</template>

<script>
import FixedHeader from '../_header.js'

export default {
  name: 'header',
  components: {
    FixedHeader
  },
  data () {
    return {
      isFixed: false,
      expand: false
    }
  }
}
</script>
