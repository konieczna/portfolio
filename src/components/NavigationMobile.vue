<template>
    <div id="navigation-mobile" class="mobile-menu">
        <router-link to="/">Work</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
    </div>
</template>

<script>
    export default {
        name: "NavigationMobile"
    }
</script>

<style lang="scss" scoped>
.content {
    #navigation-mobile {
        left: -100%;
        position: absolute;
        top: 0;
        width: 80%;
        height: 100vh;
        transition: .5s;
        background: white;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        a {
            padding: 15px;
            color: #000;
            font-size: 20px;
            font-weight: 600;
            width: 100%;
            text-align: center;
        }
    }
}
.content.open {
    #navigation-mobile {
        transition: .5s;
        left: 0;
    }
}
</style>
