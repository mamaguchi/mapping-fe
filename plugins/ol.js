import Vue from 'vue'
import 'ol/ol.css'
import TileLayer from 'ol/layer/Tile'
import VectorTileLayer from 'ol/layer/VectorTile'
import VectorTileSource from 'ol/source/VectorTile'
import VectorLayer from 'ol/layer/Vector'
import Heatmap from 'ol/layer/Heatmap'
import VectorSource from 'ol/source/Vector'
import OSM from 'ol/source/OSM'
import XYZSource from 'ol/source/XYZ'
import Cluster from 'ol/source/Cluster'
import Style from 'ol/style/Style'
import Icon from 'ol/style/Icon'
import Circle from 'ol/style/Circle'
import Text from 'ol/style/Text'
import Fill from 'ol/style/Fill'
import Stroke from 'ol/style/Stroke'
import MVT from 'ol/format/MVT'
import WKT from 'ol/format/WKT'
import GeoJSON from 'ol/format/GeoJSON'
import Map from 'ol/Map'
import View from 'ol/View'
import Interaction from 'ol/interaction/Interaction'
import Select from 'ol/interaction/Select'
import Feature from 'ol/Feature'
import Overlay from 'ol/Overlay'
import Point from 'ol/geom/Point'
import { fromLonLat } from 'ol/proj'
import { click } from 'ol/events/condition'
import { getCenter } from 'ol/extent'

const ol = {
  Map,
  View,
  Overlay,
  Interaction,
  layer: {
    Tile: TileLayer,
    Vector: VectorLayer,
    VectorTile: VectorTileLayer,
    Heatmap
  },
  source: {
    OSM,
    Vector: VectorSource,
    VectorTile: VectorTileSource,
    XYZ: XYZSource,
    Cluster
  },
  geom: {
    Point
  },
  interaction: {
    Select
  },
  style: {
    Style,
    Icon,
    Circle,
    Text,
    Fill,
    Stroke
  },
  format: {
    WKT,
    MVT,
    GeoJSON
  },
  Feature,
  proj: {
    fromLonLat
  },
  events: {
    condition: {
      click
    }
  },
  extent: {
    getCenter
  }
}
Vue.ol = ol
