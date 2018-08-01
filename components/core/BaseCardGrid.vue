<template>
  <div>
    <div class="mw9 center ph3-ns">
      <div class="cf ph2-ns">
        <div class="fl w-100 w-50-ns pa2">
          <base-card copy="Omnis corpora ut vel, an labitur blandit necessitatibus quo, has ea qualisque sadipscing. Nec ex wisi vituperata posidonium, vel ea dicta debitis disputationi, in semper conceptam sea. Pro rebum illud ad, ad habeo fugit voluptaria nam. Vero numquam id nam, eos ad albucius adversarium ullamcorper. Alienum dolores delicatissimi mea ad, mea utroque ancillae et. Ad est zril fabellas, in vim discere lucilius."/>
        </div>
        <div class="fl w-100 w-50-ns pa2">
          <base-card />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCard from '~/components/core/BaseCard'


/**
 * text section with title
 *
 */
export default {
  name: 'BaseCardGrid',
  components: {
  BaseCard,
  },

}
</script>
<docs>
  ```vue
  <base-card-grid
  />
  ```
</docs>
