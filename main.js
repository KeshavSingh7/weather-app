window.addEventListener("load", () => {
  let longitude;
  let latitude;
  let timezone = document.getElementById("timezone");
  let temp = document.getElementById("temp");
  let desc = document.getElementById("description");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      const longitude = position.coords.longitude;
      const latitude = position.coords.latitude;
      //const proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `http://api.weatherapi.com/v1/current.json?key=6ab45c63b0a040fe90c145636200109&q=${latitude},${longitude}`;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const place = data.location.name;
          const state = data.location.region;
          const country = data.location.country;
          const temp = data.current.temp_c;
          const desc = data.current.condition.text;
          timezone.innerText = place + " / " + state + " / " + country;
          console.log(place, state, country, temp, desc);
        });
    });
  }
});
