<template>
  <form
    class="pa4 black-80"
    @submit.prevent="getFormValues">
    <div class="f6 b db mb2">{{ formHeader }}</div>
    {{ formSubmit }}
    <br>
    <div>
      <p class="f6 b db mb2"/>{{ instruction }}</p>
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
/**
 * text section with title
 *
 */
export default {
  name: 'BaseForm',
  props: {
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
<docs>
```vue
<base-form
formHeader="Submit a Question!"
instruction="Write your Question here and submit when done:"
/>
```
```vue
<base-form
formHeader="Submit a Answer!"
instruction="Write your answer here and submit when done:"
/>
```
</docs>
