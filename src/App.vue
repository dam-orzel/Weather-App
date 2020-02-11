<template>
  <div id="app">
    <weather-component />
    <lastSearch-component />
  </div>
</template>

<script>
import Weather from "@/components/Weather.vue";
import LastSearch from "@/components/LastSearch.vue";
export default {
  components: {
    "weather-component": Weather,
    "lastSearch-component": LastSearch
  }
};
</script>

<style lang="scss">
#app {
  height: 100vh;
  width: 100vw;
  background: $vulcan;
}
</style>
