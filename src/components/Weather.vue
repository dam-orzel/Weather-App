<template>
  <section class="weather-box">
    <div class="wrapper">
      <div class="search-box">
        <input type="text" class="search" placeholder="Type..." />
        <button class="purple big">Check</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      weather_api: "d4309394c1f05e511c79a76c3992237d"
    };
  }
};
</script>

<style lang="scss">
.weather-box {
  .search-box {
    display: flex;
    align-items: center;
    flex-direction: column;
    button {
      margin-top: 20px;
    }
  }
}
</style>