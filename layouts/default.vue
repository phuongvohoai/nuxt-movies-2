<template>
  <div>
    <transition name="slidedown">
      <SearchForm v-if="$search.searchOpen" />
    </transition>

    <Nav />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import SearchForm from '~/components/global/SearchForm'
import Nav from '~/components/global/Nav'
import Footer from '~/components/global/Footer'

export default {
  components: {
    SearchForm,
    Nav,
    Footer
  }
}
</script>
