// $(".search").on("click", function () {
//   var term = $(this).attr("data-term");
//   var queryURL =
//     "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key==o8QcE6QgjlG7RxrfuyTsx4AyNnZLbtpf";

//   fetch(queryURL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (result) {
//       // Step 1: Run this file, click a button, and see what the data object looks like in the browser's console.
//       // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.

//       // console.log(data);

//       // Step 2: since the image information is inside of the data key,
//       var results = result.data;
//       $(".result").text(results);
//       console.log(results);
//       // make a variable named results and
//     });
// });
// $(".search").on("click", function execute() {
//   var term = $(this).attr("data-term");
//   const url =
//     "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=o8QcE6QgjlG7RxrfuyTsx4AyNnZLbtpf";
//   const options = {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch(url, options)
//     .then((response) => {
//       if (response.ok) {
//         return response.text();
//       }
//       return response.text().then((err) => {
//         return Promise.reject({
//           status: response.status,
//           statusText: response.statusText,
//           errorMessage: err,
//         });
//       });
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// });
$(".search").on("click", function () {
  var term = $(".search-term").val();
  console.log(term);
  const apiKey = "o8QcE6QgjlG7RxrfuyTsx4AyNnZLbtpf";
  const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${apiKey}`;

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };

  fetch(url, options)
    .then((response) => {
      if (response.ok) {
        return response.json(); // Assuming the response is in JSON format
      }
      return response.text().then((err) => {
        return Promise.reject({
          status: response.status,
          statusText: response.statusText,
          errorMessage: err,
        });
      });
    })
    .then((data) => {
      console.log(data);
      // Handle the data here
    })
    .catch((err) => {
      console.error(err);
      // Handle errors here
    });
});
