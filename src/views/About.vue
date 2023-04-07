<template>
  <v-container class="page">
    <h3 class="text-h3">About</h3>
    <p>
      OpenAlex is a free and open catalog of the world's scholarly papers, researchers, journals, and institutions
      &mdash; along with all the ways they're connected to one another.
    </p>
    <p>

      Using OpenAlex, you can <strong>build</strong> your own scholarly search engine, recommender service, or trend
      detector. You can help <strong>manage</strong> research by tracking impact, spotting emerging fields, and
      identifying key groups. And you can do <strong>research</strong> to better understand how scholarship works..
    </p>
    <p>
      Because we think all research should be free and open, OpenAlex is free and open itself:
    </p>
    <ul>
      <li>
        We're operated by a <a href="http://ourresearch.org/transparency">sustainable and transparent nonprofit,</a>
      </li>
      <li>
        our <a
        href="https://docs.openalex.org/download-all-data/openalex-snapshot">complete dataset</a>  is free under the
        <a href="https://creativecommons.org/share-your-work/public-domain/cc0/">CC0 license,</a>
      </li>
      <li>
        We offer a
        <a href="https://docs.openalex.org/">free API,</a>
        and
      </li>
      <li>
        <a href="https://github.com/orgs/ourresearch/repositories?language=&q=openalex&sort=&type=public">Our code
        </a> is fully open-source.
      </li>
    </ul>

    <p class="mt-6">
      We believe the global research system is one of humankind's most beautiful creations. OpenAlex aims to make that
      whole beautiful creation available to everyone, everywhere.
    </p>


    <h4 class="text-h4" id="past-and-future">Past and future</h4>
    <p>
      Let's start <em>way</em> back at the beginning, with the ancient <a
        href="https://en.wikipedia.org/wiki/Library_of_Alexandria">Library of Alexandria.</a> Working create a Universal
      Library, they didn't just gather knowledge &mdash; they made it useful by indexing it in the
      world's first library catalog, the
      <a href="https://en.wikipedia.org/wiki/Pinakes">Pinakes.</a> That's what we're trying to do, too, and so our name
      is an homage to them!
    </p>
    <p>
      Fast forward a few millenia: OpenAlex had been a dream at
      <a href="https://ourresearch.org">our little nonprofit</a> for a long time, but two doors opened simultaneously in
      May 2021. First,
      <a href="https://blog.ourresearch.org/arcadia-2021-grant/">we received a generous grant</a> from <a
        href="https://www.arcadiafund.org.uk/">Arcadia, a charitable fund of Lisbet Rausing and Peter Baldwin.</a>
      Second, Microsoft announced it would shutter <a
        href="https://www.microsoft.com/en-us/research/project/microsoft-academic-graph/">Microsoft Academic Graph
      (MAG),</a> which much of the community has come to rely upon as our best index of scholarly communication. So, we
      had the means and the opportunity, and we ran with it!
    </p>
    <p>
      OpenAlex beta launched on January 3rd, 2022. Currently the data is available via an <a
        href="https://docs.openalex.org/">API</a> and a full <a
        href="https://docs.openalex.org/download-all-data/openalex-snapshot">database snapshot.</a> We're also working
      on a web-based graphical user interface.
    </p>

    <h4 class="text-h4" id="contact">Contact</h4>
    <p>
      We'd love to hear from you! If you have a question, and you can't find the answer in our <a
        href="https://docs.openalex.org/">documentation</a>,
      submit a ticket via our <a href="/help">help page</a>.
    </p>

    <p>
      You can also stay in touch with us via the <a href="https://groups.google.com/g/openalex-users">OpenAlex User
      Group</a> and via Twitter (<a href="https://twitter.com/openalex_org">@OpenAlex_org</a>) and Mastodon (<a
        href="https://mastodon.social/@OpenAlex">@OpenAlex@mastodon.social</a>).
    </p>


    <h4 class="text-h4" id="sources">Sources</h4>
    <p>
      OpenAlex is not doing this alone! Rather, we're aggregating and standardizing data from a whole bunch of other
      great projects, like a river fed by many tributaries. Our two most important data sources are
      <a href="https://aka.ms/msracad">MAG</a> and
      <a href="https://www.crossref.org/">Crossref.</a> Other key sources include:
    </p>
    <ul>
      <li><a href="https://orcid.org">ORCID</a></li>
      <li><a href="https://ror.org">ROR</a></li>
      <li><a href="https://doaj.org">DOAJ</a></li>
      <li><a href="https://unpaywall.org">Unpaywall</a></li>
      <li><a href="https://pubmed.ncbi.nlm.nih.gov/">Pubmed</a></li>
      <li><a href="https://www.ncbi.nlm.nih.gov/pmc/">Pubmed Central</a></li>
      <li><a href="https://www.issn.org/">The ISSN International Centre</a></li>
      <li>
        Subject-area and institutional repositories from <a href="https://arxiv.org">arXiv</a> to <a
          href="https://zenodo.org">Zenodo</a> and everywhere in between.
      </li>
    </ul>
    <p>
      You can get the full list of sources <a
        href="https://docs.openalex.org/api-entities/venues/get-lists-of-venues">using our API.</a>
    </p>

    <h4 class="text-h4" id="acknowledgements">Acknowledgements</h4>
    <p>
      We'd like to thank everyone behind all our <a href="#sources">data sources,</a> but especially the folks at <a
        href="https://aka.ms/msracad">MAG</a>
      for building a really audacious and cool thing, and providing us lots of help and support as we build its
      replacement.
    </p>


  </v-container>
</template>

<script>
export default {
  name: "About",
  metaInfo: {title: "About"}
}
</script>

<style scoped lang="scss">.text-h4 {
  padding-top: 50px;
}</style>