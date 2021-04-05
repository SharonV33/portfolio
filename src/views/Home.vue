<template>
  <div class="home">
    <div class="sign">
      <span class="sign__word">Sharon Veldman</span>
      <span class="sign__word">front-end</span>
      <span class="sign__word">developer</span>
    </div>
    <img :src="image" alt="generic developer coding">
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  computed: {
    image () {
      return require(`../assets/images/home.jpeg`)
    }
  }
}
</script>
<style scoped>

  .home {
    display: flex;
    justify-content: center;
    overflow-y: hidden;
    overflow-x: hidden;
  }

  .sign {
    position:absolute;
    z-index: 2;
    height: 100%;
    overflow-x: hidden;
  }

  .sign span {
    color: white;
  }

  img {
    position:relative;
    z-index: 1;
    width: 100vw;
    height: 80vh;
    opacity: 50%;
    overflow-x: hidden;
  }

  @media (max-width: 400px) {
    img {
      overflow-x: hidden;
      width: 100em;
      height: 90vh;
    }
  }

</style>