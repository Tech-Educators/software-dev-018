// call the api
async function getDogImage() {
  // making a request to THAT url to say gimme data pls
  const response = await fetch("https://dog.ceo/api/breeds/image/random");

  // from  the response, get the data
  const data = await response.json();
  console.log(data);

  // add the image to the page
  const img = document.createElement("img");
  img.src = data.message;
  document.body.appendChild(img);
}

getDogImage();
