<template>
  <form
    :name="formName"
    :method="submitMethod"
    data-netlify="true"
  >
    <input
      :value="formName"
      type="hidden"
      name="form-name" >
    <div class="f6 b db mb2">{{ formHeader }}</div>
    {{ formSubmit }}
    <div>
      <p class="f6 b db mb2">{{ instruction }}</p>
      {{ formInput }}
      <textarea
        v-model="formInput"
        name="formInput"
        class="db border-box hover-black w-100 measure ba bblack-20 pa2 br2 mb2"
      />
      <BaseButton
        button-type="submit"
        style-class="f6 link dim br2 ph3 pv2 mb2 dib white bg-mid-blue"
      > Submit </BaseButton>
      <span v-html="hint"/>
    </div>

  </form>
</template>

<script>
import BaseButton from '~/components/core/BaseButton'


/**
 * Forms for submitting information
 *
 */
export default {
  name: 'BaseForm',
  components: {
    BaseButton,
  },
  props: {
    formName: {
      type: String,
      required: true,
      default: 'inputForm'
    },
    submitMethod: {
      type: String,
      required: false,
      default: 'post'
    },
    /**
    * The title
    */
    formHeader: {
      type: String,
      required: false,
      default: 'Input submission:',
    },
    instruction: {
      type: String,
      required: false,
      default: 'Fill this out:',
    },
    hint: {
      type: String,
      required: false,
      default: `<small
              id="comment-desc"
              class="f6 black-60">Hint: you might also find what you need by looking at the <a
                href="https://data.austintexas.gov/Public-Safety/Declared-Dangerous-Dogs/ykw4-j3aj"
                class="link underline black-80 hover-blue">data</a> directly!</small>`,
    },
  },
  data() {
    return {
      formInput: '',
      formSubmit: ''
    }
  },
  methods: {
    getFormValues(submitEvent) {
      this.formSubmit = submitEvent.target.elements.formInput.value
    },
    handleSubmit() {
  // Send data to the server or whatever
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

```
<base-form
formHeader="Submit a Question!"
formName="question"
instruction="Write your Question here and submit when done:"
submitMethod=""
/>
```
```vue
<base-form
formHeader="Submit a Answer!"
formName="answer"
instruction="Write your answer here and submit when done:"
submitMethod=""
/>
```
</docs>
