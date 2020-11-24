<template>
  <div class="about">
    <div class="main-content">
      <b-container>
        <b-row>
          <b-col md="8" offset-md="2">
            <h1>About</h1>
          </b-col>
          <b-col class="m-50" md="8" offset-md="2">
            <img src="@/assets/Magda.jpg" alt="Woman working on laptop" />
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="8" offset-md="2">
            <p class="description">
              I am Magda, and I am a front-end developer living in Bialystok. I create websites based on HTML, CSS and its Sass preprocessor - SCSS, Javascript and its libraries such as jQuery and Vue.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<style scoped lang="scss">
.m-50 {
  margin-top: 50px;
  margin-bottom: 50px;
}
p {
  font-weight: 300;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  letter-spacing: 0.06em;
}
a {
  font-weight: 600;
  text-align: center;
  /*text-decoration: underline;*/
  color: #000;
  position: relative;
  transition: .3s;
  &:after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    bottom: -3px;
    left: 0;
    background-color: #000;
    transition: .3s;
  }
  &:hover {
    text-decoration: none;
    transition: .3s;
    opacity: 0.8;
  }
}
img {
  width: 100%;
  height: 380px;
  object-fit: cover;
}
@media (max-width: 500px) {
  img {
    height: 230px;
  }
  .m-50 {
    margin: 30px 0;
  }
}
</style>

