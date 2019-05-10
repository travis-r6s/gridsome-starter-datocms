<template>
  <div class="container">
    <!-- <HelmetDatoCms
      favicon={data.datoCmsSite.faviconMetaTags}
      seo={data.datoCmsHome.seoMetaTags}
    />-->
    <div class="container__sidebar">
      <div class="sidebar">
        <h6 class="sidebar__title">
          <g-link to="/">{{ $static.metaData.siteName }}</g-link>
        </h6>
        <div class="sidebar__intro" v-html="datoCmsHome.introText"/>
        <ul class="sidebar__menu">
          <li>
            <g-link class="nav__link" to="/">Home</g-link>
          </li>
          <li>
            <g-link class="nav__link" to="/about">About</g-link>
          </li>
        </ul>
        <p class="sidebar__social">
          <a
            v-for="({ node: profile }) in $static.allDatoCmsSocialProfile.edges"
            :key="profile.id"
            :href="profile.url"
            :class="`social social--${profile.profileType.toLowerCase()}`"
            target="blank"
          ></a>
        </p>
        <div class="sidebar__copyright">{{ datoCmsHome.copyright }}</div>
      </div>
    </div>
    <div class="container__body">
      <div class="container__mobile-header">
        <div class="mobile-header">
          <div class="mobile-header__menu">
            <Link to="#" data-js="toggleSidebar"/>
          </div>
          <div class="mobile-header__logo">
            <g-link to="/">{{ $static.metaData.siteName }}</g-link>
          </div>
        </div>
      </div>
      <slot/>
    </div>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
  allDatoCmsHome {
    edges {
      node {
        id
        path
        introText
        copyright
      }
    }
  }
  allDatoCmsSocialProfile {
    edges {
      node {
        id
        profileType
        url
      }
    }
  }
}
</static-query>

<script>
  export default {
    computed: {
      datoCmsHome() {
        return this.$static.allDatoCmsHome.edges[0].node;
      }
    }
  };
</script>
