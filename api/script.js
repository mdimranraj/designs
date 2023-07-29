const api_url =
      "https://swapi.dev/api/films/";
 
// Defining async function
async function getapi(url) {
   
    // Storing response
    const response = await fetch(url);
   
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data.results[0]);
    
    if (response) {
        hideloader();
        document.getElementById("data").innerHTML = data.results;
    }
}
// Calling that async function
getapi(api_url);
 
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}


