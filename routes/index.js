var express = require('express');
var router = express.Router();

const fetch = require('node-fetch')

const myApi = process.env.MY_API

router.get('/movies', (req,res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${myApi}`)
    .then(response => response.json())
    .then(data => {  
       res.json ({movies:data.results})
    })
})

module.exports = router;