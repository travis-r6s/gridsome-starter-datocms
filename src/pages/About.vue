<template>
  <Layout>
    <article class="sheet">
      <div class="sheet__inner">
        <h1 class="sheet__title">{{ datoCmsAboutPage.title }}</h1>
        <p class="sheet__lead">{{ datoCmsAboutPage.subtitle }}</p>
        <div class="sheet__gallery">
          <img
            :src="datoCmsAboutPage.photo.url"
            :alt="datoCmsAboutPage.title" />
        </div>
        <div
          v-html="datoCmsAboutPage.bio"
          class="sheet__body" />
      </div>
    </article>
  </Layout>
</template>

<page-query>
query AboutPage {
  allDatoCmsAboutPage {
    edges {
      node {
        id
        title
        subtitle
        photo {
          url
        }
        bio
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.datoCmsAboutPage.title,
      meta: [
        { key: 'description', name: 'description', content: this.datoCmsAboutPage.subtitle }
      ]
    }
  },
  computed: {
    datoCmsAboutPage () {
      return this.$page.allDatoCmsAboutPage.edges[0].node
    }
  }
}
</script>
