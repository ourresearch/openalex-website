<template>
  <v-container class="page">
    <h3 class="text-h3">MAG migration guide</h3>
    <p>
      <a href="https://blog.ourresearch.org/were-building-a-replacement-for-microsoft-academic-graph/">From the
        beginning,</a> we've worked to ensure that users of Microsoft Academic Graph (MAG) could easily switch to using
      <router-link to="./data-dump">OpenAlex data dump</router-link>
      when <a
        href="https://www.microsoft.com/en-us/research/project/academic/articles/microsoft-academic-to-expand-horizons-with-community-driven-approach/">MAG
      goes away at the end of 2021.</a> If you're looking at making this switch, you're in the right place! The page
      describes what you'll need to do to switch, as well as getting into what differences you can expect between the
      two datasets.
    </p>

    <h4 class="text-h4" id="formatting-changes">1. ⚠️ Formatting changes (breaking!)</h4>
    <p>
      For the most part, the OpenAlex data dump is formatted just like the MAG one, for compatibility purposes. However,
      there are a few important changes. You'll probably need to modify your MAG ingest script to acommodate these:
    </p>
    <ul>
      <li>
        <strong>Header row:</strong>
        Tables now have a header row, which provides column names.
      </li>
      <li>
        <strong>New columns:</strong>
        There are a number of new columns with shiny cool new data (these are documented in part below, and more fully
        in the
        <router-link to="./schema">schema docs.</router-link>
      </li>
      <li>
        <strong>Host location:</strong>
        The
        <router-link to="./data-dump">data dump</router-link>
        is now hosted on Amazon Web Services (AWS) rather than Azure.
      </li>
    </ul>



    <h4 class="text-h4 pt-12" id="data-changes">2. ↪️ Data changes️</h4>
    <h5 class="text-h5" id="data-changes-removed">2.1 ❌ Removed</h5>
    <ul>
      <li>
        <strong>Patents:</strong>
        MAG included data for patents; OpenAlex doesn't.
      </li>
      <li>
        <strong>MAKES:</strong>
        MAG included code to help you create a private, locally-hosted REST API. This was called <a
          href="https://docs.microsoft.com/en-us/academic-services/knowledge-exploration-service/?view=makes-3.0">MAKES,</a>
        and OpenAlex doesn't support it. Instead, we support a single
        <router-link to="./rest-apy">centrally-hosted REST API</router-link>
        that anyone can use, without having to host it or get the code running. Of course, if you want to create your
        own local API to serve the dataset you can still do that.
      </li>
      <li>
        <strong>Random webpage-hosted papers:</strong>

        MAG piggybacked their harvesting on the Bing crawler, which spiders the whole Web. In contrast, OpenAlex just
        focuses on scholarly sources. This targeted approach provides better coverage in some ways, and worse in others.
        In particular, MAG indexed papers hosted exclusively on informal faculty webpages; OpenAlex doesn't.
      </li>
    </ul>

    <h5 class="text-h5" id="data-changes-frozen">2.2 ❄️ Frozen</h5>
    <p>MAG included some types of data that OpenAlex will continue to store and release, but <em>without updating it.</em>  This frozen data is still useful for many purposes, including backwards compatibility and historical research &mdash; but it's important to remember that after Jan 1, it'll become increasingly stale, and increasingly unsuitable for many use cases.
    </p>
    <p>
      Please see the <router-link to="./schema">schema docs</router-link> to get the detailed, column-level documentation for which data is frozen. But here's a high-level overview:
    </p>
    <ul>
      <li>
        MAG computed
      </li>
    </ul>


    <h5 class="text-h5" id="data-changes-ongoing">2.3 👍 Ongoing</h5>
    <h5 class="text-h5" id="data-changes-new">2.4 🔥 New</h5>




    <h4 class="text-h4 pt-12" id="coverage-comparison">3. Coverage comparison</h4>


  </v-container>
</template>

<script>
export default {
  name: "MagMigrationGuide",
  metaInfo: {title: "MAG migration guide"}
}
</script>

<style scoped>

</style>