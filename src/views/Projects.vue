<template>
  <v-container class="mt-12 pt-12">
    <div class="text-h3">Our projects</div>
    <div class="mb-12 mt-6">
      <p>
        Ever since our start at an all-night hackathon ten years ago, we've loved making stuff--stuff that's open, and
        stuff that helps further the cause of universal Open Science. Since then, we've made a lot of stuff--some pretty
        successful, some less so. But we've learned from it all, and we're glad to still be here, doing our bit as best
        we can.
      </p>
      <p>
        This page lists our major projects. Most of them are still ongoing, although a few were one-off grant-funded
        projects that have now concluded. Naturally, the source code and datasets behind all these tools are fully open.
        The grant applications and reports for these projects are published on <a
          href="https://www.ogrants.org/">Open Grants.</a>
        If you're interested in learning more about any of these projects, click through to their respective websites,
        which generally have a lot more info.
      </p>
    </div>
    <div class="mt-12">
      <v-row>

        <v-col
            cols="12"
            v-for="project in projects"
            :key="'project-'+project.id"
            :id="project.id"
            class=""
        >
          <v-card class="px-3 py-7">


            <div class="logo">
              <img :src="getImgUrl('logos/' + project.id + '.png')" :style="{height: '45px'}">
            </div>
            <div class="project-description text-h6 font-weight-medium">
              <!--          <a :href="project.url" style="">{{ project.name }}</a> is-->
              {{ project.description }}.
            </div>

            <v-divider class="my-2"/>

            <div>
              <strong>Goal:</strong> {{ project.goal }}.
            </div>
            <div>
              <strong>Funded by:</strong> {{ project.funders.map(x => x.name).join(', ') }}
            </div>
            <div>
              <strong>Active:</strong> {{ project.datesActive[0] }}&ndash;{{ project.datesActive[1] || 'present' }}
            </div>
            <div>
              <div>
                <strong>
                  Read more:
                </strong>
              </div>
              <ul>
                <li v-for="coverageItem in project.press" style="">
                  <div>
                    "{{ coverageItem.title }}" in
                    <a :href="coverageItem.link" class="">
                      {{ coverageItem.source }}
                    </a>
                  </div>
                  <div>
                  </div>
                </li>
              </ul>
              <div class="actions d-flex mt-6">
                <v-btn
                    :href="project.url" target="_blank"
                    text
                    color="primary"
                >
                  <v-icon left>mdi-desktop-mac</v-icon>
                  {{ (project.id === "unsub") ? "Unsub website" : "Website" }}
                </v-btn>
                <v-btn
                    :href="project.githubUrl" target="_blank"
                    text
                >
                  <v-icon left>mdi-github</v-icon>
                  source code
                </v-btn>

              </div>


            </div>
          </v-card>
        </v-col>

      </v-row>

    </div>

  </v-container>
</template>

<script>
import {projectsList} from "../data/projectDescriptions";
import {valuesList} from "../data/valueDescriptions";

export default {
  name: "Projects",
  metaInfo() {
    return {
      title: "Projects"
    }
  },
  data: () => ({
    projects: projectsList,
    values: valuesList,
  }),
  methods: {
    getImgUrl(pic) {
      if (pic) {
        let url = "../assets/" + pic
        return require('../assets/' + pic)
      }
    },
    lowerCase(str) {
      return str.charAt(0).toLowerCase() + str.slice(1);
    }

  },

}
</script>

<style scoped lang="scss">
.project-description {
  .descr-body {
    display: inline;
  }

  .descr-body::first-letter {
    color: red;
    text-transform: lowercase;
  }
}


</style>