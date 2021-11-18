<template>
  <v-footer
      class="py-10 site-footer"
      dark
      color="#555"
  >
    <v-container>
      <v-row>
        <v-col cols="12" sm="2">
          <div>
            <router-link to="/data-dump">Data dump</router-link>
          </div>
          <div>
            <router-link to="/rest-api">REST API</router-link>
          </div>
          <div>
            <router-link to="/schema">Schema</router-link>
          </div>
          <div>
            <router-link to="/mag-migration-guide">MAG migration guide</router-link>
          </div>
          <div>
            <router-link to="/faq">FAQ</router-link>
          </div>
        </v-col>
        <v-col cols="12" sm="2">
          <div>
            <router-link to="/about">About</router-link>
          </div>
          <div>
            <router-link to="/contact">Contact</router-link>
          </div>
          <div>
            <a href="http://eepurl.com/hA8PhL" target="_blank">Mailing list</a>
          </div>
          <div>
            <a href="https://twitter.com/openalex_org" target="_blank">Twitter</a>
          </div>
          <div>
            <a href="https://github.com/ourresearch/openalex-guts" target="_blank">Source code</a>
          </div>
        </v-col>
        <v-col cols="12" sm="4" class="text-center">
                              <router-link to="/">
                                  <img class="site-footer-logo" src="./assets/openalex-logo-icon.png" alt=""/>
                              </router-link>
        </v-col>
        <v-col cols="12" sm="4" class="body-2">
          OpenAlex is made with ❤︎ by <a style="text-decoration: underline;"
                                         href="https://ourresearch.org">OurResearch,</a> with generous support from <a
            style="text-decoration: underline;"
            href="https://www.arcadiafund.org.uk/">Arcadia&mdash;a
          charitable fund of Lisbet Rausing and Peter Baldwin</a>.
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "SiteFooter"
}
</script>

<style scoped lang="scss">
.site-footer {
  line-height: 1.8;
  margin-top: 150px;
  .body-2 {
    font-family: Inconsolata;
  }

  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      text-decoration: underline;
    }
  }
}

img.site-footer-logo {
  width: 70px;
  opacity: 1;

}

</style>