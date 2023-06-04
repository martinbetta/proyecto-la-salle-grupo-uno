
//Coger los datos de la Api de lo que se quiere y guardarlos en una constante
const myquery = `
query metros ($cursor:String) {
    metroStations(first:2 after:$cursor ){
      edges {
        node {
          name
          coordinates {
            latitude
            longitude
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
    
  
  }
  
`
//indicar la url de la API (de Saverio)
const url = "https://healthy-fox-82.deno.dev/graphql"
const variables = { cursor: null }
//url.searchParams.set("query", myquery)
//url.searchParams.set("variables", JSON.stringify(variables))
//url.searchParams.set("operationName", "metros")
//console.log(url)
//const response = await fetch(url
//)

//esperar a la url, con el metodo post, y el body a mostrar.
const response = await fetch(url, {
  method: "POST",
  //mode: "no-cors",
  //headers: { "content-type": "application/json" },
  body: JSON.stringify({ query: myquery, variables: variables })
})
  //const text = await response.text() original del profe
  .then(response => response.json())
  .then(data => {
    // Aquí puedes acceder a los datos del metro más cercano
    let MetroNombre = data.data.metroStations;
    let name = MetroNombre.edges[0].node.name;
    let latitude = MetroNombre.edges[0].node.coordinates.latitude;
    let longitude = MetroNombre.edges[0].node.coordinates.longitude;

    // Haz lo que desees con los datos del metro
    console.log(MetroNombre)
    console.log("Nombre del metro más cercano: " + name);
    console.log("Latitud: " + latitude);
    console.log("Longitud: " + longitude);
  })

//console.log(text)
console.log(response)
//for (const station of text.data.metroStations.edges) {
//  console.log(station.node.name)
//}
//const nextpage = text.data.metroStations.pageInfo.endCursor
//variables.cursor = nextpage
//url.searchParams.set("variables", JSON.stringify(variables))
//const response2 = await fetch(url)
//const datos = await response2.json()

//for (const station of datos.data.metroStations.edges) {
//  console.log(station)
//}







