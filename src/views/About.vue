<template>
  <v-container class="page">
    <h3 class="text-h3">About</h3>
    <p>
      OpenAlex is a free and open catalog of the world's scholarly papers, researchers, journals, and institutions
      &mdash; along with all the ways they're connected to one another.
    </p>
    <p>

      Using OpenAlex, you can <strong>build</strong> your own scholarly search engine, recommender service, or knowledge
      graph. You can help <strong>manage</strong> research by tracking citation impact, spotting promising new research
      areas, and identifying and promoting work from underrepresented groups. And you can do <strong>research</strong> on research
      itself, in areas like
      <a href="https://en.wikipedia.org/wiki/Bibliometrics">bibliometrics</a>,
      <a href="https://en.wikipedia.org/wiki/Science_and_technology_studies">science and technology studies</a>, and
      <a href="https://en.wikipedia.org/wiki/Science_of_science_policy">Science of science policy</a>.
    </p>
    <p>
      Because we think all research should be free and open, OpenAlex is free and open itself, and we're built on a fully <a href="https://github.com/ourresearch/openalex-guts">Open Source codebase.</a>
    </p>
    <p>
      We believe the global research system is one of humankind's most beautiful creations. OpenAlex aims to make that whole beautiful creation available to everyone, everywhere.
    </p>


    <h4 class="text-h4" id="past-and-future">Past and future</h4>
    <p>
      Let's start <em>way</em> back at the beginning, with the ancient <a
        href="https://en.wikipedia.org/wiki/Library_of_Alexandria">Library of Alexandria.</a> Working create a Universal
      Library, they didn't just <em>gather</em> knowledge &mdash; they made it useful by <em>indexing</em> it in the
      world's first library catalog, the
      <a href="https://en.wikipedia.org/wiki/Pinakes">Pinakes.</a> That's what we're trying to do, too, and so our name
      is an homage to them!
    </p>
    <p>
      Fast forward a few millenia: OpenAlex had been a dream at
      <a href="https://ourresearch.org">our little nonprofit</a> for a long time, but two doors opened simultaneously in
      May 2021. First,
      <a href="https://blog.ourresearch.org/arcadia-2021-grant/">we received a generous, $4.5M grant</a> from <a
        href="https://www.arcadiafund.org.uk/">Arcadia, a charitable fund of Lisbet Rausing and Peter Baldwin.</a>
      Second, Microsoft announced it would shutter <a
        href="https://www.microsoft.com/en-us/research/project/microsoft-academic-graph/">Microsoft Academic Graph
      (MAG),</a> which much of the community has come to rely upon as our best index of scholarly communication. So, we
      had the means and the opportunity, and we ran with it!
    </p>
    <p>
      OpenAlex beta launched on January 3rd, 2022. Currently the data is available via an <a
        href="https://docs.openalex.org/">API</a> and a full <a
        href="https://docs.openalex.org/download-all-data/openalex-snapshot">database snapshot.</a> We also have plans to create a web-based graphical user interface.
    </p>
    <p>
      If you're interested in following our progress, we encourage you to <a href="http://eepurl.com/hA8PhL">join our
      mailing list!</a>
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

    <h4 class="text-h4" id="pricing">Pricing</h4>
    <p>
      OpenAlex is <a href="https://docs.openalex.org/faq#how-much-does-openalex-cost">completely free.</a>
    </p>

    <p class="mt-4">
      We’re currently exploring sustainability models around premium access (like a daily update feed, or a
      high-throughput API). We’re proud that our other projects (<a
        href="https://unsub.org">Unsub</a> and <a href="https://unpaywall.org">Unpaywall</a>) have both been
      self-sustaining for years, and we think that’s vital for OpenAlex (and other scholarly infrastructure projects) as
      well.

    </p>


    <h4 class="text-h4" id="acknowledgements">Acknowledgements</h4>
    <p>
      We'd like to thank everyone behind all our <a href="#sources">data sources,</a> but especially the folks at <a href="https://aka.ms/msracad">MAG</a>
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

<style scoped lang="scss">
.text-h4 {
  padding-top: 50px;
}

</style>