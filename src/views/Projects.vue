<template>
  <div class="projects">
    <div class="sign">
      <span class="sign__word">My projects</span>
    </div>
      <a class="card" href="/#/projects/guessThatAlbum">
        <img :src="image[2]" alt="project screenshot">
        Guess that Album</a>
        <a class="card" href="/#/projects/musicDiscovery">
            <img :src="image[0]" alt="project screenshot">
            Music Discovery</a>
        <a class="card" href="/#/projects/capturingCorona">
            <img :src="image[1]" alt="project screenshot">
            capturing Corona</a>
        <a class="card" href="/#/projects/frontendApplications">
            <img :src="image[3]" alt="project screenshot">
            frontend Applications</a>
        <a class="card" href="/#/projects/dinnerSelector">
            <img :src="image[4]" alt="project screenshot">
            dinnerSelector</a>

  </div>
</template>
<script>
  import { createCardAnimations } from '../helpers/animation.js'

  export default {
    name: 'Projects',
      mounted() {
          createCardAnimations()
      },
      computed: {
        image () {
            return [require(`../assets/images/musicDiscovery.png`),
                require(`../assets/images/capturingCorona.png`),
                require(`../assets/images/guessThatAlbum.png`),
                require(`../assets/images/frontendApplications.png`),
                require(`../assets/images/dinnerSelector.png`)]
        }
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

    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 50em;
    }
    img {
        width: 100%;
        height: 25em;
        pointer-events: none;
        border-top-right-radius: 30px;
        border-top-left-radius: 30px;
        margin-bottom: 1em;
    }

    a,
    a:visited {
        color: #fff;
    }

    @media (max-width: 400px) {
        .card {
            flex-basis: 100%;
            margin: 1em 0;
            border-radius: 0;
        }
        .card img {
            border-radius: 0;
            height: 15em;
        }
    }
    </style>