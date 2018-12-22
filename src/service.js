const axios = require('axios')

//Get data from items.json
    axios.get('../../items.json')
    .then(function (response){
    console.log(response);
    })
    .catch(function(err){
    console.log(err);
    })