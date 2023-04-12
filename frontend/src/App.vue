<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
export default {
  name: 'Map',
  data() {
    return {
      center: [50.0755, 14.4378]
    }
  },
  methods: {
    setupLeafletMap: function (mapDiv) {
      L.tileLayer(
        'https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=5j2fAuonON9Q6uInrMgp',
        {
          crossOrigin: true
        }
      ).addTo(mapDiv)
    },
    addMarker: function (mapDiv) {
      L.marker([50.479217, 14.0803621]).addTo(mapDiv)
      fetch('/api/places')
        .then((response) => response.json())
        .then((text) => {
          text.forEach(place => {
            
          });
        })
    }
  },
  mounted() {
    const mapDiv = L.map('mapContainer').setView(this.center, 8)

    this.setupLeafletMap(mapDiv)
    this.addMarker(mapDiv)
  }
}
</script>

<template>
  <div id="container">
    <div id="mapContainer"></div>
  </div>

  <RouterView />
</template>

<style scoped>
#mapContainer {
  width: 80vw;
  height: 100vh;
}
</style>
