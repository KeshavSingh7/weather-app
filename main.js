window.addEventListener("load", () => {
  let longitude;
  let latitude;
  let place = document.getElementById("place");
  let region = document.getElementById("region");
  let country = document.getElementById("country");
  let icon = document.getElementById("icon");
  let temp = document.getElementById("temp");
  let desc = document.getElementById("desc");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      longitude = position.coords.longitude;
      latitude = position.coords.latitude;
      const api = `http://api.weatherapi.com/v1/current.json?key=6ab45c63b0a040fe90c145636200109&q=${latitude},${longitude}`;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const getPlace = data.location.name;
          const getRegion = data.location.region;
          const getCountry = data.location.country;
          const getIcon = data.current.condition.icon;
          const getTemp = data.current.temp_c;
          const getDesc = data.current.condition.text;
          place.innerText = getPlace + ", ";
          region.innerText = getRegion + ", ";
          country.innerText = getCountry;
          temp.innerText = getTemp;
          icon.setAttribute("src", getIcon);
          desc.innerText = getDesc;
        });
    });
  }
});
