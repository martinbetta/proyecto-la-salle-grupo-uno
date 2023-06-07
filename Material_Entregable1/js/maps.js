const metros = document.querySelector("#station")
const coordinates = document.querySelector("#coordinates")

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
//esperar a la url, con el metodo post, y el body a mostrar.
const response = await fetch(url, {
  method: "POST",
  body: JSON.stringify({ query: myquery, variables: variables })
})
  //const text = await response.text() original del profe
  .then(response => {
    // response.ok será true con respuestas 2XX
    if (!response.ok){
      throw new Error("Error HTTP: " + response.status)
    }
    return response.json()
  })
    
  .then(data => {
    // Aquí puedes acceder a los datos del metro más cercano
    let MetroNombre = data.data.metroStations;
    let name = MetroNombre.edges[0].node.name;
    let latitude = MetroNombre.edges[0].node.coordinates.latitude;
    let longitude = MetroNombre.edges[0].node.coordinates.longitude;

    // Haz lo que desees con los datos del metro

    // crear constante para visualización del nombre de metro
    const article = document.createElement("article")
    article.innerText = name
    metros.appendChild(article)
    article.classList.add("px-3")

    // crear constante para visualización de latitude y longitude
    const coord = document.createElement("article")
    coord.innerText = latitude + ", " + longitude;
    coordinates.appendChild(coord)
    coord.classList.add("px-3")


    console.log(MetroNombre)
    console.log("Nombre del metro más cercano: " + name);
    console.log("Latitud: " + latitude);
    console.log("Longitud: " + longitude);
  })
.catch(error => console.error(error))
//console.log(text)
console.log(response)







