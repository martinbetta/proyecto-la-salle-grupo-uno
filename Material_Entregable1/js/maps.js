// definir constantes que se usarán para visualizar el contenido
const metros = document.querySelector("#station")
const coordinates = document.querySelector("#coordinates")
const bicycle = document.querySelector("#bicycle-station")
const bicycleCoord = document.querySelector("#coordinates-bicycle")
const nameBus = document.querySelector("#bus-station")
const coordinatesBus = document.querySelector("#location-bus")

// Agrega esta función para obtener la ubicación del usuario
function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
}



async function getClosestStation(){
  let latitude = 41.4085865;  // Coordenadas por defecto
  let longitude = 2.1274931;

  try {
    // Obtener la ubicación del usuario
    const position = await getUserLocation();
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
  } catch (error) {
    console.error("Error getting user location:", error);
  }
//Coger los datos de la Api de lo que se quiere y guardarlos en una constante
const myquery = `
query stations {
    
    closestMetroStation: metroStation (
      findBy: {closest: {latitude:${latitude}, longitude: ${longitude} } }
    )
    {
      ...on MetroStation{
        name
        lines
        coordinates {
          latitude
          longitude
        }
      }
    }
    closestBikeStation: bikeStation(
      findBy: { closest: { latitude: ${latitude}, longitude: ${longitude} } }
    ) {
      ...on BikeStation {
        name
        coordinates {
          longitude
          latitude
        }
        
      }
    } 
    closestBusStation: busStop (
      findBy: {closest: {latitude: ${latitude}, longitude: ${longitude} } }
      ) {
      ...on BusStop {
        name
        location {
          address
      }
    }
  }
  
  }
  
`
//indicar la url de la API (de Saverio)
const url = "https://healthy-fox-82.deno.dev/graphql"
//const variables = { cursor: null }
//esperar a la url, con el metodo post, y el body a mostrar.
const response = await fetch(url, {
  method: "POST",
  body: JSON.stringify({ query: myquery})
})
//const text = await response.text()// original del profe
const data = await response.json()

  console.log(data)
  //.then(response => {
    // response.ok será true con respuestas 2XX
    //if (!response.ok){
      //throw new Error("Error HTTP: " + response.status)
   // }
   // return response.json()
  //})
    
  
    // Aquí puedes acceder a los datos del metro más cercano
    //let MetroNombre = data.data.metroStations;
    //let name = MetroNombre.edges[0].node.name;
    //let latitude = MetroNombre.edges[0].node.coordinates.latitude;
    //let longitude = MetroNombre.edges[0].node.coordinates.longitude;

    let stationmetro = data.data.closestMetroStation
    let nombrestation = stationmetro.name
    let linestation = stationmetro.lines
    let latitudemetro = stationmetro.coordinates.latitude
    let longitudemetro = stationmetro.coordinates.longitude
    //console.log(stationmetro)
    //console.log(nombrestation)
    //console.log(linestation)
    //console.log(latitudemetro)
    //console.log(longitudemetro)


    //acceder a los datos de la bicicletas
    let bici = data.data.closestBikeStation;
    let namebici = bici.name;
    let bicylongitud = bici.coordinates.longitude
    let bicylatitud = bici.coordinates.latitude
    //console.log(bici)
    //console.log(namebici)
    //console.log("Longitud: " + bicylongitud)
    //console.log("Latitud: " + bicylatitud)

    //acceder a los datos de los buses
    let bus = data.data.closestBusStation
    let busName = bus.name
    let busAddress = bus.location.address
    //console.log(bus)
    //console.log(busName)
    //console.log(busAddress)
    // Haz lo que desees con los datos del metro

    // crear constante para visualización del nombre de metro
    /*
    const article = document.createElement("article")
    article.innerText = name
    metros.appendChild(article)
    article.classList.add("px-3")
    */

    const nameMetro = document.createElement("article")
    nameMetro.innerText = nombrestation + ", " + linestation
    metros.appendChild(nameMetro)
    nameMetro.classList.add("px-3")

    // crear constante para visualización de latitude y longitude del metro
   /*
    const coord = document.createElement("article")
    coord.innerText = latitude + ", " + longitude;
    coordinates.appendChild(coord)
    coord.classList.add("px-3")
    */

    const coordinatesMetro = document.createElement("article")
    coordinatesMetro.innerText = latitudemetro + ", " + longitudemetro
    coordinates.appendChild(coordinatesMetro)
    coordinatesMetro.classList.add("px-3")
    // crear constante para visualización de nombre de bicicletas
    const bicyStations = document.createElement("article")
    bicyStations.innerText = namebici
    bicycle.appendChild(bicyStations)
    bicyStations.classList.add("px-3")

    // crear constante para visualización de coordenadas de bicicletas
    const coordinatesBicy = document.createElement("article")
    coordinatesBicy.innerText = bicylatitud + ", " + bicylongitud;
    bicycleCoord.appendChild(coordinatesBicy)
    coordinatesBicy.classList.add("px-3")

    // crear constante para visualización de buses

    const busStation = document.createElement("article")
    busStation.innerText = busName
    nameBus.appendChild(busStation)
    busStation.classList.add("px-3")

    // crear constante para visualizacion de direccion de bus

    const busCoordinates = document.createElement("article")
    busCoordinates.innerText = busAddress
    coordinatesBus.appendChild(busCoordinates)
    busCoordinates.classList.add("px-3")

    //console.log(MetroNombre)
    //console.log("Nombre del metro más cercano: " + name);
    //console.log("Latitud: " + latitude);
    //console.log("Longitud: " + longitude);
  
//.catch(error => console.error(error))
//console.log(text)
//console.log(response)
}
getClosestStation()






