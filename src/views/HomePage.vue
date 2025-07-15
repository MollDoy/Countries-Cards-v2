<template>
    <v-container class="d-flex flex-column align-center justify-center" style="min-height: 860px; gap: 24px;">
        <v-btn id="menu-activator" color="primary">{{ buttonName }}</v-btn>
        <v-menu activator="#menu-activator" location="top">
            <v-list>
                <!-- <v-list-item v-for="(item, index) in items" :key="index" v-on:click="goToLang(item.link)">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item> -->

                <app-link v-for="(item, index) in items" :key="index" v-bind:to="item.link">
                    <v-list-item>{{ item.title }}</v-list-item>
                </app-link>

                <!-- <v-list-item v-for="(item, index) in items" :key="index">
                    <app-link v-bind:to="item.link">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </app-link>
                </v-list-item> -->
            </v-list>
        </v-menu>
        <router-view></router-view>
    </v-container>
</template>

<script>
import HomeCard from "@/views/HomeCard.vue"
import sourceData from "@/HomePageTranslations.json"
export default {
    components: {HomeCard},
    data() {
        return {
            items: [
                { title: 'English', link: "/home/en" },
                { title: 'Русский', link: "/home/ru" },
                { title: "العربية", link: "/home/ar" }
            ]
        }
    },
    /* methods: {
        goToLang(link) {
            this.$router.push(link);
        }
    }, */
    computed: {
        buttonName() {
            return sourceData[this.$route.params.lang].buttonText
        }
    }
}
</script>