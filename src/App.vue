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
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;400&display=swap');

body {
  margin: 0;
  background-color: #110726;
  font-family: ‘Nunito’, sans-serif;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  overflow-x: hidden;
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
  font-weight: 400;
}

.sign__word {
  font-size: 3rem;
  text-align: center;
  line-height: 1;
  color: #37448C;
  animation: neon 1s ease-in-out infinite alternate;
}

.card {
  flex: 2;
  flex-basis: 40%;
  text-align: center;
  margin: 3em;
  padding-bottom: 2em;
  border-radius: 30px;
  transition: transform 100ms;
  cursor: pointer;
  box-shadow: 0px 0px 30px rgba(0,0,0, 0.6);
  background: #1E1540;
}



</style>
