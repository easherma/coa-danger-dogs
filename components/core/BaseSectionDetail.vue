<template>
  <section class="pa3 pa5-ns">
    <header>
      <h1>{{ title }}</h1>
    </header>
    <p class="measure lh-copy">
      {{ copy }}
    </p>
  </section>
</template>

<script>
/**
 * text section with title
 *
 */
export default {
  name: 'BaseSectionDetail',
  props: {
    /**
    * The title
    */
    title: {
      type: String,
      required: false,
      default: '',
    },
    copy: {
      type: String,
      required: false,
      default: '',
    }
  }
    /* ... */
}
</script>
<docs>
  ```vue
  <base-section
    title="Title..."
    copy="description here..."
  />
  ```
</docs>
