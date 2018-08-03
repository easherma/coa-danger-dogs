<template>
  <section class="cf ph3 ph5-ns pb5 navy">
    <section class="pv2 fl w-100 ">
      <article class="pv2 fl w-100 w-50-ns">
        <base-section
          title="What is this?"
          copy= "
        This is an informational website that combines a dataset with some relevant information and useful context. It also provides to ability to interact with the content, ask questions, give feedback, and participate.
        "/>
      </article>
      <img
        src="https://media.giphy.com/media/mCRJDo24UvJMA/giphy.gif"
        class="w-75 w-30-ns ph2"
        alt="dog">
    </section>
    <section class="pv2 fl w-100 ">
      <article class="pv2 fl w-100 w-50-l pr0 pr2-l">
        <h2 class="f3 f2-ns fw6 mb2">Who is it for?</h2>
        <p class="f4 measure lh-copy mt0">
          Anyone can use this site! However, residents of Austin Texas, public servants, dog-owners, and concerned or curious citizens will get the most out of using it.
        </p>
      </article>
      <article class="pv2 fl w-100 w-50-l pr0 pr2-l">
        <h2 class="f3 f2-ns fw6 mb2">Where is this data from?</h2>
        <p class="f4 measure lh-copy mt0">
          <a
            href="https://data.austintexas.gov/Health-and-Community-Services/Declared-Dangerous-Dogs/ykw4-j3aj/data"
            class="link dim dark-blue b"> The City of Austin's data portal</a> provides easy access to open data and information about your city government. We encourage the use of public data that the City of Austin has published to spark innovation, promote public collaboration, increase government transparency, and inform decision making.

            More information on the data can be seen <nuxt-link
              to="/docs"
              class="link dim"> here </nuxt-link>
        </p>
      </article>
    </section>

    <article class="pv2 fl w-100 w-50-l pr0 pr2-l">
      <h2 class="f3 f2-ns fw6 mb2">What can I do here?</h2>
      <p class="f4 measure lh-copy mt0">
        <ul class="list">
          <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--black-30">Use the <nuxt-link
            class="link dim"
            to="/map">map</nuxt-link> to explore the data</li>
          <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--black-30">Browse the <nuxt-link
            class="link dim"
            to="/data">data</nuxt-link> separately </li>
          <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--black-30"><nuxt-link
            class="link dim"
            to="/board">See and ask questions</nuxt-link>  and get answers about this issue.</li>
          <li class="lh-copy pv3 ba bl-0 bt-0 br-0 b--black-30"><nuxt-link
            class="link dim"
            to="/contact">Contact the city </nuxt-link> with your concerns.</li>
        </ul>
      </p>
    </article>

    <!-- <text-section /> -->
    <article class="pv2 fr w-100 w-50-l pr0 pr2-l">
      <soda-map />
    </article>
    <article class="pv2 fl w-100 w-50-l pr0 pr2-l">
      <base-card
        header="How do I use this map?"
        body= "This map displays all the registered dangerous dogs in the city. You can scroll and zoom around the map, or type in an address to see the 10 closest dogs to that location."/>
    </article>
    <article class="pv2 fl w-100 w-50-l pr0 pr2-l">
      <h2 class="f3 f2-ns fw6 mb2">What does this data mean?</h2>
      <p class="f4 measure lh-copy mt0">
        No declared Dangerous Dog in the City of Austin and Travis County should ever be running at large. They are court ordered to be:
        <ul class="list">
          <li class="lh-copy pv3 bl-0 bt-0 br-0">Restrained at all times</li>
          <img
            src="https://media.giphy.com/media/Wi8O8WBtYX7dS/giphy.gif"
            class="w-100 w-50-ns"
            alt="dog1">
          <li class="lh-copy pv3 bl-0 bt-0 br-0">Wearing a large tag identifying them as a Dangerous Dog (becuase they have attacked in the past)</li>
          <img
            src="https://media.giphy.com/media/Ed1OexVC1LcC4/giphy.gif"
            class="w-100 w-50-ns"
            alt="dog1">
        </ul>


        If attacked, the owner is required to provide $100,000 in financial responsibility.
        If they attack again the court could order them put to sleep.
      </p>
    </article>



    <article class="pv2 fl w-100 pr0 pr2-l">
      <CallToAction />
    </article>

  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import BaseSection from '~/components/core/BaseSection'
import BaseCard from '~/components/core/BaseCard'
import BaseCardGrid from '~/components/core/BaseCardGrid'
import { mapState } from 'vuex'
import SodaMap from '~/components/SodaMap'
import TextSection from '~/components/TextSection'
import CallToAction from '~/components/CallToAction'


export default {
  components: {
    AppLogo,
    BaseSection,
    BaseCardGrid,
    SodaMap,
    TextSection,
    BaseCard,
    CallToAction

  },
  data() {
    return {
    results: []
  };
  },
  computed: mapState([
    'sodaData'
  ]),
  mounted() {
    this.$store.dispatch('getData')
  },
}
</script>

<style>

#map {
  width: 100%;
  height: 500px;
}
</style>
