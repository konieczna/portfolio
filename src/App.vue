<template>
  <div id="app"  :class="{'overFlowHid':showNav}">
    <div id="nav">
      <b-container>
        <b-row>
          <b-col class="header" cols="12">
            <router-link class="logo" to="/">
              Magda Konieczna
            </router-link>
            <div class="top-bar">
              <div id="navigation-icon" v-if="mobileView"
                   @click="showNav = !showNav">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
              </div>
              <Navigation v-if="!mobileView" />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="content" :class="{'open':showNav}">
      <div @click="showNav = !showNav">
        <NavigationMobile />
      </div>
      <transition name="router-anim" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutDown">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import NavigationMobile from './components/NavigationMobile.vue';

export default {
  data: () => {
    return {
      mobileView: true,
      showNav: false
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 900;
    },
  },
  components: {
    Navigation,
    NavigationMobile
  },
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  }
}
</script>

<style lang="scss">
$bodyColor: #EEE2D3;
$darkColor: #000;
$bold: 600;
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600&display=swap');
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Raleway', sans-serif;
  background-color: $bodyColor;
  color: $darkColor;
  min-height: 100vh;
  #navigation-icon {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    height: 100%;
    width: 100%;
    .line {
      background-color: $darkColor;
      width: 28px;
      height: 2px;
      &:nth-of-type(2) {
        margin: 5px 0 5px 0;
        width: 23px;
        position: relative;
        transition: .3s;
      }
    }
    &:hover {
      cursor: pointer;
      .line {
        &:nth-of-type(1), &:nth-of-type(3) {
          transition: .3s;
        }
        &:nth-of-type(2) {
          left: 0;
          transition: .3s;
        }
      }
    }
  }
}

.overFlowHid {
  #navigation-icon {
    /*display: block;*/
    .line {
      background-color: $darkColor;
      width: 28px;
      height: 2px;
      &:nth-of-type(1) {
        transform: rotate(45deg);
        position: relative;
        transform-origin: left;
        top: -1px;
        transition: .3s;
      }
      &:nth-of-type(2) {
        opacity: 0;
        transition: .3s;
      }
      &:nth-of-type(3) {
        transform: rotate(-45deg);
        transform-origin: left;
        position: relative;
        top: 1px;
        transition: .3s;
      }
    }
  }
}
#nav {
  height: 71px;
  .header {
    display: flex;
    justify-content: space-between;
    .logo {
      font-weight: $bold;
      font-size: 15px;
      line-height: 23px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: $darkColor;
      &:hover {
        text-decoration: none;
      }
    }
    .my-menu {
      a {
        font-weight: normal;
        font-size: 15px;
        line-height: 23px;
        letter-spacing: 0.06em;
        color: $darkColor;
        position: relative;
        transition: .3s;
        margin: 0 50px;
        &:before, &:after {
          position: absolute;
          content: '';
          background-color: $darkColor;
          height: 2px;
          bottom: -4px;
          width: 0;
          transition: .3s;
        }
        &:before {
          left: 50%;
        }
        &:after {
          right: 50%;
        }
        &.router-link-exact-active {
          &:before, &:after {
            width: 50%;
            transition: .3s;
          }
        }
        &:hover {
          transition: .3s;
          text-decoration: none;
          &:before, &:after {
            width: 50%;
            transition: .3s;
          }
        }
      }
    }
    /*.mobile-menu {*/
    /*  display: none;*/
    /*}*/
  }
}
.main-content {
  animation: transitionIn 0.75s;
  padding-bottom: 100px;
  position: absolute;
  width: 100%;
  background: $bodyColor;
  padding-top: 80px;
}

@keyframes transitionIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.content {
  transition: 1s transform cubic-bezier(0,.12,.14,1);
}
/*.open {*/
/*  transform: translateX(-100%);-->
/*}*/
.overFlowHid {
  overflow-y: hidden;
}

@media (max-width: 500px) {
  .main-content {
    padding-top: 35px;
    padding-bottom: 75px;
  }
}
</style>
