<template>
  <div
    id="app"
    :class="{clouds: setBackground == 'Clouds', rain: setBackground == 'Rain' || setBackground == 'Drizzle', mist: setBackground == 'Mist' || setBackground == 'Fog' , clear: setBackground == 'Clear', snow: setBackground == 'Snow', storm: setBackground == 'Thunderstorm'}"
  >
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
  },
  computed: {
    setBackground() {
      return this.$store.getters.background;
    }
  },
  created() {
    document.title = "Weather App";
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
  background-repeat: no-repeat;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  transition: 0.3s;
  overflow: hidden;
  &.rain {
    background: url("~@/assets/images/rain.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  &.clouds {
    background: url("~@/assets/images/clouds.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  &.mist {
    background: url("~@/assets/images/mist.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  &.clear {
    background: url("~@/assets/images/clear.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  &.snow {
    background: url("~@/assets/images/snow.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  &.storm {
    background: url("~@/assets/images/storm.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
}
</style>
