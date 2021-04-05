<template>
  <div class="about">
    <div class="sign">
      <span class="sign__word">About me</span>
    </div>
    <p class="card">
      My name is Sharon Veldman, I'm 22 years old. I currently live in Den Bosch with my dad and our two cats. In my free time I enjoy listening to metal music and watching scary movies.
      Normally I would frequently visit festivals but Corona has put a big halt to this. I'm also a student at the Hogeschool van Amsterdam. I study Communication and Multimedia design.
      I'm currently working on finishing a minor in web development and design.
    </p>
    <p class="card">
      During my internship I would like to improve my design skills and my knowledge of Javascript. I find it difficult to design new and interesting layouts and colours and fonts are still a mystery to me.
      I have been improving this skill in the last year but I still have a way to go. This is also the case for my Javascript skills. While already being much higher than a year ago,
      I feel like I could still improve a great deal.
    </p>
  </div>
</template>
<script>
  export default {
    name: 'About'
  }
</script>
<style scoped>
  .card {
    flex-basis: 100%;
    padding: 2em 4em;
    max-width: 70em;
  }

  @media (max-width: 400px) {
    .card {
      width: 90vw;
    }
  }
</style>