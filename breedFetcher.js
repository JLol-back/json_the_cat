const request = require('request');
const breed = process.argv[2];
const query = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;


const testFetch = function(query) {
  request(query, (error, response, body) => {
    if (error) {
      console.log("Error: " + error);
      return;
    }

    if (body.length === 2) {
      console.log("We're not fur-miliar with that breed. Purrr-lease try again");
      return;
    } else {
      const data = JSON.parse(body);
      console.log(data[0].description);
    }
  });
};

testFetch(query);