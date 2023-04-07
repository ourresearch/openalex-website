<template>
  <v-container class="page">
    <h3 class="text-h3">Testimonials</h3>
    <p>
      Here's what some of our users have to say about OpenAlex.
    </p>

    <v-row>
      <v-col cols="12" md="4" class="" v-for="item in items" :key="item.name">
        <v-card class="fill-height d-flex flex-column">
          <v-card-text class="flex-grow-1">

            <q style="font: 18px Roboto; line-height: 1.3" v-html="item.short"/>
            <div class="mt-3 d-flex">
              <div class="mr-1">
                &mdash;
              </div>
              <div>
                {{ item.name }}, {{ item.org }}

              </div>
            </div>
          </v-card-text>
          <v-card-actions class="pt-0">
            <v-btn small text @click="showMore(item)">More</v-btn>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>
    <div>
      <v-alert type="info" outlined text class="mt-8">
        <p>

          Want to share a testimonial of your own? We'd love to hear it!
        </p>
        <div>
          <v-btn color="primary" href="https://wkf.ms/42RdSkP" target="_blank">
            Share testimonial
            <v-icon right>mdi-open-in-new</v-icon>
          </v-btn>
        </div>
      </v-alert>
    </div>
    <v-dialog v-model="isDialogOpen" max-width="600">
      <v-card v-if="dialogData">
        <v-card-title>
          <!--          {{ dialogData.org }}-->
          <v-spacer/>
          <v-btn icon @click="closeDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>

          <q style="font: 16px Roboto; line-height: 1.3" v-html="dialogData.long"/>
          <div class="mt-3 d-flex">
            <div class="mr-1">
              &mdash;
            </div>
            <div>
              {{ dialogData.name }}, {{ dialogData.org }}
            </div>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="closeDialog()">Close</v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>

import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  name: "Template",
  components: {},
  props: {},
  data() {
    return {
      isDialogOpen: false,
      dialogData: null,
      items: [
        {
          short: `<strong>The OpenAlex dataset was a game changer for us.</strong> As we are informing public policy, using an open dataset that allows for transparency is essential.`,
          long: `Dragonfly Data Science is a New Zealand based consulting company that specializes in data science, statistical analysis and machine learning.<br><br>

 For a report commissioned by the New Zealand Ministry for Business, Innovation and Employment, we were tasked with looking at changes in the New Zealand research workforce over a twenty year period, to be used in a reimagining of the New Zealand science system.<br><br>

OpenAlex provided us with a single consistent dataset of publications, allowing us to look at researchers by subject area and institution. From their publication history, we could look at peoples careers, how they had moved between New Zealand and other countries, how they had moved between institutions, and how long they had remained actively publishing.<br><br>

The OpenAlex dataset was a game changer for us. As we are informing public policy, using an open dataset that allows for transparency is essential. We are planning to release a small dataset, derived from OpenAlex, that is of New Zealand researchers only. This will be widely accessible. This kind of repurposing would not be possible without the open licensing provided by OpenAlex`,
          name: "Edward Abraham",
          org: "Dragonfly Data Science",
        },
        {
          short: `OpenAlex is faster and more dependable...With its extensive catalog of scholarly papers, OpenAlex has enabled us to <strong>effortlessly locate the right sources</strong> that students are searching for.`,
          long: `Scribbr is a multilingual editing service guiding students on their journey to become better academic writers through AI tools and expert feedback.<br><br>

When assisting students one of our core free services is providing citation generation. Our previous external data solutions for this were slow and not as dependable as we’d like. They left students frustrated.<br><br>

OpenAlex is faster and more dependable; it has transformed the way we assist students with their citations. With its extensive catalog of scholarly papers, OpenAlex has enabled us to effortlessly locate the right sources that students are searching for.<br><br>

Since incorporating OpenAlex into our Citation Generator, our service has become more streamlined and user-friendly than ever before.
We strongly recommend OpenAlex to anyone seeking a reliable and fast source of scholarly papers.`,
          name: "Sven Hanssen",
          org: `Scribbr`,
        },
        {
          short: `OpenAlex provides <strong>accurate affiliation data, effortlessly and quickly</strong>....[and] daily updates ensure our clients always have access to the most current information.`,
          long: `INSERES is a software company that makes Piri Discovery Service, a search-focused, enterprise-level tool specifically tailored for academic professionals, researchers, and students.<br><br>

Before OpenAlex, we faced challenges in listing publications affiliated with the given institutions; furthermore, we had no citation information for institution-affiliated publications, except for data provided by OpenCitations. Additionally, there was no discipline-specific data available for these institution-affiliated publications. We attempted to collect affiliation data from our various data sources including CrossRef, but none of these yielded satisfactory results. <br><br>

OpenAlex sovled this by providing publication information, citation data, and discipline-specific insights for institution-affiliated publications. This support proved to be invaluable for our operations. OpenAlex provides accurate affiliation data, effortlessly and quickly; this has been a great advantage for us. Furthermore, OpenAlex’s daily updates ensure our clients always have access to the most current information. <br><br>

We are impressed with OpenAlex's ability to establish relationships between various data points: it connects publications with authors, institutions with authors, and publications with disciplines. I would definitely recommend OpenAlex to others. In my opinion, OpenAlex has the potential to become an essential service used globally. To be honest, we are heavily reliant on SciVal and InCites for institutional statistics. Scopus and Web of Science (WoS) companies are quite strict with their data due to this dependence. I see OpenAlex as an important initiative that could eventually replace these products...I believe OpenAlex holds great promise for the future.`,
          name: "Ahmet Mungen",
          org: `INSERES`,
        },
        {
          short: `OpenAlex helps <strong>significantly optimize the performance of our literature search,</strong> and thus shorten our overall R&D time.`,
          long: `In early development of the drug discovery process at BMS, we have to do a lot of literature search, often across different sources like bioRxiv, medRxiv, PubMed, etc. <br><br>

          OpenAlex helps streamline this process and significantly optimize the performance of our literature search, and thus shorten our overall R&D time. We highly recommend OpenAlex to anyone who needs a unified interface to acquire open scholarly metadata.`,
          name: "Trang Le",
          org: `Bristol Myers Squibb`,
        },
      ]
    }
  },
  computed: {
    ...mapGetters([
      "resultsFilters",
    ]),
    isOpen: {
      get() {
        if (!this.$vuetify.breakpoint.mobile) return true
        return this.$store.state.showFiltersDrawer
      },
      set(val) {
        if (!this.$vuetify.breakpoint.mobile) return // you can't falsify isOpen on desktop
        this.$store.state.showFiltersDrawer = val
      },
    },
  },

  methods: {
    ...mapMutations([
      "snackbar",
    ]),
    ...mapActions([]),
    showMore(item) {
      this.dialogData = item
      this.isDialogOpen = true
    },
    closeDialog() {
      this.isDialogOpen = false
      this.dialogData = null
    },


  },
  created() {
  },
  mounted() {
  },
  watch: {
    isOpen(to, from) {
    }
  }
}
</script>

<style scoped lang="scss">

</style>