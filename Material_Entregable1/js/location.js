/*
// Ejercicio sobre GraphQL y localización

// Obtenemos la ubicacion actual del usuario:
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log("Coordenadas de ubicación del usuario:");
        console.log("Latitud: " + latitude);
        console.log("Longitud: " + longitude);
  
        // Aquí puedes utilizar las coordenadas para mostrar la ubicación en un mapa u otras operaciones.
        // Obtener las estaciones más cercanas a la ubicación del usuario
        getClosestStation(latitude, longitude);
      },
      function (error) {
        console.error("Error al obtener la ubicación:", error);
      }
    );
  } else {
    console.error("Geolocalización no soportada por el navegador");
  }
  
  //Ejercicio sobre async/await APIs y temporización
  
  async function getClosestStation(latitude, longitude) {
    const myquery = `query closestStations {
      closestMetroStation: metroStation(
        findBy: { closest: { latitude: ${latitude}, longitude: ${longitude} } }
      ) {
        ... on MetroStation {
          name
          coordinates {
            longitude
            latitude
          }
          lines
        }
      }
      closestBikeStation: bikeStation(
        findBy: { closest: { latitude: ${latitude}, longitude: ${longitude} } }
      ) {
        ... on BikeStation {
          name
          coordinates {
            longitude
            latitude
          }
          status
        }
      }
      closestBusStation: busStop(
        findBy: { closest: { latitude: ${latitude}, longitude: ${longitude} } }
      ) {
        ... on BusStop {
          name
          location {
            address
            coordinates {
              longitude
              latitude
            }
          }
        }
      }
    }`;
    const url = "https://healthy-fox-82.deno.dev/graphql";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ query: myquery })
    });
    const data = await response.json();
    console.log(data);
  
  
  
    // Display the result of the query
    const closestMetroStation = data.data.closestMetroStation;
    const closestBikeStation = data.data.closestBikeStation;
    const closestBusStation = data.data.closestBusStation;
  
    const locationUserSection = document.getElementById("userLocation");
  
    const resultContainer = document.createElement("div");
    resultContainer.className = "col-12 col-lg-4 pt-2 border border-primary rounded bg-light";
  
    const templateUserLocation = `
      <div class="row">
        <p> <i class="fa-solid fa-train me-2"></i> <strong>Metro</strong>: ${closestMetroStation.name}, ${closestMetroStation.lines[0]} </p>
      </div>
      <div class="row">
        <p> 
          <i class="fa-solid fa-bicycle me-2"></i> 
          <strong>Bike</strong>: ${closestBikeStation.name} 
          <span style="color: ${closestBikeStation.status === "IN_SERVICE" ? "green" : "red"}; font-size: 24px;">
            &#x25cf;
          </span> 
        </p>
      </div>
      <div class="row">
        <p> <i class="fa-solid fa-bus me-2"></i> <strong>Bus</strong>: ${closestBusStation.name} </p>
      </div>
  `;
  
    resultContainer.innerHTML += templateUserLocation;
    locationUserSection.appendChild(resultContainer);
  }
  */