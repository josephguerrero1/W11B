// Created a function that will execute all code inside and get the fox image.
function getFoxImage() {

    // Created the ajax variable to make the request with 
    let ajax = new XMLHttpRequest();

    // Created the function that will run when the request updates or user clicks the button again.
    ajax.onreadystatechange = function () {

        // This code will run if the request is done and has not errored.
        if (this.readyState == 4 && this.status == 200) {

            // Created variable foxJSON to store all the text from the server.
            let foxJSON = this.responseText;

            // Turning the foxJSON string into an object, stored in the variable foxObject.
            let foxObject = JSON.parse(foxJSON);

            //Selected the key "image" from the object and stored it in the variable foxImage.
            let foxImage = foxObject.image;

            // Selected the empty div element from the HTML document body and stored it in the variable "container".
            // When this function runs, the src of the fox image obtained from the object will attach to the div element, and a random fox image will generate.
            let container = document.getElementById("foxImageContainer");
            container.innerHTML = `<img src="${foxImage}">`;

            // Keeping the p tag with an id of "loading" empty, since the request is done and no longer in progress.
            let loading = document.getElementById("loading");
            loading.innerText = "";

            // This code will run if the request is still loading, not done, in progress.
        } else if (this.readyState != 4) {
            let loading = document.getElementById("loading");
            loading.innerText = "Image is loading, please wait..........";

            // This code will run if the request has errored.
        } else {
            let loading = document.getElementById("loading");
            loading.innerText = "Oops, something went wrong";
        }
    }

    // Configure the request with the GET type and the URL of the API
    ajax.open("GET", "https://randomfox.ca/floof/", true);

    // Send the request
    ajax.send();
}

// Run the function getFoxImage when the user clicks the button.
let foxButton = document.getElementById("button");
foxButton.addEventListener("click", getFoxImage);