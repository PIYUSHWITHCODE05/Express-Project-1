

const submitbtn = document.getElementById("submitbtn")
const text = document.getElementById("text")

const temp = document.getElementById("temp");

const temp_status = document.getElementById("temp_status");

const city_name = document.getElementById("city_name");

const func1 = async () => {
    event.preventDefault();
    if (text.value === "") {
        city_name.innerText = "Enter  Your City Name"
        temp.innerText = ""

    } else {
        const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text.value}&units=metric&appid=e8949c8a2865834a65e737a66f8d76fa`)
        const data = await url.json()
        temp.innerText = data.main.temp;
        console.log(data)

        city_name.innerText = data.name + " ," + data.sys.country;

        let tempmood = data.weather[0].main;

        if (tempmood == "Clear") {
            temp_status.innerHTML = `<i class="fa fa-sun" style="color:#eccc68" aria-hidden="true"></i>`
        } else if (tempmood == "Clouds") {
            temp_status.innerHTML = `<i class="fa fa-cloud" style="color:#f1f2f6" aria-hidden="true"></i>`
        } else if (tempmood == "Rain") {
            temp_status.innerHTML = `<i class="fa fa-cloud-rain" style="color:#a4b0be;" aria-hidden="true"></i>`
        } else {
            temp_status.innerHTML = `<i class="fa fa-cloud" style="color:#f1f2f6" aria-hidden="true"></i>`
        }
    }
}

submitbtn.addEventListener("click", func1);