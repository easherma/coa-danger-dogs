<template>
  <main>
    <h2> QA Board </h2>
    <ul>
      <li
        v-for="(card, index) in cards"
        :key="index"
      >{{ card.header +' '+ user.copy }}
      </li>
    </ul>
    <base-card />
    <base-card-grid />
    <div class="pa4 black-80">
      <base-form
        form-header="Submit a Question!"
        instruction="Write your Question here and submit when done:"
        form-name="question"
        @submit.prevent="addNewCard"
        @click="addNewCard"
      />

      <base-form
        form-header="Submit a Answer!"
        instruction="Write your answer here and submit when done:"
        form-name="answer"
      />
    </div>

  </main>
</template>

<script>
// import { mapState } from 'vuex'
import BaseCard from '~/components/core/BaseCard'
import BaseCardGrid from '~/components/core/BaseCardGrid'
import BaseForm from '~/components/core/BaseForm'

// const cardsExample = {}

export default {
  name: 'CardExample',
  components: {
    BaseCard,
    BaseCardGrid,
    BaseForm,
  },
  data(){
    return {
      cards: ''
    }
  },
  methods: {
  addNewCard(event) {
    this.cards.push("test");
     // this.cards.push(submitEvent.target.elements.formInput.value);
     console.log(event);
  }
}
}
</script>
