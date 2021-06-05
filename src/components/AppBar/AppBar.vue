<template>
  <v-app-bar
      color="#fff"
      app
      elevate-on-scroll
      :extended="showBannerContent"
  >
    <v-progress-linear
        :active="isGlobalLoading"
        indeterminate
        absolute
        top
        color="primary"
    ></v-progress-linear>
    <router-link to="/" class="black--text text-decoration-none text-h5 font-weight-bold">
<!--      <img class="mt-2"-->
<!--           style="height:32px;"-->
<!--           src="../../assets/unsub-logo.png"-->
<!--           key="big"-->
<!--           alt="Unsub logo"/>-->
      OpenAlex
    </router-link>
    <!--        <v-toolbar-title class="headline">-->
    <!--        </v-toolbar-title>-->

    <v-spacer />



<!--    MENUS, one for desktop and one for mobile. -->
    <div class="d-none">
      <div class="no-highlight ml-8 hidden-sm-and-down">
        <v-menu offset-y content-class="no-highlight">
          <template v-slot:activator="{on}">
            <v-btn text color="" v-on="on" class="">
              About
              <v-icon class="">mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item to="/team">
              Team
            </v-list-item>
            <v-list-item to="/press">
              Press
            </v-list-item>
            <v-list-item to="/contact">
              Contact
            </v-list-item>
            <v-list-item href="http://help.unsub.org/en/" target="_blank">
              Knowledge Base
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn text href="http://help.unsub.org/en/" target="_blank" class="mx-1">
          Help
        </v-btn>

        <v-btn text color="" v-if="!isLoggedIn" to="/purchase">
          Purchase
        </v-btn>
      </div>

      <div class="hidden-md-and-up">
        <v-menu offset-y content-class="no-highlight" min-width="150">
          <template v-slot:activator="{on}">
            <v-btn icon color="" v-on="on">
              <v-icon class="">mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item to="/request-demo" class="font-weight-bold">
              Get Demo
            </v-list-item>
            <v-list-item to="/team">
              Team
            </v-list-item>
            <v-list-item to="/press">
              Press
            </v-list-item>
            <v-list-item to="/contact">
              Contact
            </v-list-item>
            <v-list-item href="http://help.unsub.org/en/" target="_blank">
              Help
            </v-list-item>
            <v-list-item to="/purchase">
              Purchase
            </v-list-item>
            <v-list-item to="/login">
              Log in
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>




    <template v-slot:extension v-if="showBannerContent">
      <v-alert color="primary" text style="width: 100%; margin-bottom: 0;">
        <div class="primary--text text-center" style="width: 100%;">
              <span>
                <strong>🥳 New  version!</strong>
                We've added lots of features, including support for COUNTER 5.
              </span>
          <a class="ml-4" target="_blank" href="http://help.unsub.org/en/articles/5238375-release-notes-may-2021">
            See release notes
          </a>
          <v-icon color="primary" x-small>mdi-open-in-new</v-icon>
        </div>
        <v-btn color="primary" icon style="position: absolute; top: 0; right: 0;" class="mt-1 ml-1"
               @click="dismissBanner">
          <v-icon>mdi-close</v-icon>
        </v-btn>

      </v-alert>
    </template>


  </v-app-bar>
</template>

<script>
import {mapGetters} from 'vuex'
import {costTotal, instantUsagePercent, libraryFulfillmentPercent} from "@/shared/scenarioSummary";

export default {
  name: "AppBar",
  components: {
  },
  data() {
    return {
      thirdBreadcrumb: null,
      showBannerContent: !localStorage.getItem("hideNewVersionBanner17May2021"),
    }
  },
  methods: {
    logout() {
      this.$store.commit("clearSelectedScenario")
      this.$store.commit("clearPublisher")
      this.$store.commit("clearInstitution")
      this.$store.commit("logout")
      this.$router.push("/")
    },
    dismissBanner() {
      localStorage.setItem("hideNewVersionBanner17May2021", "true")
      this.showBannerContent = false
    }
  },
  computed: {
    ...mapGetters([
      'isLandingPage',
      'isGlobalLoading',
      'isLoggedIn',

      "userName",
      "userEmail",

      'institutionId',
      'institutionName',
      'institutionIsDemo',
      "institutionIsConsortium",
      'userConsortia',
      'userInstitutions',

      'publisherId',
      'publisherName',
      'institutionPublishers',
      'publisherPublisher',
      'publisherIsOwnedByConsortium',
      "publisherCurrencySymbol",

      'scenarioId',
      'scenarioName',
      'publisherScenarios',
      'selectedScenarioIsLoading',
      "scenarioJournals",
      "subrJournalsCount",


    ]),
    isApcPage() {
      // hack for now
      return !!location.href.match(/\/apc$/)
    },
    myCost() {
      return costTotal(this.scenarioJournals)
    },
    myInstantUsagePercent() {
      return instantUsagePercent(this.scenarioJournals)
    },
    libraryFulfillmentPercent() {
      return libraryFulfillmentPercent(this.scenarioJournals)
    },
    account() {
      return this.$store.getters.selectedAccount
    },
    selectedScenario() {
      return this.$store.getters.selectedScenario
    },
    backgroundColor() {
      return (this.institutionIsConsortium) ? "primary" : "white"
    },
    orgs() {
      return this.userConsortia.concat(this.userInstitutions)
    },
    orgsOtherThanCurrent() {
      return this.orgs.filter(i => {
        return i.institution_id !== this.institutionId
      })
    },
    userHasAConsortium() {
      return this.orgs.find(org => {
        return org.is_consortium
      })
    },

    publishersOtherThanCurrent() {
      const ret = this.institutionPublishers.filter(p => {
        return p.id !== this.publisherId
      }).sort((a, b) => {
        console.log("sorting", a, b)
        return a.is_owned_by_consortium - b.is_owned_by_consortium
      })

      console.log("publishersOtherThanCurrent", ret)
      return ret
    },
    scenariosOtherThanCurrent() {
      return this.publisherScenarios.filter(s => {
        return s.id !== this.scenarioId
      })
    },
    currentEntityPage() {
      if (!this.isLoggedIn) return
      if (this.institutionName) return "user"
      if (this.publisherName) return "institution"
    },
  },
  created() {
  },
  mounted() {
  },
  watch: {
    "$route": {
      immediate: true,
      handler: function (to, from) {

      }
    }
  }
}
</script>

<style lang="scss">
.breadcrumb-button {
  min-width: 0 !important;
  padding: 0 2px 0 7px !important;
  /*span.big-text {*/
  /*    !*font-weight: bold;*!*/
  /*    font-size: 18px;*/
  /*}*/
}


.v-toolbar__extension {
  /*background: #eee;*/
  padding-left: 10px;
  padding-right: 10px;


  //border-top: 1px solid #eee !important;
  /*padding-right: 27px;*/
  /*color: #fff;*/
  /*background: #2196F3;*/
  /*display: flex;*/
  /*justify-content: space-between;*/
}

.three-numbers {
  line-height: 1.1;
  font-size: 14px;
}


</style>