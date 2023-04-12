<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
export default {
 name: "Map",
 data() {
   return{
     center: [46.21, 16.62]
   }},
 methods: {
   setupLeafletMap: function () {
     const mapDiv = L.map("mapContainer").setView(this.center, 13);
     L.tileLayer(
       "https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=5j2fAuonON9Q6uInrMgp",
       {
        crossOrigin: true
         
       }
     ).addTo(mapDiv);
   },
 },
 mounted() {
   this.setupLeafletMap();
 },
};

fetch('/api/places')
.then(response => response.json())
.then(text => console.log(text))
</script>

<template>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>

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
