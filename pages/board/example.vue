<template>
  <main class="center">
    <h2> QA Board </h2>
    <div class="pa4 black-80 mw7">
      <ul id="cardsExample">
        <div
          v-for="(card, index) in cards"
          :key="index"
        >
          <base-card
            :header="card.question"
            :body="card.answer"
          />
        </div>
      </ul>
      <card-form
        form-name="questions"
        @submit.prevent="onSubmit"
      />
    </div>

  </main>
</template>

<script>
// import { mapState } from 'vuex'
import BaseCard from '~/components/core/BaseCard'
import BaseCardGrid from '~/components/core/BaseCardGrid'
import BaseForm from '~/components/core/BaseForm'
import CardForm from '~/components/CardForm'

// const cardsExample = {}

export default {
  name: 'CardExample',
  components: {
    BaseCard,
    BaseCardGrid,
    BaseForm,
    CardForm
  },
  data(){
    return {
      cards: [
        {
          question: "How does this work?",
          answer: "Not very well at the moment"
      }
      ]
    }
  },
  methods: {
  addNewCard(event) {
    this.cards.push("test");
     // this.cards.push(submitEvent.target.elements.formInput.value);
     console.log(event);
  },
  onSubmit () {
    console.log("testingg");
    // this.cards.push(this.formInput)
  }
}
}
</script>
