<template>
<v-container class="page">
  <h3 class="text-h3">MAG migration guide</h3>
  <p>
    <a href="https://blog.ourresearch.org/were-building-a-replacement-for-microsoft-academic-graph/">From the beginning,</a> we've worked to ensure that users of Microsoft Academic Graph (MAG) could easily switch to using <router-link to="./data-dump">OpenAlex data dump</router-link> when <a
      href="https://www.microsoft.com/en-us/research/project/academic/articles/microsoft-academic-to-expand-horizons-with-community-driven-approach/">MAG goes away at the end of 2021.</a> If you're looking at making this switch, you're in the right place! The page describes what you'll need to do to switch, as well as getting into what differences you can expect between the two datasets.
  </p>

  <h4 class="text-h4" id="formatting-changes">1. Formatting changes (breaking!)</h4>
  <p>
    For the most part, the OpenAlex data dump is formatted just like the MAG one, for compatibility purposes. However, there are a few important changes. You'll probably need to modify your MAG ingest script to acommodate these:
  </p>
  <ul>
    <li>
      Tables now have a header row, which provides column names.
    </li>
    <li>
      There are a number of new columns with shiny cool new data (these are documented in part below, and more fully in the <router-link to="./schema">schema docs</router-link>.
    </li>
    <li>
      The <router-link to="./data-dump">data dump</router-link> is now hosted on Amazon Web Services (AWS) rather than Azure.
    </li>
  </ul>
  <h4 class="text-h4" id="data-changes">2. Data changes</h4>
  <h5 class="text-h5" id="data-changes-removed">2.1 Removed</h5>
  <h5 class="text-h5" id="data-changes-frozen">2.2 Frozen</h5>
  <h5 class="text-h5" id="data-changes-ongoing">2.3 Ongoing</h5>
  <h5 class="text-h5" id="data-changes-new">2.4 New</h5>
  <h4 class="text-h4" id="coverage-comparison">3. Coverage comparison</h4>




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