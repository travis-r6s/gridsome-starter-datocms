<template>
  <Layout>
    <article class="sheet">
      <div class="sheet__inner">
        <h1 class="sheet__title">{{ $page.work.title }}</h1>
        <p class="sheet__lead">{{ $page.work.excerpt }}</p>
        <div class="sheet__slider">
          <!-- <Slider infinite={true} slidesToShow={2} arrows>
            {data.datoCmsWork.gallery.map(({ fluid }) => (
              <img alt={data.datoCmsWork.title} key={fluid.src} src={fluid.src} />
            ))}
          </Slider> -->
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
