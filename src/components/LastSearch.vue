<template>
  <section class="last-search" v-if="locationList.length > 0">
    <p>Latest search</p>
    <ul>
      <li v-for="item in locationList" :key="item">{{item}}</li>
    </ul>
  </section>
</template>

<script>
export default {
  computed: {
    locationList() {
      return this.$store.getters.location;
    }
  }
};
</script>

<style lang="scss">
.last-search {
  text-align: center;
  height: 180px;
  background: rgba(15, 21, 33, 0.7);
  padding: 20px 50px;
  p {
    color: $white;
    font-weight: 600;
    margin-bottom: 20px;
  }
  ul {
    list-style: none;
    li {
      color: $white;
      font-size: 18px;
      text-transform: capitalize;
      transition: 0.5s;
      cursor: pointer;
      &:hover:after {
        content: "";
        width: 50px;
        height: 2px;
        background: red;
        border-bottom: 1px solid white;
      }
    }
  }
  @media (max-width: 980px) and (orientation: landscape) {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    padding: 20px 20px;
  }
}
</style>