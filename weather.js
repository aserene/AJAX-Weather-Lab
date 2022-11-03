

function weatherSearch (city) {
    const url = `${baseURL}data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
    console.log(url)
    $.ajax(url)
    .then((place) => {
        console.log(place)

        const $main = $("main")
        $main.empty()
        $main.html(`
        <h3>Weather For: ${place.name}</h3>
        <h3>Temperature: ${place.main.temp} F </h3>
        <h3>Feels Like: ${place.main.feels_like} F</h3>
        <h3>Forecast: ${place.weather[0].description}</h3>
        `)
    })
}

$("input[type=submit]").on("click", () => {
    // console.log("cheese")
    const inputText = $("input[type=text]").val()
    
    weatherSearch(inputText)
})

// weatherSearch("San Diego")
