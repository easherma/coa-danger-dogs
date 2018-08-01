<template>
  <article>
    <header class="bg-gold sans-serif">
      <div class="mw9 center pa4 pt5-ns ph7-l">
        <h3 class="f2 f1-m f-headline-l measure-narrow lh-title mv0">
          <span class="bg-black-90 lh-copy white pa1 tracked-tight">
            {{ title }}
          </span>
        </h3>
        <h4 class="f3 fw1 georgia i">{{ subtitle1 }}</h4>
        <h5 class="f6 ttu tracked black-80">{{ subtitle2 }}</h5>
      </div>
    </header>
  </article>
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
