<template>
  <div className="container">
    <!-- <HelmetDatoCms
      favicon={data.datoCmsSite.faviconMetaTags}
      seo={data.datoCmsHome.seoMetaTags}
    /> -->
    <div className="container__sidebar">
      <div className="sidebar">
        <h6 className="sidebar__title">
          <g-link to="/">{{ $static.metaData.siteName }}</g-link>
        </h6>
        <div
          className="sidebar__intro"
          v-html="datoCmsHome.introText"
        />
        <ul className="sidebar__menu">
          <li>
            <g-link class="nav__link" to="/">Home</g-link>
          </li>
          <li>
            <g-link class="nav__link" to="/about">About</g-link>
          </li>
        </ul>
        <p className="sidebar__social">
          <a
            v-for="({ node: profile }) in $static.allDatoCmsSocialProfile.edges"
            :key="profile.id"
            :href="profile.url"
            :class="`social social--${profile.profileType.toLowerCase()}`"
            target="blank"
          > </a>
        </p>
        <div className="sidebar__copyright">{{ datoCmsHome.copyright }}</div>
      </div>
    </div>
    <div className="container__body">
      <div className="container__mobile-header">
        <div className="mobile-header">
          <div className="mobile-header__menu">
            <Link to="#" data-js="toggleSidebar" />
          </div>
          <div className="mobile-header__logo">
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
    datoCmsHome () {
      return this.$static.allDatoCmsHome.edges[0].node
    }
  }
}
</script>
