mapboxgl.accessToken = 'pk.eyJ1IjoiYXZsYXNlbmtvIiwiYSI6ImNrdW5iZjZhbjBpenAycG9hdmhkd2RzZmUifQ.zznk4vxMKmX7mdpL5Zx7rA';

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    zoom: 15.5,
    center: [2.3364, 48.86091],
})

let navigation = new mapboxgl.NavigationControl({
    showZoom: true,
})

map.addControl(navigation, 'top-right');

const marker1 = new mapboxgl.Marker({color: 'black', scale: 0.8})
.setLngLat([2.3364, 48.86091])
.addTo(map);

const marker2 = new mapboxgl.Marker({color: 'grey', scale: 0.8})
.setLngLat([2.3333, 48.8602])
.addTo(map);

const marker3 = new mapboxgl.Marker({color: 'grey', scale: 0.8})
.setLngLat([2.3397, 48.8607])
.addTo(map);

const marker4 = new mapboxgl.Marker({color: 'grey', scale: 0.8})
.setLngLat([2.3330, 48.8619])
.addTo(map);

const marker5 = new mapboxgl.Marker({color: 'grey', scale: 0.8})
.setLngLat([2.3365, 48.8625])
.addTo(map);