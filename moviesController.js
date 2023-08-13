const axios = require('axios');

module.exports.moviespage = async (req, res) => {
  try {
    const rapidApiKey = '36fcd69d43msh3605f480e142b4dp12ff9ajsnd7c08743ba6a'; // Replace with your RapidAPI key
    const response = await axios.get('https://imdb8.p.rapidapi.com/auto-complete', {
      headers: {
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
        'X-RapidAPI-Key': rapidApiKey,
      },
      params: {
        q: 'movie', // Search for movies
        limit: 8,  // Limit the number of results
      },
    });

    const moviesdata = response.data.d;
    console.log("Movies:", moviesdata);
    res.render('movies', { moviesdata });
  } catch (error) {
    console.error("Error:", error); 
  }
};
