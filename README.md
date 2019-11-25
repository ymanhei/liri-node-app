# liri-node-app

#Clearly state the problem the app is trying to solve (i.e. what is it doing and why)<br />
Liri.js is a CLI application that search for information about movies, music and concerts via public APIs. By entering one line command, 
information will be returned quickly on the screen.

#Give a high-level overview of how the app is organized<br />
Liri.js provides information on the concerts such as venue location and date. Besides, it provides information on the songs such as artist
and album information. Users can search for the information for their favourite movies as well. Last but no least, it has a function to read
from plain tezt file instead of typing the commands on the terminal.

#Give start-to-finish instructions on how to run the app<br />
In node.js terminal, navigate to the coressponding folder and simply type in "node liri.js [options] [search_words]"<br />

[options] <br />
concert-this: Search for concerts information via bandsintown api<br />
spotify-this-song: Search for songs information via spotify api<br />
movie-this: Search for movie information via omdb api<br />
do-what-it-says: execute the predefined commands and parameters in the random.txt file.<br />

example: node liri.js concert-this Maroon 5<br />
Results: <br />
Venue: Mandalay Bay Events Center<br />
Location: Las Vegas, United States<br />
Time: December 30th 2019, 8:00:00 pm<br />



#Include screenshots, gifs or videos of the app functioning<br />
![image](https://github.com/ymanhei/liri-node-app/blob/master/screenshots/concert-this.PNG)<br />
![image](https://github.com/ymanhei/liri-node-app/blob/master/screenshots/spotify-this-song.PNG)<br />
![image](https://github.com/ymanhei/liri-node-app/blob/master/screenshots/movie-this.PNG)<br />
![image](https://github.com/ymanhei/liri-node-app/blob/master/screenshots/do-what-it-says.PNG)<br />


#Contain a link to a deployed version of the app<br />
https://ymanhei.github.io/liri-node-app/<br />


#Clearly list the technologies used in the app<br />
Node-Spotify-API<br />
Axios<br />
Moment<br />
DotEnv<br />


#State your role in the app development<br />
Developer
