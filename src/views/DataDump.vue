<template>
<v-container class="page">
  <h2 class="text-h3">Data dump</h2>
  <p>
    The data dump is a complete export of the  OpenAlex database; with it, you can host and run your own identical local copy of OpenAlex.
  </p>
  <p>
    The data dump is great if you're migrating from Microsoft Academic Graph (MAG) to OpenAlex. In that case, you'll also want to check out our <router-link to="./mag-migration-guide">MAG migration guide.</router-link> Either way, don't forget to take a look at the <router-link to="./schema">schema,</router-link> which documents how the dataset is put together.
  </p>
  <p>
    For many use cases, however, the full 500-terabyte data dump is overkill&mdash;you'll be better served using our free <router-link to="./rest-api">REST API.</router-link> The API lets you  access and query the full dataset, without having to host a humongous database.
  </p>

  <h4 class="text-h4 mt-12" id="download">Download</h4>
  <p>
    The dataset is hosted on Amazon Web Services (AWS) S3. Here's the URI:
  </p>
  <a class="font-weight-bold pb-12" href="" style="font-size: 28px;">
    s3://openalex/data_dump_v1
  </a>

  <p class="mt-6">
    The data is hosted in a <a
      href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ObjectsinRequesterPaysBuckets.html">"Requester Pays" bucket,</a> which means you'll be responsible for the cost of the transfer (around $10 USD). If you can't afford this, no problem&mdash;just
    <a href="mailto:team@ourresearch.org">let us know,</a> and we'll cover the cost.
  </p>


</v-container>
</template>

<script>
export default {
  name: "DataDump",
  metaInfo: {title: "Data dump"}
}
</script>

<style scoped>

</style>