const key = "0b2d81bf727ff3fb750155abadf7fdd7"

function dataInscreen(dados){
    console.log(dados)
    document.querySelector(".h2-city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".p-temp").innerHTML = Math.floor(dados.main.temp)+"°C"
    document.querySelector(".text-forecast").innerHTML = dados.weather[0].description 
    document.querySelector(".humidity").innerHTML = dados.main.humidity +"%"
    document.querySelector(".forecast").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}


async function searchcity(city) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json())
    
    
      dataInscreen(dados)
}

function clickInbutton() {
    const city = document.querySelector(".input-city").value 
    

    searchcity(city)
 }