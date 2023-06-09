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

//esperar a la url, con el metodo post, y el body a mostrar.
const response = await fetch(url, {
  method: "POST",
  body: JSON.stringify({ query: myquery})
})

const data = await response.json()

    // Aquí puedes acceder a los datos del metro más cercano
   
    let stationmetro = data.data.closestMetroStation
    let nombrestation = stationmetro.name
    let linestation = stationmetro.lines
    let latitudemetro = stationmetro.coordinates.latitude
    let longitudemetro = stationmetro.coordinates.longitude
  

    //acceder a los datos de la bicicletas
    let bici = data.data.closestBikeStation;
    let namebici = bici.name;
    let bicylongitud = bici.coordinates.longitude
    let bicylatitud = bici.coordinates.latitude

    //acceder a los datos de los buses
    let bus = data.data.closestBusStation
    let busName = bus.name
    let busAddress = bus.location.address


    // visualización del nombre de metro
 

    const nameMetro = document.createElement("article")
    nameMetro.innerText = nombrestation + ", " + linestation
    metros.appendChild(nameMetro)
    nameMetro.classList.add("px-3")

    // visualización de latitude y longitude del metro


    const coordinatesMetro = document.createElement("article")
    coordinatesMetro.innerText = latitudemetro + ", " + longitudemetro
    coordinates.appendChild(coordinatesMetro)
    coordinatesMetro.classList.add("px-3")

    // visualización de nombre de bicicletas

    const bicyStations = document.createElement("article")
    bicyStations.innerText = namebici
    bicycle.appendChild(bicyStations)
    bicyStations.classList.add("px-3")

    // visualización de coordenadas de bicicletas
    const coordinatesBicy = document.createElement("article")
    coordinatesBicy.innerText = bicylatitud + ", " + bicylongitud;
    bicycleCoord.appendChild(coordinatesBicy)
    coordinatesBicy.classList.add("px-3")

    // visualización de buses

    const busStation = document.createElement("article")
    busStation.innerText = busName
    nameBus.appendChild(busStation)
    busStation.classList.add("px-3")

    // visualizacion de direccion de bus

    const busCoordinates = document.createElement("article")
    busCoordinates.innerText = busAddress
    coordinatesBus.appendChild(busCoordinates)
    busCoordinates.classList.add("px-3")

}
getClosestStation()






