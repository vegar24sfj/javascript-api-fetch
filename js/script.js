const content = document.getElementById("content")



async function getData() {
    const response = await fetch("https://ghibliapi.vercel.app/films")
    const data = await response.json()
    console.log(data)
    // console.log(data[0].title)
    // const allTitles = data.map((movie) => {
    //     console.log(movie.title)
    // })


    content.innerHTML = (data.map((movie) => {
        return (
            `
        <div class="movie-card"> 
          <h2>${movie.title}</h2>
          <img src="${movie.image}" />
        </div>
        
        
        `
        )
    }).join(" "))

}
getData()