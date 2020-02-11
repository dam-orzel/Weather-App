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
  height: calc(100vh - 40px);
  width: 100vw;
  background: url("~@/assets/images/main_background.jpg");
  background-size: cover;
  background-position: center;
  padding: 20px 0;
}
</style>
