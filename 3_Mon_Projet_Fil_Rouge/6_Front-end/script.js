// variables globales
let ville = distance =""

// vérif du chargment de la page

window.onload =  () => {
    let macarte = L.map("carte").setView([43.600000, 1.433333],13)
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',{
        attribution: 'données OpenStreeMap France',
        minZoom :1,
        maxZoom :20,
    }).addTo(macarte)


// gestion des champs
    let champVille = document.getElementById('champ-ville')
    let champDistance = document.getElementById('champ-distance')
    let valeurDistance = document.getElementById('valeur-distance')

    champVille.addEventListener("change", function(){
        // On envoie la requête ajax vers Nominatim
        ajaxGet(`https://nominatim.openstreetmap.org/search?q=${this.value}&format=json&adressdetails=1&limit=1&polygon_svg=1`).then(response => {
            // On convertit la réponse en objet Javascript
            let data = JSON.parse(response)

            // On stocke les coordonnées dans ville
            ville = [data[0].lat, data[0].lon]

            // On centre la carte sur la ville
            macarte.panTo(ville)
        })
    })

    champDistance.addEventListener("change", function(){
        distance = this.value
        valeurDistance.innerText = distance + "km"
    })

    // On active la gestion d'itinéraires
    // L.Routing.control({
    //     geocoder: L.Control.Geocoder.nominatim(),
    //     lineOptions: {
    //         styles : [{
    //             opacity:0.8,
    //             weight:7
    //         }]
    //     },
    //     router: new L.Routing.osrmv1({
    //         language :'fr',
    //         profile: 'foot' //car , bike ou foot
    //     })
    // }).addTo(macarte)
}



// Cette fonction effectuer un appel Ajax vers une url et retourne une promesse
// @param {string} url


function ajaxGet(url){
    return new Promise(function(resolve, reject){
        // Gestion de la promesse
        let xmlhttp = new XMLHttpRequest()

        xmlhttp.onreadystatechange = function() {
            if(xmlhttp.readyState == 4){
                if(xmlhttp.status ==200){
                    // On "résoud" la promesse
                    resolve(xmlhttp.response)
                } else {
                    reject(xmlhttp)
                }
            }
        }
        xmlhttp.onerror = function(error){
            reject(error)
        }

        xmlhttp.open('get', url, true)
        xmlhttp.send()
    })
}