<template>
  <div class="home">
    <div class="main-content">
      <HelloWorld />
      <MyProjects />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MyProjects from "@/components/MyProjects.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    MyProjects
  }
};
</script>

<style lang="scss">

</style>
