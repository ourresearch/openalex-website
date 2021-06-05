<template>
    <div class="home" style="min-height: 100vh;">
        <div class="pt-10 above-the-fold">
            <v-container class="text-center mt-10">
                <div class="tagline mt-10">
                    <h1 class="text-h2 mb-6 font-weight-bold">
                        OpenAlex
                    </h1>
                </div>
                <div class="text-h5 d-flex justify-center">
                    <p style="max-width: 600px;">
                        An open, comprehensive catalog of scholarship, connecting papers, authors, institutions, and journals.

                    </p>

                </div>
                <div class="mb-10 ">
                    <v-btn
                            x-large
                            class=""
                            color="primary">
                        Join mailing list
                    </v-btn>

                </div>
            </v-container>

        </div>


<!--        <homepage-user-logos/>-->

<!--        <homepage-selling-points />-->

<!--        <homepage-testimonials />-->

<!--        <v-card flat tile class=""  style="margin-bottom: -50px; padding: 150px 0;">-->
<!--            <v-container class="text-center my-12 py-6">-->
<!--                <div class="text-h4 py-2">-->
<!--                    Want to learn more?-->
<!--                </div>-->
<!--                <div class="text-h5">-->
<!--                    Schedule a free custom demo, or watch our video guided tour.-->
<!--                </div>-->
<!--                <div class="mt-4">-->
<!--                    <v-btn-->
<!--                            to="./request-demo"-->
<!--                            x-large-->
<!--                            class="ma-4"-->
<!--                            dark-->
<!--                            color="primary"-->
<!--                    >-->
<!--                        Get your demo-->
<!--                    </v-btn>-->
<!--                    <v-btn-->
<!--                            href="https://vimeo.com/420183913"-->
<!--                            target="_blank"-->
<!--                            x-large-->
<!--                            class="ma-4">-->
<!--                        Watch video-->
<!--                        <v-icon small class="ml-2">mdi-open-in-new</v-icon>-->
<!--                    </v-btn>-->

<!--                </div>-->
<!--            </v-container>-->

<!--        </v-card>-->






    </div>


</template>

<script>
    import HomepageUserLogos from "./HomepageUserLogos";
    import HomepageSellingPoints from "./HomepageSellingPoints";
    import HomepageTestimonials from "./HomepageTestimonials";

    // https://www.npmjs.com/package/vue-vimeo-player
    import {vueVimeoPlayer} from 'vue-vimeo-player'


    export default {
        name: 'home',
        components: {
            vimeoPlayer: vueVimeoPlayer,
            HomepageUserLogos,
            HomepageSellingPoints,
            HomepageTestimonials,
        },
        metaInfo: {
            // title: "Unsub: Get the data you need to reassess your library's Big Deal",
            // title: "Unsub: Library journals assessment dashboard for your Big Deal.",
            title: "OpenAlex: The open catalog to the global research system",
            titleTemplate: undefined, // have to override this or it'll get the site title template
        },
        data() {
            return {
                userEmail: "",
                errorMsg: ""
            }
        },
        computed: {
            count() {
                return this.$store.getters.count
            },
            productTourEmailSubject() {
                return encodeURIComponent("I'd like to schedule an Unsub product tour")
            },
        },
        methods: {},
        mounted() {
            if (this.$store.getters.userId) this.$router.push("/u")
            this.$store.commit("setIsLandingPage", true)
        },
        destroyed() {
            this.$store.commit("setIsLandingPage", false)
        },
    }
</script>

<style lang="scss">

    .above-the-fold {
        /*background: linear-gradient(0deg, rgba(230,230,230,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%);*/
        //background: linear-gradient(0deg, #eee 20%, #fff 20%);
    }




</style>
