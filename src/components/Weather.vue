<template>
  <section class="weather-wrapper">
    <div class="wrapper">
      <div class="search-box">
        <input
          type="text"
          class="search"
          placeholder="Type..."
          v-model="location"
          @keyup.enter="setWeather"
          :class="{error: errorInput}"
        />

        <button class="dblue big" @click="setWeather">Check</button>
      </div>
      <transition name="fade">
        <div class="info-box" v-if="typeof weather.main != 'undefined'">
          <div class="location-box">
            <p class="location">{{weather.name}}, {{weather.sys.country}}</p>
            <p class="date">{{dateFormatter()}}</p>
          </div>
          <div class="weather-box">
            <p class="temperature">{{Math.round(weather.main.temp)}}&#176;C</p>
            <p class="weatherStatus">{{weather.weather[0].main}}</p>
            <p class="weatherDescription">{{weather.weather[0].description}}</p>
          </div>
        </div>
      </transition>
      <div class="last-searched">
        <ul>
          <li v-for="item in locationList" :key="item">{{item}}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      weather_api: "d4309394c1f05e511c79a76c3992237d",
      base_api: "https://api.openweathermap.org/data/2.5/",
      location: "",
      weather: {},
      lastUsed: this.$store.state.location,
      errorInput: false
    };
  },
  methods: {
    setWeather() {
      fetch(
        `${this.base_api}weather?q=${this.location}&units=metric&APPID=${this.weather_api}`
      )
        .then(res => {
          return res.json();
        })
        .then(this.locWeather);
    },
    locWeather(result) {
      this.weather = result;
      if (this.weather.main == undefined) {
        this.errorInput = true;
      } else {
        this.$store.commit("addLocation", this.location);
        this.errorInput = false;
      }
      this.location = "";
    },
    dateFormatter() {
      const dateBase = new Date();
      const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ];

      const day = days[dateBase.getDay()];
      const date = dateBase.getDate();
      const month = dateBase.getMonth() + 1;
      const year = dateBase.getFullYear();

      return `${day} ${date} ${month} ${year}`;
    }
  },
  computed: {
    locationList() {
      return this.$store.getters.location;
    }
  }
};
</script>

<style lang="scss">
.weather-wrapper {
  height: 100%;
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .search-box {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    top: 20px;
    width: 80%;
    input {
      &.error {
        border: 2px solid crimson;
      }
    }
  }
  .info-box {
    width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(15, 21, 33, 0.3);
    padding: 30px 0;
    border-radius: 10px;
    p {
      color: $white;
      text-align: center;
    }
    .location {
      font-size: 24px;
      font-weight: 600;
    }
    .date {
      font-weight: 200;
      font-size: 14px;
    }
    .weather-box {
      width: 100%;
      .temperature {
        font-size: 80px;
        margin: 20px 0;
        font-weight: 600;
        position: relative;
        width: 100%;
        &:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 10%;
          right: 10%;
          width: 75%;
          height: 1px;
          background: rgb(255, 255, 255);
          background: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 1) 51%,
            rgba(255, 255, 255, 0) 100%
          );
          display: block;
          margin: 0 auto;
        }
      }
      .weatherStatus {
        font-size: 18px;
        font-weight: 600;
      }
      .weatherDescription {
        font-size: 14px;
        font-weight: 200;
      }
    }
  }
  .last-searched {
    ul {
      list-style: none;
      li {
        color: $white;
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>