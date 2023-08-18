<template>
  <v-container class="page">
    <h2 class="text-h2">Webinar and Tutorial Videos for Community Engagement</h2>
    <p>
      Less than 2 years since its initial launch, OpenAlex has already become a favourite in
      the toolkit of bibliometric experts because its open nature and comprehensive coverage make high-quality research
      analytics more accessible than ever. Users with data management skills are already well-supported by our free API
      and data snapshot access methods. To keep the momentum building and expand accessibility of OpenAlex data, we are
      launching a new Graphic User Interface and resources to support researchers and research administrators across the
      globe in applying OpenAlex data to their research analytics needs. This fall, join us for a monthly webinar series
      that will introduce OpenAlex and how to use it to answer some of the most common research intelligence and
      bibliometric use cases.
    </p>
    <ul>

      <li>
        <strong>When:</strong> Monthly on the 2nd Thursday of each month at 12pm Eastern
      </li>
      <li>
        <strong>Format:</strong> 45 minute virtual webinar (20-30 minute recorded presentation
        followed by open
        discussion).
      </li>
      <li>
        <strong>Registration:</strong> <a href="https://forms.monday.com/forms/917b61cf81e926a2127dbbf90d2b069e?r=use1"
          target="_blank" rel="noopener noreferrer">Fill out this form to sign up!</a> If you cannot make the time but are
        interested in the webinar, still register and a recording will be sent to you afterwards.
      </li>
    </ul>
    <h3 class="text-h3">Upcoming Webinars</h3>
    <v-row>
      <v-col cols="12" v-for="item in items" :key="item.title">
        <v-card>
          <v-card-item>
            <v-card-title style="word-break: normal;">{{ item.title }}</v-card-title>
            <v-card-subtitle class="text-subtitle-2">{{ item.date }}</v-card-subtitle>
          </v-card-item>
          <v-card-text>
            <ul>
              <li>
                <strong>Date:</strong> {{ item.date }}
              </li>
              <li>
                <strong>Time:</strong> {{ item.time }}
              </li>
              <li>
                <strong>Location:</strong> {{ item.location }}
              </li>
              <a href="https://forms.monday.com/forms/917b61cf81e926a2127dbbf90d2b069e?r=use1" target="_blank"
                rel="noopener noreferrer"><strong>Registration Link</strong></a>
              <li>
                <strong>Presenters:</strong> {{ item.presenters }}
              </li>
              <li>
                <strong>Summary:</strong> {{ item.summary }}
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>


  </v-container>
</template>

<script>
export default {
  name: "Webinars",
  metaInfo: { title: "Webinars" },
  data() {
    return {
      items: [
        {
          title: "Introducing OpenAlex: An open and comprehensive catalog of scholarly works, authors, institutions, and more",
          date: "September 14, 2023",
          time: "12pm EDT",
          location: "Virtual (link sent after registration)",
          presenters: "Kyle Demes & Jason Portenoy",
          summary: "Large databases that index research outputs and associated metadata (scientific knowledge graphs or SKGs) have become critical infrastructure for any research organization. They help researchers find the right papers among millions; they enable scientometrics research; and they provide intelligence to inform decisions at almost every level of research management. However, the leading established SKGs require expensive subscriptions to access and have systematic biases that constrain who has access to these tools and what insights they can provide. That’s why, within less than 2 years of launching, OpenAlex is already seen by bibliometric experts as a foundational tool for high-quality research analytics. In this webinar, we will introduce OpenAlex, the first completely open and comprehensive SKG. Specifically, we will: cover how the open model works for SKGs; highlight major features of OpenAlex specifically in comparison to closed SKGs; review methods for accessing the data; and explore foundations of OpenAlex’s data structure and the use cases it enables. Participants will leave with the foundational knowledge to get started using OpenAlex and resources on where to learn more.",
        },
        {
          title: "Introducing Using OpenAlex to understand your University’s research",
          date: "October 10, 2023",
          time: "12pm EDT",
          location: "Virtual (link sent after registration)",
          presenters: "Kyle Demes & Jason Portenoy",
          summary: "Because peer-review is independent of Universities and housed by thousands of publishers around the world, most institutions do not have a comprehensive catalog of the works published by their researchers. XXX. In this webinar, we will review some of the most common use cases applying bibliometric databases to institutional research intelligence. For instance: XXX.",
        },
        {
          title: "Using OpenAlex for International Intelligence",
          date: "November 9, 2023",
          time: "12pm EST",
          location: "Virtual (link sent after registration)",
          presenters: "Kyle Demes & Jason Portenoy",
          summary: "Coming soon!",
        },
        {
          title: "Better together: How VOSViewer and OpenAlex work together to facilitate free, easy, and high-quality research analytics",
          date: "December 14, 2023",
          time: "12pm EST",
          location: "Virtual (link sent after registration)",
          presenters: "Kyle Demes & Jason Portenoy",
          summary: "Coming soon!",
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss"></style>