// vérif du chargment de la page

window.onload = function() {
    let macarte = L.map("carte").setView([48.852969, 2.349903],13)
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',{
        attribution: 'données OpenStreeMap France',
        minZoom :1,
        maxZoom :20,
    }).addTo(macarte)

    // On active la gestion d'itinéraires
    L.Routing.control({
        geocoder: L.Control.Geocoder.nominatim(),
        lineOptions: {
            styles : [{
                opacity:0.8,
                weight:7
            }]
        },
        router: new L.Routing.osrmv1({
            language :'fr',
            profile: 'foot' //car , bike ou foot
        })
    }).addTo(macarte)
}