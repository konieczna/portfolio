<template>
  <div class="hello">
    <b-container>
      <b-row>
        <b-col md="8" offset-md="2">
          <h1>Portfolio of some front-end developer</h1>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$light: 300;
.main-content {
  h1 {
    font-weight: $light;
    /*font-size: 52px;*/
    line-height: 61px;
    font-size: 2.5rem;
    text-align: center;
    letter-spacing: 0.06em;
  }
  h2 {
    font-size: 32px;
    letter-spacing: 0;
    font-weight: $light;
    line-height: 52px;
    text-align: center;
    a {
      font-weight: 300;
    }
  }
}
@media (max-width: 1040px) {
  .main-content {
    h1 {
      font-size: 24px;
    }
    h2 {
      font-size: 20px;
      line-height: 32px;
    }
  }
}
</style>
