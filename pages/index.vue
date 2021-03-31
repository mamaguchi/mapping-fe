<template>
  <v-container
    fluid
    fill-height
  >
    <div id="map" class="map" />
  </v-container>
</template>

<script>
import Vue from 'vue'
const ol = Vue.ol

export default {
  components: {
    //
  },

  data () {
    return {
      mymap: undefined
    }
  },

  mounted () {
    this.mymap = new ol.Map({
      view: new ol.View({
        center: [-15000, 6700000],
        zoom: 5
      }),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      target: 'map'
    })
  }
}
</script>

<style scoped>
.map {
    /* width: 400px;
    height: 250px; */
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    font-family: Arial, sans-serif;
}
</style>
