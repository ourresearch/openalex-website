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


        {
          short: `The OpenAlex API helps us <strong>consolidate and accelerate our data collection</strong>... We recommend university libraries use OpenAlex to build and maintain <strong> sustainable, noncommercial scholary infrastructures.</strong>`,
          long: `The Open Access team at TU Berlin (Germany) works with publication data of affiliated researchers in various ways: analyzing institutional output, monitoring open access, assisting authors with self-archiving, and consluting for publication strategy.<br><br>

To do this, we have to pull data from various sources (e.g. Web of Science, Scopus, ORCID, etc) and aggregate data from various services (e.g. Crossref, Unpaywall, etc).<br><br>

The OpenAlex API helps us to consolidate and accelerate our data collection, so that we can support TU Berlin researchers more efficiently. In the long run we hope a GUI will meet researchers needs for searching/browsing. We recommend university libraries use OpenAlex to build and maintain sustainable, noncommercial scholary infrastructures.`,
          name: "Michaela Voigt",
          org: `Technische Universität Berlin (University library)`,
        },


        {
          short: ` We previously relied on a combination of paid databases, the Microsoft Academic API and The Lens, but <strong>have now moved 100% to OpenAlex.</strong><br><br> The API is super speedy, has generous rate limits and is easy to work with, <strong> data and metadata are very complete, all at no cost.`,
          long: `Kenedict is an innovation analytics consultancy and uses OpenAlex to collect data on scientific output, authors and institutions for client projects. The data is mapped as graphs / networks to provide clients a connected perspective on scientific activity.<br><br>

 We previously relied on a combination of paid databases, the Microsoft Academic API and The Lens, but have now moved 100% to OpenAlex. The API is super speedy, has generous rate limits and is easy to work with, data and metadata are very complete, all at no cost. <br><br>

 We have used OpenAlex data in various projects now, providing clients with valuable insights on themes and peers of their interest. We would definitely recommend OpenAlex to anyone working with scientific publication data.`,
          name: "André Vermeij",
          org: `Kenedict`,
        },


        {
          short: ` We used to only use Scopus...But the licensing terms restrict us from [sharing the data].<br><br> <strong>OpenAlex is CC0 and we can share everything</strong> without worrying or talking to lawyers! It is really great.
`,
          long: `Our research lab looks at the migration of researchers. We use bibliometric data to detect changes in affiliations of individual scholars.<br><br>

We used to only use Scopus, which has okay data quality. But now we want to share not only our results, but detailed replication data so that other researchers can build on top of our methods. But the licensing terms restrict us from doing so.<br><br>

OpenAlex is CC0 and we can share everything without worrying or talking to lawyers! It is really great.<br><br>

 We compared the data and found some differences (E.g.. OA: better coverage in South America, lower coverage in China; Author disambiguation is a bit better with Scopus; Affiliation disambiguation with ROR ids is more useful at OpenAlex), but overall we are happy with the data quality. I recommend everyone to try OpenAlex for bibliometric research.`,
          name: "Tom Theile",
          org: `Max-Planck-Institute for demographic research`,
        },


        {
          short: `Microsoft Academic used to be our primary source but was discontinued... OpenAlex has successfully bridged this gap and now <strong>provides even more relevant information.</strong><br><br>OpenAlex is highly recommended<strong> for  its fast, open, and high-quality scholarly data</strong>
`,
          long: `Local Citation Network is an open source bibliometric web app for visualizing citation graphs and literature discovery. <br><br>

 It requires an easily accessible, comprehensive, up-to-date database of the global citation graph as its data source. Microsoft Academic used to be our primary source but was discontinued in the end of 2021.<br><br>

OpenAlex has successfully bridged this gap and now provides even more relevant information as the new primary source, for example links to the authors' ORCID pages or whether a paper has been retracted. OpenAlex is highly recommended for  its fast, open, and high-quality scholarly data and its track record of continuous innovation.
`,
          name: "Tim Wölfle",
          org: `Local Citation Network`,
        },





        {
          short: `Before learning about OpenAlex, I had to rely on paid services...<br><br>

But now OpenAlex gives me <strong> an open-source alternative that's large, free, and has an easy-to-use API.</strong>`,
          long: `I am a PhD student with research interests in science & technology policy, scientometrics, machine learning, and data science. OpenAlex is helping me to gain access to large-scale bibliometric data with its convenient and free API. I am using the data OpenAlex provides to research the evolution of scientific communities through citation network analysis of directed acyclic graphs.<br><br>

Before learning about OpenAlex, I had to rely on paid services like Web of Science, Scopus, or Dimensions for bibliometric data.  But now OpenAlex gives me an open-source alternative that's large, free, and has an easy-to-use API.<br><br>

Although there are other options available for academic or corporate researchers who can afford costly subscription services, a service like OpenAlex levels the playing field and makes data equally accessible to researchers. This may help researchers have a common source of information for comparison, instead of trying to compare data from one paid service to another.<br><br>

I would highly recommend OpenAlex to others with scientometric and bibliometric interests. Some of the most important advances in our world are attributable to increasing access to technologies. Its open-access values encourage a common data framework of accessibility, equity, and diversity. `,
          name: "Chris B.",
          org: `PhD student at US research university`,
        },





        {
          short: `OpenAlex is an easy-to-use solution with <strong> excellent documentation, extensive and improving database, and a robust yet simple API </strong> that's free of charge.<br><br> This makes it the best solution for academic use cases like ours that are working to further diversity and equity in research.`,
          long: `I am the lead student researcher for Georgia Tech's Executive VP of Research. A primary aim of our office is to document research and faculty collaboration of the college with HBCU institutions as a part of institute collaboration goals. <br><br>

 We used OpenAlex extensively as a ground truth to document research across Georgia Tech and its HBCU partners.<br><br>

  OpenAlex is an easy to use solution with excellent documentation, extensive and improving database, and a robust yet simple API that's  free of charge. This makes it the best solution for academic use cases like ours that are working to further diversity and equity in research. I recommend OpenAlex to whoever I know to be working in the domain of scientometrics.`,
          name: "Chinar Dankhara",
          org: `Georgia Institute of Technology`,
        },



        {
          short: `I use the OpenAlex API every week (sometimes every day)...<br><br>

The clear syntax makes it easy to construct a query, and the grouping, filtering, and limiting gives us snapshots of trends very quickly. <strong> This is a powerful tool...integral and vital... </strong>`,
          long: `I am a Collection Analysis Librarian, responsible for better understanding our campus publishing patterns and helping to negotiate open publishing agreements with publishers. I need high quality bibliographic metadata to do this work, and while I do have access to some subscription products, I still use the OpenAlex API every week (sometimes every day).

The clear syntax makes it easy to construct a query, and the grouping, filtering, and limiting gives us snapshots of trends very quickly. This is a powerful tool that has already cemented itself as an integral and vital part of bibliographic studies.`,
          name: "Eric Schares",
          org: `Iowa State University Library`,
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