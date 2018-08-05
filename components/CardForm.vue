<template>
  <div>
    <BaseCard
      :header="cardParams.header"
      :body="cardParams.body"
    />
    <base-input
      type="text"
      label="Question"
      name="header"
      @input="handleInputUpdates" />
    <base-input

      type="text"
      label="Answer"
      name="body"
      @input="handleInputUpdates" />
    <base-button
      button-type="submit"
      style-class="f6 link dim br2 ph3 pv2 mb2 dib white bg-mid-blue"
      @submit.prevent="onSubmit"
    > Submit </base-button>

  </div>
</template>

<script>
import BaseInput from '~/components/core/BaseInput'
import BaseCard from '~/components/core/BaseCard'
import BaseButton from '~/components/core/BaseButton'


/**
 * Forms for submitting information
 *
 */
export default {
  name: 'CardForm',
  components: {
    BaseCard,
    BaseButton,
    BaseInput
  },
  data() {
  return {
    cardParams: {
      header: '',
      body: '',
    },
    disableSignIn: false,
  };
},
  methods: {
    handleInputUpdates(event) {
  this.cardParams[event.target.name] = event.target.value;
},
    getFormValues(submitEvent) {
      this.formSubmit = submitEvent.target.elements.formInput.value
    },
    onSubmit () {
      this.formSubmit = this.formInput
    }
  }
}
</script>
<style>
.hidden {
  display: none;
}
</style>
<docs>

```vue
<card-form

/>
```

</docs>
