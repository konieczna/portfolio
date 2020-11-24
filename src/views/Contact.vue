<template>
    <div class="contact">
        <div class="main-content">
            <b-container>
                <b-row>
                    <b-col md="8" offset-md="2">
                        <h1>Let’s get in touch:</h1>
                        <h2><a class="mail" href="mailto:madziaakonieczna@gmail.com">madziaakonieczna@gmail.com</a></h2>
                        <h2><a href="tel:048695948189">695948189</a></h2>
                        <form name="contact" method="POST" data-netlify="true">
                            <p>
                                <label>Your Name: <input type="text" name="name" /></label>
                            </p>
                            <p>
                                <label>Your Email: <input type="email" name="email" /></label>
                            </p>
                            <p>
                                <label>Your Role: <select name="role[]" multiple>
                                    <option value="leader">Leader</option>
                                    <option value="follower">Follower</option>
                                </select></label>
                            </p>
                            <p>
                                <label>Message: <textarea name="message"></textarea></label>
                            </p>
                            <div data-netlify-recaptcha="true"></div>
                            <p>
                                <button type="submit">Send</button>
                            </p>
                        </form>
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

