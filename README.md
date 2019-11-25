# liri-node-app

-Clearly state the problem the app is trying to solve (i.e. what is it doing and why)
Liri.js is a CLI application that search for information about movies, music and concerts via public APIs. By entering one line command, 
information will be returned quickly on the screen.

-Give a high-level overview of how the app is organized
Liri.js provides information on the concerts such as venue location and date. Besides, it provides information on the songs such as artist
and album information. Users can search for the information for their favourite movies as well. Last but no least, it has a function to read
from plain tezt file instead of typing the commands on the terminal.

-Give start-to-finish instructions on how to run the app
In node.js terminal, navigate to the coressponding folder and simply type in "node liri.js [options] [search_words]"

[options] 
concert-this: Search for concerts information via bandsintown api
spotify-this-song: Search for songs information via spotify api
movie-this: Search for movie information via omdb api
do-what-it-says: execute the predefined commands and parameters in the random.txt file.

example: node liri.js concert-this Maroon 5
Results: 
Venue: Mandalay Bay Events Center
Location: Las Vegas, United States
Time: December 30th 2019, 8:00:00 pm


-Include screenshots, gifs or videos of the app functioning

-Contain a link to a deployed version of the app
https://ymanhei.github.io/liri-node-app/

-Clearly list the technologies used in the app
Node-Spotify-API
Axios
Moment
DotEnv


-State your role in the app development
Developer
