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
import SearchForm from '~/components/SearchForm'
import Nav from '~/components/Nav'
import Footer from '~/components/Footer'

export default {
  components: {
    SearchForm,
    Nav,
    Footer
  }
}
</script>
