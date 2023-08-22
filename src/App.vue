<template>
  <v-app>
    <v-app-bar
        app
        elevate-on-scroll
        fixed
        color="white"
        clipped-left

    >
      <router-link to="/" class="d-flex main-logo">
        <img src="./assets/OpenAlex-logo-5.png"/>
      </router-link>

      <v-spacer></v-spacer>

      <!--      DESKTOP MENU -->
      <v-toolbar-items class=" hidden-sm-and-down">
        <v-btn class="no-active low-key-button" text to="./about">About</v-btn>
        <v-btn class="no-active low-key-button" text to="./testimonials">Testimonials</v-btn>
        <v-btn class="no-active low-key-button" text to="./pricing">Pricing</v-btn>
        <v-btn class="no-active low-key-button" text to="./help">Help</v-btn>
        <v-btn class="no-active low-key-button" text to="./webinars">Webinars</v-btn>
        <v-btn class="no-active low-key-button" text href="https://docs.openalex.org/">
          Docs
          <v-icon right>mdi-open-in-new</v-icon>
        </v-btn>
      </v-toolbar-items>

      <!--      MOBILE MENU -->
      <div class="hidden-md-and-up">
        <v-menu offset-y content-class="no-highlight" min-width="150">
          <template v-slot:activator="{on}">
            <v-btn icon color="" v-on="on">
              <v-icon class="">mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item to="/about">
              About
            </v-list-item>
            <v-btn class="no-active low-key-button" text to="./about">Testimonials</v-btn>
            <v-list-item to="./pricing">
              Pricing
            </v-list-item>
            <v-list-item to="/help">
              Help
            </v-list-item>
            <v-list-item to="/webinars">
              Webinars
            </v-list-item>
            <v-btn class="no-active low-key-button" text href="https://docs.openalex.org/">
              Docs
              <v-icon right>mdi-open-in-new</v-icon>
            </v-btn>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>


    <v-main>
      <router-view/>
    </v-main>

    <site-footer/>

  </v-app>
</template>

<script>
import SiteFooter from "@/SiteFooter";

export default {
  name: 'App',
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'OpenAlex',
    titleTemplate: '%s | OpenAlex',
    link: [],

    meta: []
  },
  components: {
    SiteFooter,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">

// hack to get rid of vue's active class on buttons, which makes them display different
// when they are linking to the page you're on right now.
// https://github.com/vuetifyjs/vuetify/issues/8172#issuecomment-596935920
// you have to also add this to the button:
// <v-btn active-class="no-active"></v-btn>
.v-btn--active.no-active::before {
  opacity: 0.05 !important;
}

.v-btn--active.no-active {
  //text-decoration: underline !important;
  //border-bottom: 3px solid #333;
}


body {
  .v-application {
    //font-family: Inconsolata !important;
    font-size: 16px;

    p, ul, ol, li {
      //font-family: dosis !important;
      font-family: roboto !important;
      //font-family: Inconsolata !important;
      //font-family: Helvetica !important;
      font-size: 16px !important;
      //letter-spacing: .05em !important;
    }

    .text-h1, .text-h2, .text-h3, .text-h4, .text-h5, .text-h6,  {
      //font-family: roboto !important;
      font-family: Inconsolata !important;
      //font-family: dosis !important;
      font-weight: 100;
      letter-spacing: 0.01em !important;
      color: #000 !important;
      margin: 30px 0 10px;
    }
    .help-form {
      width: 50%;
      margin: 0 auto;
    }

  }

}

.page {
  margin-top: 100px;
}


.low-key-button {
  font-size: 16px !important;
  text-transform: none !important;
  font-weight: normal !important;
  letter-spacing: 0 !important;
}


a.main-logo {
  img {
    height: 70px;
    margin-left: -20px;
  }

  color: #000 !important;
  font-family: dosis;
  font-weight: 300;
  letter-spacing: .05em;
  font-size: 30px;
  text-decoration: none;

  .logo-text {
    margin-left: 10px;
    padding-left: 10px;
    //border-left: 1px solid #000;

  }

}

</style>
