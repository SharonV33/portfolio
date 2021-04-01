<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/skills">Skills</router-link> |
      <router-link to="/projects">Projects</router-link>

    </div>
    <router-view/>
  </div>
</template>

<style>
body {
  margin: 0;
  background-color: #000;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/*-- Sign Styles --*/

.sign {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sign__word {
  font-size: 5.6rem;
  text-align: center;
  line-height: 1;
  color: #c6e2ff;
  animation: neon .08s ease-in-out infinite alternate;
}


/*-- Animation Keyframes --*/

/*animation*/

@keyframes neon {
  from {
    text-shadow:
            0 0 6px rgba(202,228,225,0.92),
            0 0 30px rgba(202,228,225,0.34),
            0 0 12px rgba(30,132,242,0.52),
            0 0 21px rgba(30,132,242,0.92),
            0 0 34px rgba(30,132,242,0.78),
            0 0 54px rgba(30,132,242,0.92);
  }
  to {
    text-shadow:
            0 0 6px rgba(202,228,225,0.98),
            0 0 30px rgba(202,228,225,0.42),
            0 0 12px rgba(30,132,242,0.58),
            0 0 22px rgba(30,132,242,0.84),
            0 0 38px rgba(30,132,242,0.88),
            0 0 60px rgba(30,132,242,1);
  }
}
</style>
