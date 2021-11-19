<template>
  <v-container class="page">
    <h3 class="text-h3">MAG migration guide</h3>
    <v-alert outlined type="info">
        <strong>Beta release:</strong>
        We recommend against using OpenAlex data in production contexts until our official release on Jan 3.
      </v-alert>
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

    <ol>
      <li><a href="#formatting-changes">Formatting changes</a></li>
      <li>
        <a href="#data-changes">Data changes</a>
        <ol>
          <li><a href="#data-changes-unsupported">Unsupported</a></li>
          <li><a href="#data-changes-archival">Archival</a></li>
          <li><a href="#data-changes-ongoing">Ongoing</a></li>
          <li><a href="#data-changes-ongoing"><a href="#data-changes-new">New</a></a></li>
        </ol>
      </li>
      <li><a href="#coverage-comparison">Coverage comparison</a></li>
    </ol>

    <h4 class="text-h4" id="formatting-changes">1. Formatting changes (breaking!)</h4>
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
    </ul>


    <h4 class="text-h4" id="data-changes">2. Data changes️</h4>
    <p>
      There are four main relationships between the data/features of OpenAlex and MAG:
      <a href="#data-changes-unsupported">Unsupported,</a> <a href="#data-changes-archival">Archival,</a> <a
        href="#data-changes-ongoing">Ongoing,</a> and
      <a href="#data-changes-new">New.</a> Depending on the data type, new data may come from MAG or OpenAlex, and this
      will in some cases change on January 3, the date of OpenAlex official release (and approximately the date when MAG
      is no longer updated). Here's a picture:
    </p>
    <img src="https://i.imgur.com/NFd267I.png" alt="" style="max-width: 800px;">
    <p>As you can see, a lot changes on January 3 when OpenAlex comes out of beta and MAG stops being updated. Currently, all data is live (regularly updated), and most updates are sourced from MAG, since MAG is still active. After Jan 3, most data will be updated via from OpenAlex itself, and some data will become frozen (longer receive updates).</p>

    <p>Below, we dig in to the different data types: </p>

    <h5 class="text-h5" id="data-changes-unsupported">2.1 Unsupported ❌ </h5>
    <p>These are MAG data types and functionality that are <em>not included</em> in OpenAlex.
    <p>
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

    </ul>


    <h5 class="text-h5" id="data-changes-archival">2.2 Archival 📦️ </h5>
    <p>This data is included in OpenAlex. Until Jan 3, it will be updated via MAG data dumps; after Jan 3, it be included in the OpenAlex data dump and API, but it will
      <em>no longer be updated.</em>
    </p>

    <p>
      This frozen data will remain useful for many purposes, including backwards compatibility and historical research
      &mdash; but it's important to remember that after Jan 3, it'll become increasingly stale, and increasingly
      unsuitable for many use cases.
    </p>
    <p>
      Please see the
      <router-link to="./schema">schema docs</router-link>
      to get the detailed, column-level documentation for which data will be frozen. But here's a high-level overview:
    </p>
    <ul>
      <li>
        <strong>Rank:</strong>
        MAG computed a "rank" property for lots of things. We won't continue to update this rank after Jan 3.
      </li>
      <li>
        <strong>Family:</strong>
        MAG's concept of "family" was used to group a preprint with its associated paper. We won't keep doing this after Jan 3.
        Instead, OpenAlex treats a preprint and associated paper as the <em>same work,</em> with two different <em>versions.</em>
        That version relationship is enumerated in the new
        <router-link to="./schema#PaperUrls_Version">PaperUrls.version</router-link>
        column.
      </li>
      <li>
        <strong>GRID IDs:</strong>
        GRID has now been <a href="https://www.digital-science.com/grid-passes-the-torch-to-ror-faqs/">officially
        replaced</a> by
        <a href="https://ror.org/">ROR,</a> and we'll stop updating GRID IDs, and use ROR IDs instead. Since there's a
        simple 1-to-1 mapping between them, it's easy to
        <a href="https://ror.readme.io/docs/gridror-transition-faq">transition from GRID to ROR.</a>
      </li>
      <li>
        <strong>Conferences:</strong>
        In an early announcement, we said OpenAlex might not support conference papers. This turns out to be only partly
        true. We actually will index the vast majority of conference <em>papers.</em> However, we won't do a good job of
        indexing the <em>conference instances</em> and <em>conference series</em> that publish the papers. Those tables
        will be frozen after Jan 3.
      </li>
      <li>
        <strong>Random webpage-hosted papers:</strong>
        MAG indexed papers informally hosted on faculty and personal homepages; after Jan 3, we won't be adding more of these.
      </li>
      <li>
        <strong>Paper resources:</strong> This table, which gathered code and data associated with a given papers, will
        be frozen on Jan 3.
      </li>
      <li>
        <strong>Paper citation contexts:</strong> This table, indexed the text around each citation, will be frozen on Jan 3.
      </li>
    </ul>



    <h5 class="text-h5" id="data-changes-ongoing">2.3 Ongoing 👍 </h5>
    <p>
      This data is included in OpenAlex. Until Jan 3, it'll be updated via MAG data
      dumps. After Jan 3, it will be updated via OpenAlex's algorithms and data sources.
    </p>
    <p>
      For many MAG use cases, you'll be able to ignore this transition, as the data will be compatible. However, it's
      important to note that our methods of data collection and processing differ from MAG's. So for many analytical and
      research cases, it'll be important to note the discontinuity on Jan 3, as MAG's update processes are replaced by
      ours. OpenAlex is <em>compatible</em> with MAG, but it is absolutely not <em>identical</em> to MAG. In some ways
      our coverage will be better and more accurate; in others, not so much.
    </p>
    <p>
      Because we get a lot of questions about a few specific MAG data types, we're listing them below to clear up any
      confusion &mdash; but keep in mind this list is not comprehensive:
    </p>
    <li>
      <strong>Author name disambiguation (AND):</strong>
      Like MAG, OpenAlex will use document properties (title, topic, journal, etc) to identify and assign unique author
      IDs, even when authors share a name &mdash; so you'll see one ID for the biologist Jane Smith, and a different one
      for the Jane Smith who's an art historian. Also like MAG, we'll identify two name strings as referring to the same person
      even if they are written differently ("J smith" and "Jane Smith").
    </li>
    <li>
      <strong>Work clustering:</strong>
      Like MAG, we'll infer that two papers are the same, even when they don't have <a
        href="https://en.wikipedia.org/wiki/Persistent_identifier">PIDs.</a> We'll use fingerprint-based fuzzy matching
      that's robust again typos, and can identify different versions of the same paper (preprint and version of record,
      for example).
    </li>
    <li>
      <strong>Institution identification:</strong>
      Like MAG, we'll identify authors' institutions, even there are no <a
        href="https://en.wikipedia.org/wiki/Persistent_identifier">PIDs</a> or other structured metadata to use.
    </li>
    <li>
      <strong>Topic (field of study) tagging:</strong>
      Like MAG, we automatically tag works with their field of study (variously described as "concepts," "topics," and
      "fields of study" in the MAG documentation). We're using MAG's same automatically-generated controlled taxonomy,
      although we've trimmed it down a bit: we only assign topics that are apply to more than 500 individual works. This
      means we support about half as many topics as MAG did. We have added a field that specifies the topic assignment algorithm
      used for a given topic assignment (MAG's algorithm or the new OpenAlex algorithm) to help when comparing
      topics over time.

    </li>


    <h5 class="text-h5" id="data-changes-new">2.4 New 🔥 </h5>
    <p>
      These data types and functions are included in OpenAlex, but are <em>not in MAG</em>. They're currently updated using
      OpenAlex's algorithms and data sources, and that will continue after Jan 3.
    </p>
    <ul>
      <li>
        <strong>Open Access (OA) status:</strong>
        By integrating the industry-standard <a href="https://unpaywall.org">Unpaywall</a> dataset, OpenAlex can now tell you whether a given paper is OA or not, name its copyright license (eg CC-BY), and give you the URL where to find it.
      </li>
      <li>
        <strong>Full ISSN support:</strong>
        OpenAlex now provides a comprehensive list of ISSNs associated with each journal, including the <a
          href="https://www.issn.org/understanding-the-issn/assignment-rules/the-issn-l-for-publications-on-multiple-media/">ISSN-L</a>, the standard for for deduplicating journals.
      </li>
      <li>
        <strong>ORCID:</strong>
        In addition to disambiguating authors, OpenAlex also matches authors to their <a href="https://orcid.org/">ORCID</a> IDs.
      </li>
      <li>
        <strong>ROR:</strong>
        We report <a href="https://ror.org/">ROR</a> IDs, the new standard which has replaced the old GRID system. Since there's a
        simple 1-to-1 mapping between them, it's easy to
        <a href="https://ror.readme.io/docs/gridror-transition-faq">transition from GRID to ROR.</a>
      </li>
      <li>
        <strong>REST API:</strong>
        Because not everyone has the time and money to manage a 500GB dataset, we're launching a free <router-link to="./rest-api">REST API</router-link> that will support easy, expressive access to the dataset without the need for much technical knowledge.
      </li>

    </ul>

    <h4 class="text-h4" id="coverage-comparison">3. Coverage comparison</h4>
    <p>
      Because OpenAlex will use a different set of sources and algorithms from MAG, our coverage and accuracy will be
      different. We'd like to compare the two in greater detail here &mdash; for example, to compare the systems based
      on number and type of new articles, relative percentage of new papers which include institutional affiliation
      information, precision/recall of author clustering, and so forth.
    </p>
    <p>
      We're making progress on these comparisons now, and our internal data looks good. OpenAlex will offer similar
      accuracy and coverage to MAG (better in some ways, and worse in others). However, the comparisons are in flux
      since OpenAlex is still under construction, and so we don't currently have any data to share.
    </p>
    <p>
      Please <a href="http://eepurl.com/hA8PhL">subscribe to our mailing list</a> to get updates!
    </p>
    <div class="py-12"></div>


  </v-container>
</template>

<script>
export default {
  name: "MagMigrationGuide",
  metaInfo: {title: "MAG migration guide"}
}
</script>

<style scoped lang="scss">
.text-h4 {
  padding-top: 120px;
}

.text-h5 {
  padding-top: 40px;
}

</style>