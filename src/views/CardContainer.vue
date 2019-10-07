<template>
    <div>
        <Card :texts="cardTexts" :photoNumber.sync="photoNumber" @changePhotoNumber="photoNumber=$event" :minPhotoNumber="minPhotoNumber" :maxPhotoNumber="maxPhotoNumber"/>
    </div>
</template>

<script>

import Card from '../components/Card'

export default {
    components:{
        Card
    },
    data(){
        return {
            cardTexts: {
                title: this.$t("message.card.title"),
                location: this.$t("message.card.location"),
                description: this.$t("message.card.description"),
                features: this.$t("message.card.features"),
                contact: this.$t("message.card.contact").toUpperCase()
            },
            photoNumber: 1,
            minPhotoNumber: 1,
            maxPhotoNumber: 4
        }
	},
	created(){

    },

    watch: {
    },

    methods: {

    },
    computed: {
    },
}
</script>

<style scoped lang="scss">
@import "./public/assets/scss/_config.scss";


</style>
