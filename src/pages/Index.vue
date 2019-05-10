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
            :to="`/works/${work.slug}`"
            class="card__image">
            <img
              :src="work.coverImage.url" />
          </g-link>
          <figcaption class="card__caption">
            <h6 class="card__title">
              <glink :to="`/works/${work.slug}`">{{ work.title }}</glink>
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
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>
