<template>
  <div class="projects">
    <div class="sign">
      <span class="sign__word">My projects</span>
    </div>
        <a class="card" href="/#/projects/musicDiscovery">Music Discovery</a>
        <a class="card" href="/#/projects/capturingCorona">capturing Corona</a>
        <a class="card" href="/#/projects/frontendApplications">frontend Applications</a>
        <a class="card" href="/#/projects/dinnerSelector">dinnerSelector</a>

  </div>
</template>
<script>
  import { createCardAnimations } from '../helpers/animation.js'

  export default {
    name: 'Projects',
      mounted() {
          createCardAnimations()
      }
  }
</script>

<style scoped>
    .projects {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
    .projects .sign {
        flex: 1;
        flex-basis: 100%
    }

    a,
    a:visited {
        color: #fff;
    }
    </style>