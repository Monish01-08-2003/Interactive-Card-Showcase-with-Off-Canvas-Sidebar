try {
  url =
    "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME";

  fetch(url)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      var container = document.getElementById("card1");
      data.map((values) => {
        //images
        const images = document.createElement("img");
        images.src = values.url;
        images.classList.add("cardimg");
        container.appendChild(images);
      });
    });
} catch (err) {
  console.log(err);
}
