<template>
<v-container class="page">
  <h2 class="text-h3 pb-6">Use the data/h2>

  <p>
  There are two ways to access the OpenAlex dataset: the REST API, and the data dump.  Both are free and open.
  </p>
    <p>
      The <router-link to="./data-dump"></router-link> is an complete export of the  OpenAlex database&mdash;verything's included. When you download the data dump and  put it to your own database, you can run your own identical local copy of OpenAlex. If you're migrating to OpenAlex from Microsoft Academic Graph (MAG), this is probably what you want (you'll also want to check out our <router-link to="./mag-migration-guide">MAG migration guide).</router-link>
    </p>

    <p>
      For many use-cases, the <router-link to="./rest-api">REST API</router-link> is a much simpler way to get access OpenAlex. When you use the REST API, you just make individual queries against our database, so you don't have to download, process, and host the whole massive dataset yourself. The REST API will launch Jan 1, and is still under development.
    </p>





</v-container>
</template>

<script>
export default {
  name: "UseTheData",
  metaInfo: {title: "UseTheData"}
}
</script>

<style scoped>

</style>