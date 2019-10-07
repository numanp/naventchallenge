<template>
    <div>
         <div class="cardContainer shadow">
             <span class="photoContainer" :style="{'background-image': 'url(' + require('../../public/assets/img/' + photoNumber + '.png') + ')'}">    
                 <div class="heartOutstandingContainer">
                    <span class="outstandingBox">
                        <span class="outstandingText"> Super destacado </span>
                    </span>
                    <span @click="favouriteDepartment()"> <i :class=" $store.getters.getClickedHeart === false ? 'fas fa-heart' : 'changeColor fas fa-heart'"></i> </span>
                    
                 </div>
                 <div class="arrowsContainer">
                    <span  @click="changePhoto('left')"> <i :disabled="photoNumber === 1" class="fas fa-chevron-left"></i> </span>
                    <span @click="changePhoto('right')"> <i :disabled="photoNumber === 4" class="fas fa-chevron-right"></i> </span>
                 </div>
             </span>
             <span class="textContainer">
                    <div class="upperBoxContainer">
                        <div>
                            <div class="titleContainer"> 
                                {{texts.title}}
                            </div>
                            <div class="locationContainer">
                            <span> <i class="fas fa-map-marker-alt"></i> </span> {{texts.location}}
                            </div>
                        </div>
                        <div class="descriptionContainer">
                            {{texts.description}}
                        </div>
                        <div class="priceContainer">
                          <span class="priceTitle"> {{$t("message.card.uss")}} <span contenteditable @click="price = ''" onKeypress='if(event.keyCode < 48 || event.keyCode > 57){return false;}' @input="changePrice"> {{priceTag}} </span> </span> <span class="meterCubicsContainer"> <span class="italicText"> {{$t("message.card.m2")}} </span> {{m2.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").slice(0,5)}} </span>
                        </div> 
                        <div v-if="widthScreen >= 320 && widthScreen < 420" class="contactButtonMobile" @click="openContactForm"> {{texts.contact}} </div>
                 </div>
                 <div class="lowBoxContainer">
                    <div class="departmentContainer"> 
                        <span> {{texts.features}} </span> <span class="contactButton" @click="openContactForm"> {{texts.contact}} </span>
                    </div>
                 </div>
             </span>
         <div class="sendMail" v-if="contactForm">
             <ContactForm @formReady="contactForm=$event" />
         </div>
         </div>
    </div>

</template>

<script>

import ContactForm from './ContactForm.vue'

export default {
    components:{
        ContactForm,
    },
    props: ["texts", "photoNumber", "minPhotoNumber", "maxPhotoNumber"],
    data(){
        return {
            price: this.$store.getters.getPrice,
            m2: this.$store.getters.getM2,
            clickedHeart: this.$store.getters.getClickedHeart,
            contactForm: false,
            widthScreen: Number(0),
        }
	},
	created(){
        window.addEventListener('resize', this.handleResize)
            this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize)
    },
    watch: {
        '$store.getters.getM2': function(){
            this.m2 = this.$store.getters.getM2
        },
        '$store.getters.getPrice': function(){
            this.price = this.$store.getters.getPrice
        },
    },

    methods: {
        handleResize() {
        this.widthScreen = window.innerWidth;
        },
        favouriteDepartment(){
            this.$store.dispatch("setClickedHeart", !this.$store.getters.getClickedHeart)
        },
        changePrice(e){
            this.$store.dispatch("setPrice", Number(e.target.innerText))
        },
        changePhoto(direction){
            if(direction == 'left' && this.photoNumber > 1 && this.photoNumber <= 4){
                this.$emit("changePhotoNumber", this.photoNumber-1);
            } else if(direction == 'right' && this.photoNumber >= 1 && this.photoNumber < 4){
                this.$emit("changePhotoNumber", this.photoNumber+1);
            }
        },
        openContactForm(){
            this.contactForm = !this.contactForm
        }
    },
    computed: {
        priceTag: function(){
            return this.price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
        }
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

    .cardContainer{
        max-width: 875px;
        min-width: 734px;
        width: 100vw;
        height: 17em;
        display:flex;
        justify-content: center;
        align-items: center;
        align-content: center;
    }

    .photoContainer{
        width: 40%;
        vertical-align: middle;
        background-size: cover;
        background-position: center center;
        height: 100%;
        position: relative;
        overflow: hidden;
    }

    .heartOutstandingContainer{
        display:flex;
        justify-content: space-between;
        align-items: center;
        align-content: space-between;
    }

    .outstandingText{
        color: $white;
        font-size: 1.5vw;
        font-weight: 600;
    }

    .photoContainer .fa-heart{
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: $white;
        color: $black !important;
        font-size: 1.5em;
        padding: 0.4em 0.4em 0 0;
    }

    .changeColor.fas.fa-heart{
        -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 1s; /* Firefox < 16 */
        -ms-animation: fadein 1s; /* Internet Explorer */
        -o-animation: fadein 1s; /* Opera < 12.1 */
        animation: fadein 1s;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: $white;
        color: $red !important;
        font-size: 1.5em;
        padding: 0.4em 0.4em 0 0;
    }

    .photoContainer .fa-heart:hover{
        color: $red !important;
        opacity: 0.5;
    }

    .arrowsContainer{
        position: absolute;
        top: 47%;
        width: 100%;
    }

    .arrowsContainer .fa-chevron-left{
        position: absolute!important;
        left: 2%;
        opacity: 0.7;
        font-size: 2em;
        color: $white !important
    }

    .arrowsContainer .fa-chevron-left:hover{
        opacity: 1;
    }

    .arrowsContainer .fa-chevron-left[disabled]{
        opacity: 0;
    }

    .arrowsContainer .fa-chevron-right{
        position: absolute !important;
        right: 2%;
        opacity: 0.7;
        font-size: 2em;
        color: $white !important
    }

    .arrowsContainer .fa-chevron-right:hover{
        opacity: 1;
    }

    .arrowsContainer .fa-chevron-right[disabled]{
        opacity: 0;
    }

    .outstandingBox{
        margin-top: 0.4em;
        width: 40%;
        height: 1.5em;
        background-color: $violet;
        display:flex;
        direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
    }

    .textContainer{
        width: 60%;
        height: 96%;
        background-color: $white;
    }

    .upperBoxContainer{
        margin: 1em;
        height: 75%;
        background-color: $white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        // align-items: center;
        align-content: space-between;
    }

    .titleContainer{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
        color: $lightBlue;
        font-size: 1.2em;
    }

    .locationContainer{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 60%;
        color: $locationGrey;
        font-size: 0.8em;
        padding-top: 0.6em;
    }

    .locationContainer .fa-map-marker-alt{
        font-size: 0.8em !important; 
    }

    .descriptionContainer{
        text-align: left;
        font-size: 0.8em;
        font-weight: 300
    }

    .priceContainer{
        text-align: left;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .priceTitle{
        font-size: 3vw;
        font-weight: 700;
    }

    .meterCubicsContainer{
        color: $lightBlue;
    }

    .italicText{
        font-style: italic;
    }

    .lowBoxContainer{
        width: 100%;
        height: 15%;
        background-color: $footerGrey;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
    }

    .departmentContainer{
        margin: 1.3em;
        width: 100%;
        background-color: $footerGrey;
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        font-size: 1.5vw;
        font-weight: 600;
    }

    .contactButton{
        color: $lightBlue;
        cursor: pointer;
    }

    .sendMail{
        position: absolute;
        z-index: 1;
    }

}

@media screen and (min-width: 320px) and (max-width: 414px) {

    .cardContainer{
        width: 100vw;
        height: 40em;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
    }

    .photoContainer{
        width: 100%;
        vertical-align: middle;
        background-size: cover;
        background-position: center center;
        height: 45%;
    }

    .heartOutstandingContainer{
        display:flex;
        justify-content: space-between;
        align-items: center;
        align-content: space-between;
    }

    .outstandingText{
        color: $white;
        font-size: 4vw;
        font-weight: 600;
    }

    .photoContainer .fa-heart{
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: $white;
        color: $black !important;
        font-size: 2em;
        padding: 0.4em 0.4em 0 0;
    }

    .changeColor.fas.fa-heart{
        -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 1s; /* Firefox < 16 */
        -ms-animation: fadein 1s; /* Internet Explorer */
        -o-animation: fadein 1s; /* Opera < 12.1 */
        animation: fadein 1s;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: $white;
        color: $red !important;
        font-size: 2em;
        padding: 0.4em 0.4em 0 0;
    }

    .arrowsContainer{
        position: absolute;
        top: 25%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: center;

    }

    .arrowsContainer .fa-chevron-left{
        padding-left: 0.3em;
        opacity: 0.7;
        font-size: 2em;
        color: $white !important
    }

    .arrowsContainer .fa-chevron-left[disabled]{
        opacity: 0;
    }

    .arrowsContainer .fa-chevron-right{
        padding-right: 0.3em;
        opacity: 0.7;
        font-size: 2em;
        color: $white !important
    }

    .arrowsContainer .fa-chevron-right[disabled]{
        opacity: 0;
    }

    .outstandingBox{
        margin-top: 0.4em;
        width: 40%;
        height: 7vw;
        background-color: $violet;
        display:flex;
        direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        font-weight: 600;
    }

    .textContainer{
        width: 100%;
        height: 55%;
    }

    .upperBoxContainer{
        margin: 1.5em;
        text-align: left;
        height: 84%;
        background-color: $white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: space-between;
    }

    .titleContainer{
        width: 100%;
        color: $lightBlue;
        font-size: 1.2em;
    }

    .locationContainer{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
        color: $locationGrey;
        font-size: 0.9em;
        padding-top: 1em;
    }

    .locationContainer .fa-map-marker-alt{
        font-size: 0.8em !important; 
    }

    .descriptionContainer{
        height: 50%;
        text-align: left;
        font-size: 4vw;
    }

    .priceTitle{
        position: absolute;
        top: 38%;
        left: 5%;
        font-size: 6vw;
        font-weight: 700;
        color: $white;
    }

    .meterCubicsContainer{
        color: $lightBlue;
        display: none;
    }

    .italicText{
        font-style: italic;
    }

    .departmentContainer{
        position: absolute;font-weight: 700;
        top: 43%;
        left: 5%;
        color: $white;
        font-size: 3.5vw;
        font-weight: 700;
    }
    .contactButton{
        display: none;
    }
    .contactButtonMobile{
        color: $lightBlue;
        text-align: right;
        font-weight: 600;
        font-size: 1.1em;
    }

    .sendMail{
        position: absolute;
        z-index: 1;
    }

}

</style>
