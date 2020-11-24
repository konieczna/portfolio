<template>
    <div class="realization">
        <div class="main-content">
            <b-container>
                <b-row>
                    <b-col cols="12" md="8" offset-md="2">
                        <h1>Wine Company</h1>
                    </b-col>
                    <b-col class="m-50" cols="12">
                        <img src="@/assets/realization-1.png" alt="Mockup" />
                    </b-col>
                </b-row>
                <b-row>
                    <b-col md="8" offset-md="2">
                        <p class="description">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                        <p>
                            <a href="/">Visit Page</a>
                        </p>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<style scoped lang="scss">
.m-50 {
    margin: 50px 0;
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
</style>
