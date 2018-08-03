<template>
  <main class="pa4-l sans-serif">
    <h1 class="title">
      Contact
    </h1>
    <div class="bg-red mw7 center pa4 br2-ns ba b--black-10">
      <form
        name="contact"
        action="/confirm-form"
        netlify-honeypot="bot-field"
        method="post"
        netlify>
        <input
          type="hidden"
          name="form-name"
          value="contact" >
        <p class="hidden">
          <label>Don’t fill this out: <input name="bot-field"></label>
        </p>
        <label
          class="pa0 f5 f4-ns mb3 black-80"
          for="name">
          Name:
        </label>
        <input
          id="name"
          class="pa2 input w-100"
          name="name" >
        <label
          class="pa0 f5 f4-ns mb3 black-80"
          for="email">
          Email:
        </label>
        <input
          id="email"
          class="pa2 input w-100"
          name="email" >
        <label
          class="pa0 f5 f4-ns mb3 black-80"
          for="message">
          Message:
        </label>
        <textarea
          id="message"
          class="pa2 input w-100"
          name="message"/>
        <input
          class="f6 link grow br2 ph3 pv2 mb2 dib white bg-dark-green"
          type="submit"
          value="Send message" >
      </form>
    </div>
  </main>
</template>

<style>
.hidden {
  display: none;
}

</style>
