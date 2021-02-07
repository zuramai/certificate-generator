<template>
  <div>
    <Navbar/>
    <transition name="loading-page">
      <Nuxt />
    </transition>
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from '~/components/Navbar/Navbar.vue'
import Footer from '~/components/Footer/Footer.vue'

export default {
  components: {
    Navbar, Footer
  }
}
</script>