<template>
  <div class="skills">
    <div class="sign">
      <span class="sign__word">My skills</span>
    </div>
    <section class="card">
      <p>Coding languages</p>
      <ul>
        <li>
          <label for="html">HTML</label>
          <progress id="html" value="80" max="100"></progress>
        </li>
        <li>
          <label for="css">CSS</label>
          <progress id="css" value="75" max="100"></progress>
        </li>
        <li>
          <label for="js">JavaScript</label>
          <progress id="js" value="60" max="100"></progress>
        </li>
      </ul>
    </section>
    <section class="card">
      <p>Frameworks and libraries</p>
      <ul>
        <li>
          <label for="vue">Vue.js</label>
          <progress id="vue" value="50" max="100"></progress>
        </li>
        <li>
          <label for="d3">D3.js</label>
          <progress id="d3" value="30" max="100"></progress>
        </li>
        <li>
          <label for="express">Express.js</label>
          <progress id="express" value="60" max="100"></progress>
        </li>
        <li>
          <label for="ejs">EJS</label>
          <progress id="ejs" value="60" max="100"></progress>
        </li>
      </ul>
    </section>
    <section class="card">
      <p>Programs</p>
      <ul>
        <li>
          <label for="ps">Photoshop</label>
          <progress id="ps" value="75" max="100"></progress>
        </li>
        <li>
          <label for="xd">Adobe XD</label>
          <progress id="xd" value="75" max="100"></progress>
        </li>
        <li>
          <label for="php">PHPStorm</label>
          <progress id="php" value="80" max="100"></progress>
        </li>
      </ul>
    </section>
    <section class="card">
      <p>General Skills/knowledge</p>
      <ul>
        <li>
          <label for="scrum">SCRUM</label>
          <progress id="scrum" value="50" max="100"></progress>
        </li>
        <li>
          <label for="gh">GitHub</label>
          <progress id="gh" value="60" max="100"></progress>
        </li>
        <li>
          <label for="nl">Dutch</label>
          <progress id="nl" value="85" max="100"></progress>
        </li>
        <li>
          <label for="eng">English</label>
          <progress id="eng" value="95" max="100"></progress>
        </li>
        <li>
          <label for="coffee"> Making a good cup of coffee</label>
          <progress id="coffee" value="100" max="100"></progress>
        </li>
      </ul>
    </section>

  </div>
</template>
<script>

  import { createCardAnimations } from '../helpers/animation.js'

  export default {
    name: 'Skills',
    mounted() {
      createCardAnimations()
    }
  }
</script>
<style scoped>
  .skills {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  .skills .sign {
    flex: 1;
    flex-basis: 100%
  }

  .skills section {
    flex: 3;
    flex-basis: 30%;
    text-align: center;
    margin: 3em;
    padding: 2em 0;
    border-radius: 30px;
    transition: transform 100ms;
    cursor: pointer;
    box-shadow: 0px 0px 30px rgba(0,0,0, 0.6);
    background: #1E1540;
  }

  .skills p {
    pointer-events: none;
  }

  .skills section > p {
    font-size: 2em;
  }
  .skills ul {
    list-style: none;
    margin-top: 0;
    padding: 0;
    pointer-events: none;
  }

  .skills ul li {
    display: flex;
    flex-direction: column;
    align-items: center;
    pointer-events: none;
    margin-bottom: 1em;
  }

  .skills ul li label {
    padding-bottom: 0.5em;
  }
  progress {
    -webkit-appearance: none;
    appearance: none;
    pointer-events: none;
  }

  progress[value]::-webkit-progress-bar {
    background-color: #192f4d;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  }

  progress[value]::-webkit-progress-value {
    background-color: #1F788C;
    border-radius: 10px;
  }
</style>