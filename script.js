console.log("Let's get this party started!");

// API key for Giphy
const API_KEY = "KOVr6fvTeeDhSCS4Tu6rGgNix2XIfkGT";

$(document).ready(function() {
  // Handler for search button click
  $("#search-btn").on("click", function() {
    // Get the search term from the input field
    var searchTerm = $("#search-term").val();
    // Construct the Giphy API URL with the search term and API key
    var giphyApiUrl = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${API_KEY}`;
    // Make an AJAX request to the Giphy API
    $.ajax({
      url: giphyApiUrl, // The URL to send the AJAX request to
      method: "GET", // The HTTP method to use for the request
      success: function(response) { // A callback function to handle the response if the request is successful
        // Empty the existing images from the DOM
        $(".images").empty();
        // Loop through the response data and append each image to the DOM
        for (var i = 0; i < response.data.length; i++) {
          var imageUrl = response.data[i].images.original.url; // Extract the URL of the current image from the response data
          $(".images").append("<img src='" + imageUrl + "'>"); // Append the current image to the DOM
        }
      },
      error: function(error) { // A callback function to handle the response if the request fails
        console.log("Error: " + error);
      }
    });
  });

  // Handler for remove button click
  $("#remove-btn").on("click", function() {
    // Empty the images from the DOM
    $(".images").empty();
  });
});