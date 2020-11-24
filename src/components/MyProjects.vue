<template>
<div class="my-work">
    <router-link class="single" to="/realization">
        <img src="@/assets/realization-1.png" alt="Mockup" />
        <div class="overlay"></div>
        <div class="desc">Wine Company</div>
    </router-link>
    <router-link to="/" class="single">
        <img src="@/assets/realization-2.png" alt="Mockup" />
        <div class="overlay"></div>
        <div class="desc">JMB</div>
    </router-link>
    <router-link to="/" class="single">
        <img src="@/assets/realization-3.png" alt="Mockup" />
        <div class="overlay"></div>
        <div class="desc">Akademia Badmintona Lublin</div>
    </router-link>
</div>
</template>

<script>
export default {
    name: "MyProjects"
}
</script>

<style lang="scss" scoped>
$white: #fff;
.my-work {
    display: flex;
    padding: 50px 0;
    flex-wrap: wrap;
    .single {
        width: calc(100% / 3);
        height: 300px;
        position: relative;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: .3s;
        }
        .overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.7);
            opacity: 0;
            transition: .3s;
        }
        .desc {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size: 28px;
            line-height: 48px;
            letter-spacing: 0.06em;
            color: $white;
            text-align: center;
            padding: 15px;
            width: 100%;
            height: 100%;
            top: -10px;
            left: 0;
            transition: .3s;
            opacity: 0;
        }
        &:hover {
            cursor: pointer;
            img {
                /*transform: scale(1.1);*/
                transition: .3s;
            }
            .overlay {
                opacity: 1;
                transition: .3s;
            }
            .desc {
                top: 0;
                opacity: 1;
                transition: .3s;
            }
        }
    }
}
@media (max-width: 1044px) {
    .my-work {
        .single {
            width: calc(100% / 2);
        }
    }
}
@media (max-width: 550px) {
    .my-work {
        .single {
            width: 100%;
        }
    }
}
</style>
