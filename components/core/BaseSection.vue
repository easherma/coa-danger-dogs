<template>
  <section>
    <header>
      <h1 class="f4 f1-ns fw6 mb2">{{ title }}</h1>
    </header>
    <p class="f5 f4-ns measure-wide lh-copy mt0">
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
  name: 'BaseSection',
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
