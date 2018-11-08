<template>
  <div class="app">
    <Header/>
    <main>
      <b-container>
          <router-view></router-view>
      </b-container>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'Main',
  components: {
    Header,
    Footer
  }
}
</script>
