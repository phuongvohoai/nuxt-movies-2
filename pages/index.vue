<template>
  <main class="main">
    <LazyHydrate when-idle>
      <Hero :item="featured" />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <ListingCarousel
        v-if="trendingMovies && trendingMovies.results.length"
        :title="trendingMoviesTitle"
        :view-all-url="trendingMoviesUrl"
        :items="trendingMovies"
      />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <ListingCarousel
        v-if="nowPlayingMovies && nowPlayingMovies.results.length"
        :title="nowPlayingMoviesTitle"
        :view-all-url="nowPlayingMoviesUrl"
        :items="nowPlayingMovies"
      />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <ListingCarousel
        v-if="upcomingMovies && upcomingMovies.results.length"
        :title="upcomingMoviesTitle"
        :view-all-url="upcomingMoviesUrl"
        :items="upcomingMovies"
      />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <ListingCarousel
        v-if="trendingTv && trendingTv.results.length"
        :title="trendingTvTitle"
        :view-all-url="trendingTvUrl"
        :items="trendingTv"
      />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <ListingCarousel
        v-if="topRatedTv && topRatedTv.results.length"
        :title="topRatedTvTitle"
        :view-all-url="topRatedTvUrl"
        :items="topRatedTv"
      />
    </LazyHydrate>
    <LazyHydrate when-visible>
      <ListingCarousel
        v-if="onTheAirTv && onTheAirTv.results.length"
        :title="onTheAirTvTitle"
        :view-all-url="onTheAirTvUrl"
        :items="onTheAirTv"
      />
    </LazyHydrate>
    <button class="view-policy" @click="viewPolicy">View policy</button>

    <LazyLargePolicyModal
      v-if="isShowPolicyModal"
      @close="isShowPolicyModal = !isShowPolicyModal"
    />
  </main>
</template>

<script>
import {
  getTrending,
  getMovie,
  getMovies,
  getTvShow,
  getTvShows,
  getListItem,
} from '~/utils/api'
import Hero from '~/components/Hero'
import ListingCarousel from '~/components/ListingCarousel'
import LazyHydrate from 'vue-lazy-hydration'

export default {
  components: {
    Hero,
    ListingCarousel,
    LazyHydrate,
  },

  async asyncData({ error }) {
    try {
      const [
        trendingMovies,
        nowPlayingMovies,
        upcomingMovies,
        trendingTv,
        topRatedTv,
        onTheAirTv,
      ] = await Promise.all([
        getTrending('movie'),
        getMovies('now_playing'),
        getMovies('upcoming'),
        getTrending('tv'),
        getTvShows('top_rated'),
        getTvShows('on_the_air'),
      ])

      let featured

      // feature a random item from movies or tv
      const items = [...trendingMovies.results, ...trendingTv.results]
      const randomItem = items[Math.floor(Math.random() * items.length)]
      const media = randomItem.title ? 'movie' : 'tv'

      if (media === 'movie') {
        featured = await getMovie(randomItem.id)
      } else {
        featured = await getTvShow(randomItem.id)
      }

      return {
        trendingMovies,
        nowPlayingMovies,
        upcomingMovies,
        trendingTv,
        topRatedTv,
        onTheAirTv,
        featured,
      }
    } catch {
      error({ statusCode: 504, message: 'Data not available' })
    }
  },

  data() {
    return {
      isShowPolicyModal: false,
    }
  },

  computed: {
    trendingMoviesTitle() {
      return getListItem('movie', 'trending').title
    },

    trendingMoviesUrl() {
      return { name: 'movie-category-name', params: { name: 'trending' } }
    },

    nowPlayingMoviesTitle() {
      return getListItem('movie', 'now_playing').title
    },

    nowPlayingMoviesUrl() {
      return { name: 'movie-category-name', params: { name: 'now_playing' } }
    },

    upcomingMoviesTitle() {
      return getListItem('movie', 'upcoming').title
    },

    upcomingMoviesUrl() {
      return { name: 'movie-category-name', params: { name: 'upcoming' } }
    },

    trendingTvTitle() {
      return getListItem('tv', 'trending').title
    },

    trendingTvUrl() {
      return { name: 'tv-category-name', params: { name: 'trending' } }
    },

    topRatedTvTitle() {
      return getListItem('tv', 'top_rated').title
    },

    topRatedTvUrl() {
      return { name: 'tv-category-name', params: { name: 'top_rated' } }
    },

    onTheAirTvTitle() {
      return getListItem('tv', 'on_the_air').title
    },

    onTheAirTvUrl() {
      return { name: 'tv-category-name', params: { name: 'on_the_air' } }
    },
  },
  methods: {
    viewPolicy() {
      this.isShowPolicyModal = !this.isShowPolicyModal
    },
  },
}
</script>


<style scoped>
.view-policy {
  margin-right: 4rem;
  font-size: 1.4rem;
  margin-left: 4rem;
}
</style>