<template>
<v-container class="page">
  <h3 class="text-h3">REST API</h3>

  <v-alert type="info" outlined class="my-12">
    This feature is still cooking! <a href="http://eepurl.com/hA8PhL">Join our mailing list</a> to be notified when it's out of the oven.
  </v-alert>

  <p>
    OpenAlex will not support the locally-hosted, private <a
          href="https://docs.microsoft.com/en-us/academic-services/knowledge-exploration-service/?view=makes-3.0">MAKES API tool.</a> Instead, we will have a single,
        <router-link to="./rest-apy">centrally-hosted REST API</router-link>
        that anyone can use, without having to host it or get the code running.
  </p>
  <p>
    The API will be free. It will be rate-limited, but have high rate-limits. It'll be read-only, and deliver data in JSON format.
  </p>

  <h4 class="text-h4" id="entity">Entity endpoints</h4>
  <p>
    Entity endpoints let you quickly retrieve a specific scholarly entity (eg paper, person, journal, etc) by its ID. Signatures will look like <code>/doi/:doi</code> and <code>/journal/:issn</code>.
  </p>


  <h4 class="text-h4" id="slice-and-dice">Slice-and-dice endpoints</h4>
  <p>
    Slice-and-dice endpoints will let you query the data with filters to return either item lists, or aggregate group counts. An example call will look something like this:
  </p>
  <div class="mb-6">
    <code>
      /query?filter=issn:2167-8359,license:cc-by&groupby=year
    </code>
  </div>
  <p>
     This would give you the annual counts of CC-BY-licensed articles from the journal PeerJ. You can  use the slice-and-dice endpoints to do things like build a faceted scholarly search engine, get data for a science policy evaluation, track Open Access mandate compliance, help monitor research impact, do scientometrics research, and much more!
  </p>




</v-container>
</template>

<script>
export default {
  name: "RestApi",
  metaInfo: {title: "REST API"}
}
</script>

<style scoped>

</style>