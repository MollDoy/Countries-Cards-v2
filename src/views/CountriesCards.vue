<template>
    <v-container>
        <v-container>
            <v-row>
                <v-col cols="10">
                    <v-text-field color="primary" label="Enter a new country" v-model="newCountry" v-on:keyup.enter="addCountry()"></v-text-field>
                </v-col>
                <v-col cols="2">
                    <v-btn block rounded="lg" color="primary" variant="outlined" v-on:click="addCountry" append-icon="mdi-check-circle" style="top: 10px">Add</v-btn>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-row justify="center">
                <v-col v-for="country in countries" v-bind:key="country.id" cols="12" sm="12" md="6" lg="4" xl="3">
                    <CountryCard v-bind:country="country.name" v-on:remove="removeCountry(country.id)"></CountryCard>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script> 
  import CountryCard from '@/components/CountryCard.vue';
  export default {
    components: {
      CountryCard
    },
    data() {
        return {
          countries: [
              {id: 1, name: "russia"},
              {id: 2, name: "usa"},
              {id: 3, name: "japan"}
          ],
          newCountry: "",
          nextId: 4,
        }
    },
  methods: {
      addCountry() {
          if (!this.newCountry) {return}
          this.countries.push({id: this.nextId++, name: this.newCountry.toLowerCase()});
          this.newCountry = "";
      },
      removeCountry(id) {
          this.countries = this.countries.filter(country => country.id !== id);
      }
  },
}
</script>