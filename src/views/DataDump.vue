<template>
  <v-container class="page">
    <h2 class="text-h3">Data dump</h2>

    <v-alert outlined type="info">
      <strong>Beta release:</strong>
      We recommend against using this data in production contexts until our official release on Jan 3.
    </v-alert>

    <p>
      The data dump is a complete export of the OpenAlex database; with it, you can host and run your own identical
      local copy of OpenAlex.  We release a new version of the data dump (updated with the latest data) approximately every two weeks.
    </p>
    <p>
      The data dump is great if you're migrating from Microsoft Academic Graph (MAG) to OpenAlex. In that case, you'll
      also want to check out our
      <router-link to="./mag-migration-guide">MAG migration guide.</router-link>
      Either way, don't forget to take a look at the
      <router-link to="./schema">schema,</router-link>
      which documents how the dataset is put together.
    </p>
    <p>
      For many use cases, the full 500-gigabyte data dump is overkill&mdash;you'll be better served using our
      free
      <router-link to="./rest-api">REST API.</router-link>
      The API lets you access and query the full dataset, without having to host a humongous database.
    </p>

    <h4 class="text-h4 mt-12" id="download">Download</h4>
    <p>
      The dataset is hosted on Amazon Web Services (AWS) S3 bucket.
      Here's the URI for the most recent dump:
    </p>
    <a class="font-weight-bold pb-12" href="" style="font-size: 28px;">
      s3://openalex/data_dump_v1/2021-10-11
    </a>

    <p class="mt-6">
      This is a <a
        href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/ObjectsinRequesterPaysBuckets.html">"Requester Pays"
      bucket.</a> Your AWS account will be charged for the cost of the transfer, which is around $10 USD &mdash; but if
      you can't afford that, just
      <a href="mailto:team@ourresearch.org">let us know</a> and we'll be happy cover the cost for you. The bucket is in the us-east-1 region.
    </p>

    <p>
      Here's how you'd download the whole data dump using the <a href="https://aws.amazon.com/cli/">AWS Command Line
      Interface:</a>
    </p>

    <div class="my-6">
      <code>
        aws s3 cp s3://openalex/data_dump_v1/2021-10-11 . --recursive --request-payer requester
      </code>

    </div>


    <p>
      The whole dataset is about 500GB. Here's <a
        href="https://docs.google.com/spreadsheets/d/1cjLQvEFwiVjE7Xj4WTOhwxzu8ZCHMxaz6xHOLGaQAeA/edit#gid=0" target="_blank">a list of
      all the included files and their sizes.</a> If you want to download just one file, you just specify it as part of
      the path, like this:
    </p>
    <div class="my-6">
      <code>
        aws s3 cp s3://openalex/data_dump_v1/2021-10-11/LISTING.txt . --request-payer requester
      </code>
    </div>

    <h4 class="text-h4 mt-12" id="tables">Format</h4>
    <p>
      The data export files are:
      <ul>
    <li>tab-delimited</li>
    <li>uncompressed</li>
    <li>with a header row (please make use of the header row because additional columns may be added in future releases)</li>
    <li>using a zero-length string for NULL</li>
    <li>escaped as per the ESCAPE option in Amazon Redshift's <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_UNLOAD.html">UNLOAD documentation</a>.</li>
    <li>not using quotes around strings</li>
    <li>one file per table, other than PaperAbstractsInvertedIndex which is spread across several files</li>
    </ul>
    </p>
    <p>
      This data export format was chosen to be backwards compatible with MAG (the format is the same as MAG's other than the addition of a header row).
    </p>

    <h4 class="text-h4 mt-12" id="tables">Tables</h4>
    <p>
      Once you've downloaded the full directory, you'll be able to import the files into tables. Here are <a
        href="https://docs.google.com/spreadsheets/d/1nHgwbT6RjasGPtOQhBNG4Gf5qHGAhlHZbQPO9ZFwRzU/edit#gid=0" target="_blank">the tables
      included in the data dump,</a> along with their sizes (rows and MBs). It's nearly the same as the list of files
      linked above, since most tables are contained within a single file.
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