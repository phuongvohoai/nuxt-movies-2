<template>
  <p v-if="year">
    &copy; {{ year }}. All rights reserved.
  </p>
</template>

<script>
import moment from 'moment'

export default {
  data() {
    return { year: '' }
  },
  mounted() {
    this.year = moment().format('YYYY')
  },
}
</script>