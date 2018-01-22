<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="/static/img/v.png" alt="Vuetify.js" class="mb-5">
        <blockquote>
          Lazy Page
        </blockquote>
        Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd">Increment if odd</button>
        <button @click="incrementAsync">Increment async</button>
        {{ $t("message.hello") }}
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
      computed: mapGetters([
        'evenOrOdd'
      ]),
      methods: mapActions([
        'increment',
        'decrement',
        'incrementIfOdd',
        'incrementAsync'
      ])
    }
</script>