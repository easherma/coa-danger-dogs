<template>
  <main>
    <h2> QA Board </h2>
    <base-card-grid />
    <div class="pa4 black-80">
      <base-form
        form-header="Submit a Question!"
        instruction="Write your Question here and submit when done:"
        submit-method="post"
        form-name="question"
      />

      <base-form
        form-header="Submit a Answer!"
        instruction="Write your answer here and submit when done:"
        submit-method="post"
        form-name="answer"
      />
    </div>

  </main>
</template>

<script>
// import { mapState } from 'vuex'
import BaseCardGrid from '~/components/core/BaseCardGrid'
import BaseForm from '~/components/core/BaseForm'

export default {
  components: {
    BaseCardGrid,
    BaseForm,
  }
}
</script>
