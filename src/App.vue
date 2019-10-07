<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>

html,body {
    height:100%;
}

html * {
  font-family: 'Roboto', sans-serif;
}

#app {
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  display:flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100%;
}

</style>
