<template>
    <v-container class="d-flex justify-center">
        <v-card
        v-if="data"
        class="pa-6"
        max-width="1000"
        color="primary"
        variant="outlined"
        >
        <v-card-title class="text-h5 text-center">
            {{data.title}}
        </v-card-title>

        <v-card-text class="text-body-1">
            <p>{{data.firstParagraph}}</p>
            <p>{{data.secondParagraph}}</p>
            <ul style="margin-left: 35px">
                <li v-for="listElement in data.listElements">{{listElement}}</li>
            </ul>
            <p>
                {{data.thirdParagraph}}
                <app-link to="https://restcountries.com/"><b>{{data.nameOfApiSite}}</b></app-link>.
            </p>
            <p class="mt-4">
                {{data.conclusionStart}} <b><app-link v-bind:to="{name: 'countriesCards'}">Countries Cards</app-link></b> {{data.conclusionEnd}}
            </p>
        </v-card-text>

        <v-card-actions class="justify-center">
            <v-btn 
            color="primary" 
            variant="outlined" 
            to="/countriesCards"
            append-icon="mdi-arrow-right">
            {{ data.link }}
            </v-btn>
        </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
import sourceData from "@/HomePageTranslations.json"

export default {
    props: {
        lang: {type: String, required: true}
    },
    computed: {
        data() {
            return sourceData[this.lang]
        }
    }
}
</script>