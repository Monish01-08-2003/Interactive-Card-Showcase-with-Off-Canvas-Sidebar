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

      data.forEach((values) => {
        //container creating
        const container = document.createElement("div");
        container.classList.add("container1");

        //card creating
        const card = document.createElement("div");
        card.classList.add("card1");
        container.appendChild(card);
      
        

        //images
        const images = document.createElement("img");
        images.src = values.url;
        images.classList.add("cardimg");
        card.appendChild(images);
          //cardcontent
        const cardcontent = document.createElement("div");
        cardcontent.classList.add("cardcontent");
        card.appendChild(cardcontent);
        //h tag
        const headingtop = document.createElement("h3");
        headingtop.classList.add("contenttop");
        headingtop.textContent = "Felines";
        cardcontent.appendChild(headingtop);
        document.body.appendChild(container);
      });
    });
} catch (err) {
  console.log(err);
}
