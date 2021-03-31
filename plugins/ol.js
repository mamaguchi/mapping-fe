import Vue from 'vue'
import 'ol/ol.css'
import TileLayer from 'ol/layer/Tile'
import VectorTileLayer from 'ol/layer/VectorTile'
import VectorTileSource from 'ol/source/VectorTile'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import OSM from 'ol/source/OSM'
import XYZSource from 'ol/source/XYZ'
import Style from 'ol/style/Style'
import Text from 'ol/style/Text'
import Fill from 'ol/style/Fill'
import Stroke from 'ol/style/Stroke'
import MVT from 'ol/format/MVT'
import GeoJSON from 'ol/format/GeoJSON'
import Map from 'ol/Map'
import View from 'ol/View'
import Interaction from 'ol/interaction/Interaction'
import Feature from 'ol/Feature'
import Overlay from 'ol/Overlay'
// import Map from 'ol/Map'
// import View from 'ol/View'
// import TileLayer from 'ol/layer/Tile'

const ol = {
  Map,
  View,
  Overlay,
  Interaction,
  layer: {
    Tile: TileLayer,
    Vector: VectorLayer,
    VectorTile: VectorTileLayer
  },
  source: {
    OSM,
    Vector: VectorSource,
    VectorTile: VectorTileSource,
    XYZ: XYZSource
  },
  style: {
    Style,
    Text,
    Fill,
    Stroke
  },
  format: {
    MVT,
    GeoJSON
  },
  Feature
}
Vue.ol = ol
