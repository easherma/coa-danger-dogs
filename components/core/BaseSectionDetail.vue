<template>
  <section class="">
    <details>
      <summary>
        <h1 class="f1 lh-title">{{ title }}</h1>
      </summary>
      <p class="">
        {{ copy }}
      </p>
    </details>
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
