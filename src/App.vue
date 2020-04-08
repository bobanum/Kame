<template>
  <div id="app">
    <header>
      <svg><use href="./assets/logo_kame.svg#logo"/></svg>
      <h1>KAME</h1>
      </header>
    <nav>
      <!-- <ul>
        <li><a href="#">Home</a></li>
      </ul> -->
    </nav>
    <div class="body">
      <ide/>
    </div>
    <footer>&copy; Martin Boudreau</footer>
  </div>
</template>

<script>
import Ide from "./components/Ide";

export default {
  name: 'App',
  components: {
    Ide,
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Kodchasan:wght@400;700&display=swap');


:root {
  --hue: 150;
  --sat: 50%;
}
html {
  height: 100%;
  font-family: 'Kodchasan', sans-serif;
}
h1,h2,h3,h4,h5,h6 {
  margin: 0;
}
body {
  height: 100%;
  margin: 0;
  background-color: hsl(var(--hue), var(--sat), 90%);
  color: hsl(var(--hue), var(--sat), 0%);
}
nav, .menu, .nav {
  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
}
#app {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  & > header, & > footer {
    background-color: hsl(var(--hue), var(--sat), 20%);
    color: hsl(var(--hue), var(--sat), 100%);
  }
  & > header {
    order: -100;
    display: flex;
    overflow: hidden;
    align-items: center;
    svg {
      width: 192px;
      height: 192px;
      margin-top: -32px;
      margin-bottom: -88px;
      margin-left: 1em;
      margin-right: 1em;
    }
  }
  & > nav {
    order: -10;
    background-color: hsl(var(--hue), var(--sat), 5%);
    color: hsl(var(--hue), var(--sat), 100%);
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
  }
  & > footer {
    order: 100;
  }
  & > .body {
    display: grid;
  }

}
</style>
