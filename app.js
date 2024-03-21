const gifContainer = document.querySelector(".gifs");
const input = document.querySelector(".input");
const submitBtn = document.querySelector(".submitBtn");
const removeBtn = document.querySelector(".removeBtn");

async function getGif() {
  //function to retrieve data, find gif url, turn to image and append to container
  let searchValue = input.value; //getting our search value
  const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
    // accessing api, putting in searchvalue and key
    params: { q: searchValue, api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" },
  });
  let dataLength = res.data.data.length; //getting data length
  let randIdx = Math.floor(Math.random() * dataLength); //using data length to set params for random index
  randomImg = res.data.data[randIdx].images.original.url; //use random index to get a random gif
  input.value = ""; //reset input field

  let img = document.createElement("img"); //create image
  img.className = "images"; //give class name (for removal later)
  img.src = randomImg; //setting source of image to the random gif
  gifContainer.append(img); //appending image to container, appearing on screen
}

submitBtn.addEventListener("click", function (e) {
  //submit button to prevent default, run getGif function
  e.preventDefault();
  getGif();
});

removeBtn.addEventListener("click", function () {
  //remove button to remove all images with class of "images"
  let images = document.querySelectorAll(".images");
  images.remove();
});
