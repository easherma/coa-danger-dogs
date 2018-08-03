<template>
  <!-- <form @submit.prevent="getFormValues">
    <input
      type="text"
      name="name">
    <BaseButton
      :on-click="submit"
      style-class="f6 link dim br2 ph3 pv2 mb2 dib white bg-mid-blue"
    > Submit
    </BaseButton>

  </form> -->

  <form
    class="pa4 black-80"
    @submit.prevent="getFormValues">
    <span>Multiline message is:</span>
    <BaseCard
      :header="this.formInputHeader"
      :copy="this.formInputCopy"

    />


    <br>
    <div>
      <label
        for="question"
        class="f6 b db mb2">Write your Question Here:</label>
      <p style="white-space: pre-line;">{{ formInputHeader }}</p>
      <textarea
        v-model="formInputHeader"
        name="formInputHeader"
        class="db border-box hover-black w-100 measure ba bblack-20 pa2 br2 mb2"
        aria-describedby="question-desc"
      />
      <BaseButton
        :on-click="submit"
        style-class="f6 link dim br2 ph3 pv2 mb2 dib white bg-mid-blue"
      > Submit </BaseButton>
      <small
        id="comment-desc"
        class="f6 black-60">Hint: you might also find what you need by looking at the <a
          href="https://data.austintexas.gov/Public-Safety/Declared-Dangerous-Dogs/ykw4-j3aj"
          class="link underline black-80 hover-blue">data</a> directly!</small>
    </div>
    <div>
      <label
        for="question"
        class="f6 b db mb2">Write your Answer:</label>
      <p style="white-space: pre-line;">{{ formInputCopy }}</p>
      <textarea
        v-model="formInputCopy"
        name="formInputCopy"
        class="db border-box hover-black w-100 measure ba bblack-20 pa2 br2 mb2"
        aria-describedby="question-desc"
      />
      <BaseButton
        :on-click="submit"
        style-class="f6 link dim br2 ph3 pv2 mb2 dib white bg-mid-blue"
      > Submit </BaseButton>
    </div>
  </basecard></form>
</template>

<script>
/**
 * text section with title
 *
 */
export default {
  name: 'AnswerForm',
  props: {
  },
  data() {
    return {
      formInputHeader: '',
      formInputCopy: '',
      formSubmit: ''
    }
  },
  methods: {
    getFormValues(submitEvent) {
      this.formSubmit = submitEvent.target.elements.formInputHeader.value
      console.log(submitEvent);
    },
    handleSubmit() {
  // Send data to the server or whatever
    }
  },
}
</script>
<docs>
  ```vue
<BaseForm />

  ```
</docs>
