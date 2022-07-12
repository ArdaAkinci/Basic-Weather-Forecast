// Encoding Inputs //

var form = document.getElementById('form')

form.addEventListener('submit',function(event){
    event.preventDefault() // Autosubmiting

    var searchBar = document.getElementById('searchBar').value
    console.log(searchBar)
})
        
        
// Data Retrieval and Linking from API//

const url = 'https://api.openweathermap.org/data/2.5/' 
const key = '4b8df61a0cc4735b0e9896b9339499a5'

const setQuery = (e) => {
    if(e.form)
     consol.log(url)
        getResult(searchBar.value)
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
    console.log(query)
}


    // Showing Data //

const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerText = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector('.desc')
    desc.innerText = result.weather[0].description

    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C` 

    let humidity = document.querySelector('.humidity')
    humidity.innerText = `Humidity: ${Math.round(result.main.humidity)}%`

    let wind = document.querySelector('.wind')
    wind.innerText = `Wind: ${Math.round(result.wind.speed)}km/h`
}

const searchBar = document.getElementById('searchBar')
form.addEventListener('submit',setQuery)