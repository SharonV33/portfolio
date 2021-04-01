<template>
  <div class="skills">
    <div class="sign">
      <span class="sign__word">My skills</span>
    </div>
    <p>Coding languages</p>
    <ul>
      <li>
        HTML
      </li>
      <li>
        CSS
      </li>
      <li>
        JavaScript
      </li>
    </ul>
    <p>Frameworks and libraries</p>
    <ul>
      <li>
        Vue.Js
      </li>
      <li>
          D3.js
      </li>
      <li>
        Express.js
      </li>
      <li>
        EJS
      </li>
    </ul>
    <p>Programs</p>
    <ul>
      <li>
        Adobe Photoshop
      </li>
      <li>
        Adobe XD
      </li>
      <li>
        PHPStorm
      </li>
    </ul>
    <p>General Skills/knowledge</p>
    <ul>
      <li>
        SCRUM
      </li>
      <li>
        Github
      </li>
      <li>
        Dutch
      </li>
      <li>
        English
      </li>
      <li>
        Making a good cup of coffee
      </li>
    </ul>

  </div>
</template>
<script>
  export default {
    name: 'Skills'
  }
</script>
<style scoped>
  .skills {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .skills ul {
    list-style: none;
    margin-top: 0;
    padding: 0;
  }

  .skills ul li {
    text-align: center;
  }
</style>