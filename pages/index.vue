<template>
  <v-container
    fluid
    fill-height
  >
    <div id="map" class="map" />
    <div id="js-overlay" class="overlay">
      <label>Id: </label>
      <h3 id="id" />
    </div>
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
      mymap: undefined,
      vectorLayer: undefined,
      heatmapLayer: undefined,
      overlay: undefined,
      selectedFeature: null,
      id: '',
      geomData: [],
      features: []
    }
  },

  async created () {
    // try {
    //   let response
    //   // const payload = {
    //   //   healthOrg: this.healthOrg
    //   // }

    //   if (process.env.NODE_ENV === 'production') {
    //     response = await this.$axios.post(
    //       'https://mywabak.com/address/point/get'
    //     )
    //   } else {
    //     response = await this.$axios.post(
    //       'http://localhost:8080/address/point/get'
    //     )
    //   }
    //   if (!response.data.geoms || response.data.geoms.length === 0) {
    //     alert('Tiada data untuk peta ini')
    //     return
    //   }
    //   this.geomData = [...response.data.geoms]
    //   this.features = []
    //   const latestDt = new Date(this.geomData[this.geomData.length - 1].dt)
    //   const interval = latestDt - new Date(this.geomData[0].dt)
    //   for (let i = 0; i < this.geomData.length; i++) {
    //     const feature = new ol.format.WKT().readFeature(
    //       this.geomData[i].pointWKT,
    //       { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' }
    //     )
    //     feature.set('id', this.geomData[i].id)
    //     feature.set('cluster', this.geomData[i].cluster)
    //     // Set Feature Ordering(dategap) Based on Date
    //     feature.set('dategap', (latestDt - new Date(this.geomData[i].dt)) / interval)
    //     feature.set('weight', (latestDt - new Date(this.geomData[i].dt)) / interval)
    //     // feature.setStyle(this.createMapIconStyle(feature))
    //     this.features.push(feature)
    //   }

    //   // Create a Vector Layer
    //   // this.vectorLayer = new ol.layer.Vector({
    //   //   source: new ol.source.Vector({
    //   //     features: this.features
    //   //   })
    //   // })

    //   // Create a Vector Layer with Cluster
    //   this.vectorLayer = new ol.layer.Vector({
    //     source: new ol.source.Cluster({
    //       distance: 25,
    //       source: new ol.source.Vector({
    //         features: this.features
    //       })
    //     }),
    //     style: this.createMapIconClusterStyle
    //   })

    //   // Create a Heat Map Layer
    //   this.heatmapLayer = new ol.layer.Heatmap({
    //     source: new ol.source.Vector({
    //       features: this.features
    //     })
    //   })

    //   // Create an Overlay
    //   // const overlay = new ol.Overlay({
    //   //   element: this.$refs('js-overlay')
    //   // })
    //   // // document.getElementById('js-overlay').style.display = 'block'
    //   // const select = new ol.interaction.Select({
    //   //   condition: ol.events.condition.click,
    //   //   layers: [this.vectorLayer]
    //   // })
    //   // select.on('select', function (event) {
    //   //   const selectedFeature = event.selected[0]
    //   //   if (selectedFeature) {
    //   //     overlay.setPosition(selectedFeature.getGeometry().getCenter())
    //   //     this.id = selectedFeature.get('id')
    //   //   } else {
    //   //     overlay.setPosition(undefined)
    //   //     this.id = ''
    //   //   }
    //   // })

    //   // Create a Map
    //   this.mymap = new ol.Map({
    //     view: new ol.View({
    //       center: ol.proj.fromLonLat([-75.0, 45.0]),
    //       zoom: 2
    //     }),
    //     layers: [
    //       new ol.layer.Tile({
    //         source: new ol.source.OSM()
    //       }),
    //       this.vectorLayer,
    //       this.heatmapLayer
    //     ],
    //     target: 'map'
    //   })

    //   // this.mymap.addOverlay(overlay)
    //   // this.mymap.addInteraction(select)
    // } catch (error) {
    //   if (error.response) {
    //     alert('Masalah network, sila cuba sebentar lagi')
    //   } else if (error.request) {
    //     //
    //   } else {
    //     //
    //   }
    // }
  },

  async mounted () {
    // const algeria = new ol.Feature(new ol.geom.Point([146759, 3297187]))
    // const libya = new ol.Feature(new ol.geom.Point([1927436, 3160212]))
    // const niger = new ol.Feature(new ol.geom.Point([968610, 1986139]))

    // algeria.setStyle(this.createIconStyle('algeria'))
    // libya.setStyle(this.createIconStyle('libya'))
    // niger.setStyle(this.createIconStyle('niger'))

    // this.vectorLayer = new ol.layer.Vector({
    //   source: new ol.source.Vector({
    //     features: [algeria, libya, niger]
    //   })
    // })

    // this.mymap = new ol.Map({
    //   view: new ol.View({
    //     center: [1795923, 1000000],
    //     zoom: 4
    //   }),
    //   layers: [
    //     new ol.layer.Tile({
    //       source: new ol.source.OSM()
    //     }),
    //     this.vectorLayer
    //   ],
    //   target: 'map'
    // })

    // Create an Overlay
    // const overlay = new ol.Overlay({
    //   element: document.getElementById('js-overlay')
    // })
    // while (this.mymap === undefined) {
    //   //
    // }
    // this.mymap.addOverlay(overlay)
    // document.getElementById('js-overlay').style.display = 'block'
    // const select = new ol.interaction.Select({
    //   condition: ol.events.condition.click,
    //   layers: [this.vectorLayer]
    // })
    // this.mymap.addInteraction(select)
    // select.on('select', function (event) {
    //   const selectedFeature = event.selected[0]
    //   if (selectedFeature) {
    //     overlay.setPosition(selectedFeature.getGeometry().getCenter())
    //     this.id = selectedFeature.get('id')
    //   } else {
    //     overlay.setPosition(undefined)
    //     this.id = ''
    //   }
    // })

    try {
      let response
      // const payload = {
      //   healthOrg: this.healthOrg
      // }

      if (process.env.NODE_ENV === 'production') {
        response = await this.$axios.post(
          'https://mywabak.com/address/point/get'
        )
      } else {
        response = await this.$axios.post(
          'http://localhost:8080/address/point/get'
        )
      }
      if (!response.data.geoms || response.data.geoms.length === 0) {
        alert('Tiada data untuk peta ini')
        return
      }
      this.geomData = [...response.data.geoms]
      this.features = []
      const latestDt = new Date(this.geomData[this.geomData.length - 1].dt)
      const interval = latestDt - new Date(this.geomData[0].dt)
      for (let i = 0; i < this.geomData.length; i++) {
        const feature = new ol.format.WKT().readFeature(
          this.geomData[i].pointWKT,
          { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' }
        )
        feature.set('id', this.geomData[i].id)
        feature.set('cluster', this.geomData[i].cluster)
        // Set Feature Ordering(dategap) Based on Date
        feature.set('dategap', (latestDt - new Date(this.geomData[i].dt)) / interval)
        feature.set('weight', (latestDt - new Date(this.geomData[i].dt)) / interval)
        // feature.setStyle(this.createMapIconStyle(feature))
        this.features.push(feature)
      }

      // Create a Vector Layer
      // this.vectorLayer = new ol.layer.Vector({
      //   source: new ol.source.Vector({
      //     features: this.features
      //   })
      // })

      // Create a Vector Layer with Cluster
      this.vectorLayer = new ol.layer.Vector({
        source: new ol.source.Cluster({
          distance: 25,
          source: new ol.source.Vector({
            features: this.features
          })
        }),
        style: this.createMapIconClusterStyle
      })

      // Create a Heat Map Layer
      // this.heatmapLayer = new ol.layer.Heatmap({
      //   source: new ol.source.Vector({
      //     features: this.features
      //   })
      // })

      // Create a Map
      this.mymap = new ol.Map({
        view: new ol.View({
          center: ol.proj.fromLonLat([-75.0, 45.0]),
          zoom: 2
        }),
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          }),
          this.vectorLayer
          // this.heatmapLayer
        ],
        target: 'map'
      })

      // Create an Overlay
      const overlay = new ol.Overlay({
        element: document.getElementById('js-overlay'),
        positioning: 'center-center'
      })
      this.mymap.addOverlay(overlay)
      document.getElementById('js-overlay').style.display = 'block'
      const select = new ol.interaction.Select({
        condition: ol.events.condition.click,
        layers: [this.vectorLayer]
      })
      this.mymap.addInteraction(select)
      select.on('select', function (event) {
        const selectedFeature = event.selected[0]
        if (selectedFeature) {
          // const extent = selectedFeature.getGeometry().getExtent()
          // overlay.setPosition(ol.extent.getCenter(extent))
          overlay.setPosition(selectedFeature.getGeometry().getCoordinates())
          document.getElementById('id').textContent = selectedFeature.getProperties().features[0].get('id')
        } else {
          overlay.setPosition(undefined)
          this.id = ''
        }
      })
    } catch (error) {
      if (error.response) {
        alert('Masalah network, sila cuba sebentar lagi')
      } else if (error.request) {
        //
      } else {
        //
      }
    }
  },

  methods: {
    createIconStyle (country) {
      return new ol.style.Style({
        image: new ol.style.Icon({
          // src: '~/assets/' + country + '.png'
          src: '/' + country + '.png'
        }),
        text: new ol.style.Text({
          offsetY: 20,
          text: country,
          fill: new ol.style.Fill({
            color: [100, 100, 100, 1]
          }),
          stroke: new ol.style.Stroke({
            color: [255, 255, 255, 0.5],
            width: 1
          }),
          font: '26px "Helvetica Neue", Arial'
        })
      })
    },

    createMapIconStyle (feature) {
      if (!feature.get('cluster')) {
        return [
          new ol.style.Style({
            image: new ol.style.Icon({
              src: '/map-marker-lightred-colorf0435d-32px.png'
            }),
            text: new ol.style.Text({
              offsetY: -1,
              text: feature.get('id').toString(),
              fill: new ol.style.Fill({
                color: [240, 240, 240, 1]
              }),
              font: '12px "Helvetica Neue", Arial'
            })
          })
        ]
      } else {
        return [
          new ol.style.Style({
            image: new ol.style.Icon({
              src: '/map-marker-lightred-colorf0435d-32px.png',
              color: [0, 0, 0, feature.get('dategap')]
            }),
            text: new ol.style.Text({
              offsetY: -1,
              text: feature.get('id').toString(),
              fill: new ol.style.Fill({
                color: [240, 240, 240, 1]
              }),
              font: '12px "Helvetica Neue", Arial'
            })
          }),
          new ol.style.Style({
            image: new ol.style.Icon({
              src: '/virus-tealaccent-color1ee394-12-2pxIN32px.png'
            })
          })
        ]
      }
    },

    createMapIconClusterStyle (cluster) {
      const length = cluster.get('features').length

      if (length > 1) {
        return [
          new ol.style.Style({
            image: new ol.style.Circle({
              radius: Math.min(
                Math.max(length * 1.2, 15), 20
              ),
              fill: new ol.style.Fill({
                color: [0, 204, 0, 0.6]
              })
            }),
            text: new ol.style.Text({
              text: length.toString(),
              fill: new ol.style.Fill({
                color: 'white'
              }),
              stroke: new ol.style.Stroke({
                color: [0, 51, 0, 1],
                width: 1
              }),
              font: '10px "Helvetica Neue", Arial'
            })
          })
        ]
      } else if (length === 1) {
        const feature = cluster.get('features')[0]
        if (!feature.get('cluster')) {
          return [
            new ol.style.Style({
              image: new ol.style.Icon({
                src: '/map-marker-amber-colorFFA000-32px.png'
              }),
              text: new ol.style.Text({
                offsetY: -1,
                text: feature.get('id').toString(),
                fill: new ol.style.Fill({
                  color: [240, 240, 240, 1]
                }),
                font: '12px "Helvetica Neue", Arial'
              })
            })
          ]
        } else {
          return [
            new ol.style.Style({
              image: new ol.style.Icon({
                src: '/map-marker-lightred-colorf0435d-32px.png',
                color: [70, 70, 70, feature.get('dategap')]
              }),
              text: new ol.style.Text({
                offsetY: -1,
                text: feature.get('id').toString(),
                fill: new ol.style.Fill({
                  color: [240, 240, 240, 1]
                }),
                font: '12px "Helvetica Neue", Arial'
              })
            }),
            new ol.style.Style({
              image: new ol.style.Icon({
                src: '/virus-tealaccent-color1ee394-12-2pxIN32px.png'
              })
            })
          ]
        }
      }
    }
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

.overlay {
    display: none;
    position: absolute;
    background: rgba(255,255,255,0.9);
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.25);
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #ccc;
    width: 180px;
    top: -95px;
    left: -91px;
}

.overlay:after {
    top: 100%;
    border: 10px solid transparent;
    content: "";
    height: 0;
    width: 0;
    left: 45%;
    position: absolute;
    border-top-color: rgba(255,255,255,0.9);
}

</style>
