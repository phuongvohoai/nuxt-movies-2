<template>
  <div>
    <button class="view-copyright" @click="setYear">View copyright</button>
    <p v-if="year">&copy; {{ year }}. All rights reserved.</p>
  </div>
</template>

<script>
const moment = () => import('moment')

export default {
  data() {
    return { year: '' }
  },
  methods: {
    setYear() {
      this.year = moment().format('YYYY')
    },
  },
}
</script>

<style scoped>
.view-copyright {
  font-size: 1.4rem;
}
</style>