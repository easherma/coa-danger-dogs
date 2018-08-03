<template>
  <article class="bg-white br2 pointer grow shadow-4">
    <div class="br2 ph2 bg-yellow br--top">
      <h1 class="f4 dib ">{{ header }}</h1>
    </div>

    <div class="ph2">
      <p class="f6 f5-ns lh-copy measure child">
        {{ body }}
      </p>
    </div>

  </article>

</template>

<script>
/**
 * text section with title
 *
 */
export default {
  name: 'BaseCard',
  props: {
    header: {
      type: String,
      required: false,
      default: 'card header',
    },
    body: {
      type: String,
      required: false,
      default: 'description here...',
    }
  }
}
</script>
<docs>
  ```vue
  <base-card
    header="Title..."
    body="Omnis corpora ut vel, an labitur blandit necessitatibus quo, has ea qualisque sadipscing. Nec ex wisi vituperata posidonium, vel ea dicta debitis disputationi, in semper conceptam sea. Pro rebum illud ad, ad habeo fugit voluptaria nam. Vero numquam id nam, eos ad albucius adversarium ullamcorper. Alienum dolores delicatissimi mea ad, mea utroque ancillae et. Ad est zril fabellas, in vim discere lucilius."
  />
  ```
</docs>
