require("dotenv").config();

var keys = require("./keys.js");

//console.log(keys);

var args = process.argv.slice(2);
//console.log(args);

//var spotify = new Spotify(keys.spotify);
const moment = require('moment');
const axios = require('axios');
var Spotify = require('node-spotify-api');
var fs = require('fs');
filePath = ('./random.txt');


switch (args[0]) {

    case "concert-this":

    var artist = args[1] + " " + args[2];

        //var queryURL = "https://www.omdbapi.com/?t=" + query + "&apikey=trilogy";
        var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
        // Make a request for a user with a given ID
        axios.get(queryURL)
        .then(function (response) {
            // handle success
            //console.log(response);
            console.log("Venue: " + response.data[0].venue.name);
            console.log("Location: " + response.data[0].venue.city + ", " + response.data[0].venue.country);
            console.log("Time: " + moment(response.data[0].datetime).format('MMMM Do YYYY, h:mm:ss a'));
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
        break;

        case "spotify-this-song":

                var spotify = new Spotify({
                    id: keys.spotify.id,
                    secret: keys.spotify.secret
                  });

                  var args2 = process.argv.slice(3);
                  var query = args2.join(" ");
                 // console.log(query);

                  if (args[1] == null && args[2] == null) {
                    let query = "The Sign by Ace of Base";
                  }

                  spotify.search({ type: 'track', query: query }, function(err, data) {
                    if (err) {
                      return console.log('Error occurred: ' + err);
                    }
                    //console.log(data.tracks.items[0]);   
                    console.log("Song Name: " + data.tracks.items[0].name);   
                  console.log("Artist Name: " + data.tracks.items[0].artists[0].name);   
                  console.log("Preview Link: " +data.tracks.items[0].uri);
                  console.log("Album Name: " + data.tracks.items[0].album.name); 
                  });
                  break;

                  case "movie-this":
                        var movie = args[1] + " " + args[2];
                        if (args[1] == null && args[2] == null) {
                            var movie = "Mr. Nobody";
                          }
                           
                        //var queryURL = "https://www.omdbapi.com/?t=" + query + "&apikey=trilogy";
                        var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
                        // Make a request for a user with a given ID
                        axios.get(queryURL)
                        .then(function (response) {
                            // handle success
                            //console.log(response);
                           console.log("Title: " + response.data.Title);
                            console.log("Year: " + response.data.Year);
                            console.log("IMDB Rating: " + response.data.imdbRating);
                            console.log("Country: " + response.data.Country);
                            console.log("Language: " + response.data.Language);
                            console.log("Plot: " + response.data.Plot);
                            console.log("Actors: " + response.data.Actors);
                        })
                        .catch(function (error) {
                            // handle error
                            console.log(error);
                        })
                        .finally(function () {
                            // always executed
                        });
                        break;

                        case "do-what-it-says":
                                var array2 = [];
                                fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
                                    if (!err) {
                                        array2 = data.split(",");
                                        var command = array2[0];
                                        array2.shift();
                                        switch (command) {

                                            case "concert-this":
                                        
                                            var artist = args[1] + " " + args[2];
                                        
                                                //var queryURL = "https://www.omdbapi.com/?t=" + query + "&apikey=trilogy";
                                                var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
                                                // Make a request for a user with a given ID
                                                axios.get(queryURL)
                                                .then(function (response) {
                                                    // handle success
                                                    //console.log(response);
                                                    console.log("Venue: " + response.data[0].venue.name);
                                                    console.log("Location: " + response.data[0].venue.city + ", " + response.data[0].venue.country);
                                                    console.log("Time: " + moment(response.data[0].datetime).format('MMMM Do YYYY, h:mm:ss a'));
                                                })
                                                .catch(function (error) {
                                                    // handle error
                                                    console.log(error);
                                                })
                                                .finally(function () {
                                                    // always executed
                                                });
                                                break;
                                        
                                                case "spotify-this-song":
                                        
                                                        var spotify = new Spotify({
                                                            id: keys.spotify.id,
                                                            secret: keys.spotify.secret
                                                          });
                                                          
                                                          
                                                          if (array2 == null) {
                                                            let query = "The Sign by Ace of Base";
                                                          }
                                                         else {
                                                           var query = array2.join(" ");
                                                         }
                                        
                                                          spotify.search({ type: 'track', query: query }, function(err, data) {
                                                            if (err) {
                                                              return console.log('Error occurred: ' + err);
                                                            }
                                                            //console.log(data.tracks.items[0]);   
                                                            console.log("Song Name: " + data.tracks.items[0].name);   
                                                          console.log("Artist Name: " + data.tracks.items[0].artists[0].name);   
                                                          console.log("Preview Link: " +data.tracks.items[0].uri);
                                                          console.log("Album Name: " + data.tracks.items[0].album.name); 
                                                          });
                                                          break;
                                        
                                                          case "movie-this":
                                                                var movie = args[1] + " " + args[2];
                                                                if (args[1] == null && args[2] == null) {
                                                                    var movie = "Mr. Nobody";
                                                                  }
                                                                   
                                                                //var queryURL = "https://www.omdbapi.com/?t=" + query + "&apikey=trilogy";
                                                                var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
                                                                // Make a request for a user with a given ID
                                                                axios.get(queryURL)
                                                                .then(function (response) {
                                                                    // handle success
                                                                    //console.log(response);
                                                                   console.log("Title: " + response.data.Title);
                                                                    console.log("Year: " + response.data.Year);
                                                                    console.log("IMDB Rating: " + response.data.imdbRating);
                                                                    console.log("Country: " + response.data.Country);
                                                                    console.log("Language: " + response.data.Language);
                                                                    console.log("Plot: " + response.data.Plot);
                                                                    console.log("Actors: " + response.data.Actors);
                                                                })
                                                                .catch(function (error) {
                                                                    // handle error
                                                                    console.log(error);
                                                                })
                                                                .finally(function () {
                                                                    // always executed
                                                                });
                                                                break;
                                                            }

                                    } else {
                                        console.log(err);
                                    }
                                })

                                

                         


} 