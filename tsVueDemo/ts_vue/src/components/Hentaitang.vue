<template>
  <div>
    hello world
    <HelloWorld></HelloWorld>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./HelloWorld.vue";
@Component({
  components: {
    HelloWorld
  }
})
export default class Hentaitang extends Vue {}
</script>
