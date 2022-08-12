<template>
  <v-container class="page">
    <h3 class="text-h3">Users</h3>
    <p>
      Thousands of people use OpenAlex! Here are some of the most notable:
    </p>
    <ul>
      <li><a href="https://oa.works" target="_blank">OA.Works</a> - Building tools so that open access is easy and equitable</li>
      <li><a href="https://opensyllabus.org/" target="_blank">Open Syllabus</a> - Opening the curricular black box across 7M+ syllabi
      </li>
      <li><a href="https://scite.ai" target="_blank">scite</a> - Building the next generation of citations
      </li>
      <li><a href="https://eppi.ioe.ac.uk/cms/Default.aspx?tabid=2914" target="_blank">The EPPI Centre</a>
        - Utilising ML technologies to aid the review process and manage references
      </li>
    </ul>

    <h4 class="text-h4" id="start-up-enterprise">List your organization</h4>
    <p>Have an app or initiative that uses OpenAlex? Send an email to <a href="mailto:team@openalex.org">team@openalex.org</a>
      along with the project URL and a short description and we'll add it to this page.</p>

    <h4 class="text-h4" id="start-up-enterprise">Join the community</h4>
    <p>Have a question or suggestion? Try the <a href="https://groups.google.com/g/openalex-users">OpenAlex users
      group</a>!
      Then subscribe to the <a
          href="https://ourresearch.us4.list-manage.com/subscribe?u=26fcc4e14b24319755845d9e0&id=3e44ebb4c3">mailing
        list</a>
      to stay informed.
    </p>

  </v-container>
</template>

<script>
export default {
  name: "Users",
  metaInfo: {title: "Users"}
}
</script>

<style scoped lang="scss">
.text-h4 {
  padding-top: 50px;
}

</style>