<template>
  <Layout>
    <article class="sheet">
      <div class="sheet__inner">
        <h1 class="sheet__title">{{ $page.work.title }}</h1>
        <p class="sheet__lead">{{ $page.work.excerpt }}</p>
        <div class="sheet__slider">
          <ClientOnly>
            <carousel :perPage="1">
              <slide
                v-for="(image, index) in $page.work.gallery"
                :key="index">
                <img
                  :src="image.url"
                  :alt="$page.work.title">
              </slide>
            </carousel>
          </ClientOnly>
        </div>
        <div
          v-html="$page.work.description"
          class="sheet__body" />
        <div class="sheet__gallery">
          <img
            :src="$page.work.coverImage.url"
            :alt="$page.work.title" />
        </div>
      </div>
    </article>
  </Layout>
</template>

<page-query>
query WorkPage ($id: String!) {
  work: datoCmsWork (id: $id) {
    title
    excerpt
    description
    gallery {
      url
    }
    coverImage {
      url
    }
  }
}
</page-query>

<script>
  export default {
    metaInfo () {
      return {
        title: this.$page.work.title,
        meta: [
          { key: 'description', name: 'description', content: this.$page.work.excerpt }
        ]
      }
    },
    components: {
      Carousel: () =>
        import ('vue-carousel')
        .then(m => m.Carousel)
        .catch(),
      Slide: () =>
        import ('vue-carousel')
        .then(m => m.Slide)
        .catch()
    }
  }
</script>
