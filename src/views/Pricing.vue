<template>
  <v-container class="page">
    <h2 class="text-h3">Pricing</h2>
    <p>
      <strong>OpenAlex is free.</strong>
    </p>
    <p>
      The website, API, and data snapshot are all available at no charge. The data is licensed as <a
        href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noopener noreferrer">CC0</a> so it
      is free to use and distribute. As a nonprofit, making this data free and open is part of our mission.
    </p>
    <p>
      If the free service does not meet your needs, we offer a premium subscription service.
    </p>
    <ul>
      <li>You may not need premium! The free API (with its limit of
        <a href="https://docs.openalex.org/how-to-use-the-api/rate-limits-and-authentication" target="_blank"
          rel="noopener noreferrer">100,000 calls per day</a>), and/or the free <a
          href="https://docs.openalex.org/download-all-data/openalex-snapshot" target="_blank"
          rel="noopener noreferrer">data snapshot</a> are sufficient for many use cases, and we are proud to offer that as
        part of our commitment to open and accessible science.
      </li>
      <li>The premium service is a key part of our
        <a href="https://docs.openalex.org/additional-help/faq#whats-your-sustainability-plan" target="_blank"
          rel="noopener noreferrer">sustainability model.</a>
        Our other projects—<a href="https://unsub.org" target="_blank" rel="noopener noreferrer">Unsub</a> and <a
          href="https://unpaywall.org" target="_blank" rel="noopener noreferrer">Unpaywall</a>— have been self-sustaining
        for years, and we think that is vital for OpenAlex's long-term plan as well.
      </li>
      <li>
        If you are interested in our premium service, <a href="mailto:support@openalex.org">contact us for a quote.</a>
      </li>
    </ul>

    <h3 class="text-h3">OpenAlex Premium</h3>

    <!-- table generated using https://www.tablesgenerator.com/html_tables -->
    <div class="tg-wrap">
      <table class="tg">
        <thead>
          <tr>
            <th class="tg-g1fv"></th>
            <th class="tg-9ase">Free<br></th>
            <th class="tg-9ase">Premium</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="tg-0pky">Update frequency</td>
            <td class="tg-9etm">Monthly (via data dump)</td>
            <td class="tg-pgpg">Hourly (via API)<br></td>
          </tr>
          <tr>
            <td class="tg-0pky">API limit</td>
            <td class="tg-9etm">100k/day, max 10/second</td>
            <td class="tg-pgpg">As needed</td>
          </tr>
          <tr>
            <td class="tg-0pky">Support</td>
            <td class="tg-9etm">Best effort</td>
            <td class="tg-pgpg">Priority</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h4 class="text-h4">Use Cases</h4>
    <h5 class="text-h5">Faster update frequency</h5>
    <ul>
      <li>Get new articles as they are published</li>
      <ul>
        <li>Articles about a particular concept</li>
        <li>Articles by a certain person, institution, or journal</li>
      </ul>
      <li>Get new citations to articles</li>
      <ul>
        <li>Monitor a particular article or set of articles for new citations</li>
        <li>Montior all new citations</li>
      </ul>
      <li>See when articles change</li>
      <ul>
        <li>OA status changes</li>
        <li>Author metadata changes</li>
      </ul>
      <li>Technical: you get a API key that lets you use these two API endpoints:</li>
      <ul>
        <li><a href="https://docs.openalex.org/api-entities/works/filter-works#from_updated_date" target="_blank"
            rel="noopener noreferrer">https://docs.openalex.org/api-entities/works/filter-works#from_updated_date</a></li>
        <li><a href="https://docs.openalex.org/api-entities/works/filter-works#from_created_date" target="_blank"
            rel="noopener noreferrer">https://docs.openalex.org/api-entities/works/filter-works#from_created_date</a></li>
      </ul>
    </ul>

    <h5 class="text-h5">Higher API limit</h5>
    <ul>
      <li>Avoid having to download and sync the whole database</li>
      <ul>
        <li>Use our API to back production systems in real time</li>
        <li>Scroll through a large chunk of the whole database regularly, to keep internal systems up-to-date</li>
      </ul>
    </ul>

    <h5 class="text-h5">Priority support</h5>
    <ul>
      <li>Technical support and other questions and requests</li>
      <li>Work with us to have a great experience using OpenAlex</li>
    </ul>

  </v-container>
</template>

<script>
export default {
  name: "Pricing",
  metaInfo: { title: "Pricing" }
}
</script>

<style scoped>
.tg {
  border-collapse: collapse;
  border-spacing: 0;
  margin: 2em 0 2em 2em
}

.tg td {
  border-color: black;
  border-style: solid;
  border-width: 1px;
  font-size: 1.2em;
  overflow: hidden;
  padding: 1em 5em 1em 5em;
  word-break: normal;
}

.tg th {
  border-color: black;
  border-style: solid;
  border-width: 1px;
  font-size: 1.6em;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
}

.tg .tg-9ase {
  background-color: #333333;
  border-color: inherit;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  text-decoration: underline;
  vertical-align: top
}

.tg .tg-pgpg {
  background-color: #d9ead3;
  border-color: inherit;
  font-weight: bold;
  text-align: center;
  vertical-align: top
}

.tg .tg-9etm {
  background-color: #f3f3f3;
  border-color: inherit;
  text-align: center;
  vertical-align: top
}

.tg .tg-g1fv {
  background-color: #333333;
  border-color: inherit;
  color: #ffffff;
  text-align: left;
  vertical-align: top
}

.tg .tg-0pky {
  border-color: inherit;
  text-align: left;
  vertical-align: top
}

@media screen and (max-width: 767px) {
  .tg {
    width: auto !important;
  }

  .tg col {
    width: auto !important;
  }

  .tg-wrap {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
</style>