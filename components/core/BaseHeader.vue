<template>
  <header class="sans-serif">
    <a
      class="fl mr4 db v-mid mid-gray grow"
      href="https://www.austintexas.gov"
      title="Source">
      <img
        src="https://data.austintexas.gov/api/views/hvqj-3cd3/files/db540e1d-5a4e-4026-b649-20d9c83593ad"
        class="dib w5 h5"
        alt="Site Name">
    </a>
    <h3 class="f2 f1-m f-headline-l measure-narrow lh-title mv0">
      <span class="bg-dark-red lh-title white pa1 tracked-tight">
        {{ title }}
      </span>
    </h3>
    <h4 class="f3 fw1 georgia i">{{ subtitle1 }}</h4>
    <h5 class="f6 ttu tracked black-80">{{ subtitle2 }}</h5>
  </header>
</template>

<script>
/**
 * header for a page or section of a page
 *
 */
export default {
  name: 'BaseHeader',
  props: {
    /**
    * The title
    */
    title: {
      type: String,
      required: true,
    },
    subtitle1: {
      type: String,
      default: '',
    },
    subtitle2: {
      type: String,
      default: '',
    },
  }
    /* ... */
}
</script>
<docs>
  ```vue
  <base-header
    title="Header Title..."
    subtitle1="More description here..."
    subtitle2="...and even more to say here!"
  />
  ```
</docs>
