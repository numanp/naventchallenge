<template>
    <div>
        <div class="sendMailContainer shadow">
            <template v-if="sendMailOk === false">
                <div class="titleMail"> {{$t("message.mailContainer.title")}} </div>
                <div>
                    <div class="mailBox"> {{$t("message.mailContainer.mail")}} </div>
                    <div :class="mailIsValid ? 'mailInputBox' : 'inputTextError'"> <input id="input" class="inputText"> </div>
                    <div class="invalidText" v-if="mailIsValid === false"> Por favor ingrese un email valido </div>
                </div>
                <div class="sendBox" @click="checkIfMail"> {{$t("message.mailContainer.send").toUpperCase()}} </div>
            </template>
            <template v-if="sendMailOk">
                <div class="okMailContainer">
                <div><img class="imageOk" src="../../public/assets/img/imageOk.png" alt=""> </div>
                    <span> el mail se ha mandado con exito </span>
                </div>
            </template>
        </div>

    </div>

</template>

<script>

export default {

    data(){
        return {
            mailIsValid: true,
            sendMailOk: false,
        }
	},
	created(){

    },

    watch: {
        
    },

    methods: {
        checkIfMail(){
            let regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            let el = document.getElementById("input");
            this.mailIsValid = regex.test(el.value) && el.value !== "";
            if(this.mailIsValid){
                this.sendMailOk = true
                setTimeout(() => { this.$emit("formReady", this.contactForm = false) }, 2500);
            }
        }
    },
    computed: {
    },
}
</script>

<style scoped lang="scss">
@import "./public/assets/scss/_config.scss";

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

.shadow{
    -webkit-box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.32);
    -moz-box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.32);
    box-shadow: 3px 3px 8px 0px rgba(0,0,0,0.32);
}

@media screen and (min-width: 734px) and (max-width:  875px) {

    .sendMailContainer{
        -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 1s; /* Firefox < 16 */
        -ms-animation: fadein 1s; /* Internet Explorer */
        -o-animation: fadein 1s; /* Opera < 12.1 */
        animation: fadein 1s;
        padding: 1em;
        background-color: $white;
        width: 70vw;
        height: 8em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: space-between;
        // color: red;
    }

    .titleMail{
        text-align: left;
        color: $lightBlue;
        font-size: 1.9vw;
    }

    .mailBox{
        text-align: left;
        font-size: 0.9em;
    }

    .mailInputBox{
        text-align: left;
    }

    textarea:focus, input:focus{
        outline: none;
    }

    .inputText{
        background-color: transparent !important;
        width: 100%;
        color: $emailColor;
        font-size: 0.9em;
        font-weight: 600;
        padding: 0.5em;
        border: none;
        border-bottom: 1px solid $locationGrey;  
    }

    .inputTextError{
        background-color: transparent !important;
        width: 100%;
        border: none;
        border-bottom: 2px solid $red;
    }

    .invalidText{
        color: $red;
        font-size: 0.7em;
        text-align: left;
        padding-top: 0.4em;
    }

    .sendBox{
        text-align: right;
        color: $lightBlue;
        font-weight: 600;
        cursor: pointer;
    }

    .okMailContainer{
        -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 1s; /* Firefox < 16 */
        -ms-animation: fadein 1s; /* Internet Explorer */
        -o-animation: fadein 1s; /* Opera < 12.1 */
        animation: fadein 1s;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        font-size: 1.3em;
    }
    .imageOk{
        width: 4em;
        height: 4em;
        padding-bottom: 0.5em;
    }

}

@media screen and (min-width: 320px) and (max-width: 414px) {

    .sendMailContainer{
        -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 1s; /* Firefox < 16 */
        -ms-animation: fadein 1s; /* Internet Explorer */
        -o-animation: fadein 1s; /* Opera < 12.1 */
        animation: fadein 1s;
        padding: 1em;
        background-color: $white;
        width: 85vw;
        height: 10em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: space-between;
        // color: red;
    }

    .titleMail{
        // text-align: left;
        color: $lightBlue;
        font-size: 4.3vw;
    }

    .mailBox{
        text-align: left;
    }

    .mailInputBox{
        text-align: left;
    }

    textarea:focus, input:focus{
        outline: none;
    }

    .inputText{
        background-color: transparent !important;
        width: 100%;
        color: $emailColor;
        font-size: 0.9em;
        font-weight: 600;
        padding: 0.5em;
        border: none;
        border-bottom: 1px solid $locationGrey;  
    }

    .inputTextError{
        background-color: transparent !important;
        width: 100%;
        border: none;
        border-bottom: 1px solid $red;
    }

    .invalidText{
        color: $red;
        font-size: 0.8em;
        text-align: left;
        padding-top: 0.4em;
    }

    .sendBox{
        text-align: right;
        color: $lightBlue;
        font-weight: 600;
    }

    .okMailContainer{
        -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 1s; /* Firefox < 16 */
        -ms-animation: fadein 1s; /* Internet Explorer */
        -o-animation: fadein 1s; /* Opera < 12.1 */
        animation: fadein 1s;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        font-size: 1.3em;
    }

    .imageOk{
        width: 4em;
        height: 4em;
        padding-bottom: 0.5em;
    }

}


</style>
