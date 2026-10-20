
let forecast = document.getElementById("forecast");

fetch("http://localhost:3000/forecast")
.then((res)=>res.json())
.then((data)=>displayWeather(data))
.catch((err)=>console.log(err))

function displayWeather(data)
 {
    forecast.innerHTML = "";

    data.forEach(function (item)
     {
        let card = document.createElement("div");

        card.classList.add("weather-card");

        card.innerHTML = `
            <h3>${item.day}</h3>

            <div class="icon">
                ${getIcon(item.icon)}
            </div>

            <h2>${item.temperature}${item.temperatureUnit}</h2>

            <p>${item.condition}</p>

            <div class="pop">
                <span>POP</span>
                <span>${item.pop}%</span>
            </div>
        `;

        forecast.appendChild(card);
    });
}

