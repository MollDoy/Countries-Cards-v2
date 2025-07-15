<template>
    <v-toolbar id="nav" app color="primary" class="mx-auto">
        <v-btn icon>
            <app-link to="/home/en">
                <v-icon>mdi-home</v-icon>
            </app-link>
        </v-btn>

        <v-toolbar-title>
            <app-link to="/countriesCards">Countries Cards</app-link>
        </v-toolbar-title>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-toolbar>
</template>