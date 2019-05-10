<template>
  <Layout>
    <div
      v-masonry
      transition-duration="0.3s"
      item-selector=".showcase__item"
      class="showcase">
      <div
        v-masonry-tile
        v-for="({ node: work }) in $page.works.edges"
        :key="work.id"
        class="showcase__item">
        <figure class="card">
          <g-link
            :to="`/work/${work.slug}`"
            class="card__image">
            <img
              :src="work.coverImage.url" />
          </g-link>
          <figcaption class="card__caption">
            <h6 class="card__title">
              <g-link :to="`/work/${work.slug}`">{{ work.title }}</g-link>
            </h6>
            <div class="card__description">
              <p>{{ work.excerpt }}</p>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query HomePage {
  allDatoCmsHome {
    edges {
      node {
        seoSettings {
          title
          description
        }
      }
    }
  }
  works: allDatoCmsWork {
    edges {
      node {
        id
        title
        slug
        excerpt
        coverImage {
          size
          width
          height
          url
        }
      }
    }
  }
}
</page-query>

<script>
import Vue from 'vue'
export default {
  metaInfo () {
    return {
      title: this.seoSettings.title,
      meta: [
        { key: 'description', name: 'description', content: this.seoSettings.description }
      ]
    }
  },
  computed: {
    seoSettings () {
      return this.$page.allDatoCmsHome.edges[0].node.seoSettings
    }
  },
  beforeMount () {
    const VueMasonryPlugin = require('vue-masonry').VueMasonryPlugin
    Vue.use(VueMasonryPlugin)
    if (typeof this.$redrawVueMasonry === "function") {
      this.$redrawVueMasonry()
    }
  }
}
</script>
