const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  
  const query = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(query, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (body.length === 2) {
      let err = "We're not fur-miliar with that breed. Purrr-lease try again.";
      callback(err, null);
      return;
    }

    const data = JSON.parse(body);
    const desc = data[0].description;
    callback(null, desc);
    
    
  });
};

module.exports = { fetchBreedDescription };