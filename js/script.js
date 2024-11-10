const content = document.getElementById("content")



async function getData() {

    // first layer fetch
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=386")
    const data = await response.json()
    // console.log(data.results)

    // second layer fetch
    const pokemonUrls = data.results.map((pokemon)=> pokemon.url)
    const pokemonPromises = pokemonUrls.map((url)=> fetch(url).then((response)=> response.json()))
    const pokeDetails = await Promise.all(pokemonPromises);

    // console.log(pokemonUrls)
    // const allTitles = data.map((movie) => {
    // console.log(movie.title)

    content.innerHTML = (pokeDetails.map((pokemon) => {
        return (
            `
        <div class="pokemon-card"> 
          <h2>${pokemon.name}</h2>
          <img src="${pokemon.sprites.front_default}"/>
        </div>
        
        
        `
        )
    }).join(" "))

}
getData()