// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Vue Plugins
import { VueMasonryPlugin } from 'vue-masonry'

// Import Layouts
import DefaultLayout from '~/layouts/Default.vue'

// Import Sass
import '~/styles/index.sass'

export default function (Vue, { router, head, isClient }) {
  // Use Masonry component
  Vue.use(VueMasonryPlugin)
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
