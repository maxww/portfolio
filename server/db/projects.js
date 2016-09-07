[{
	"id": "pathparadox",
	"title": "Path Paradox",
	"role": "Software Engineer",
	"shortDes": "Multiplayer Browser Board Game",
	"description": [{
		"des": "Path Paradox is an online multi-player game based on the popular board game Tsuro. Place a tile in front of your token to continue your path, but be careful to keep your token on the board as the last one remaining wins. One of the major design challenges we tackled was how to convert visual paths into technical terms, including rotations and connections and then storing and sharing it in a Firebase-friendly way."
	}, {
		"des": "We built the board as a graph structure of nodes organized into the 36 spaces of the board, 8 nodes per space which correspond to the eight notches in a tile. Placing a tile created 'neighbor' associations between nodes which represented the paths on the board. This process creates a collection of linked lists that can be traversed in any direction."
	}, {
		"des": "This tile placement is then broadcast to Firebase so all players will receive a real-time update of the state of the board. After they receive this broadcast, each player will move themselves along their paths until they reach the end, the edge of the board, or collide with anot player."
	}, {
		"des": "We utilized Firebase to store only the essential data to keep players' local game states seamlessly in sync with one another. The minimal structure of the data keeps updates between players speedy and we leveraged the built-in authentication to manage game states between players."
	}, {
		"des": "Our game is live on pathparadox.com. We hope you enjoy playing it as much as we enjoyed building it."
	}],
	"images": [{
		"url": "https://firebasestorage.googleapis.com/v0/b/tornglinchen-1c554.appspot.com/o/Path-Paradox_01.jpg?alt=media&token=1280e354-ade6-434c-861e-d94c790575ef"
	}, {
		"url": "https://firebasestorage.googleapis.com/v0/b/tornglinchen-1c554.appspot.com/o/Path-Paradox_02.jpg?alt=media&token=eedd1a1d-f447-4adf-b073-388ebc367115"
	}, {
		"url": "https://firebasestorage.googleapis.com/v0/b/tornglinchen-1c554.appspot.com/o/Path-Paradox_03.jpg?alt=media&token=c5afb9cb-0351-44d2-9826-decfdd38c7cd"
	}],
	"links": {
		"website": "pathparadox.com",
		"github": "github.com/maxww/Path_Paradox",
		"youtube": "http://www.youtube.com/embed/3wNsTCzWtZE"
	}
}, {
	"id": "morecat",
	"title": "moreCat",
	"role": "Sole Developer",
	"shortDes": "Chrome Extension",
	"description": [{
		"des": "moreCat is an front-end application that leverages Browserify to make use of server side packages which allow the use of third party APIs . This Chrome Extension is created using Clarifai, an image recognition service and Pixabay an image search engine. The objective is to bring some laughter into our daily lives whenever needed, by swapping images with cat images."
	}, {
		"des": "moreCat shows the user the percentage of cat images for a given web page. When users adjust the percentage by using the slider bar, it will replace the original images with random cat images. Users can also choose to use images of certain famous cats instead."
	}, {
		"des": "moreCat received People’s Choice Award at Grace Hopper Academy Stackathon. It is fun, lighthearted, and hopes to bring joy to the user's life."
	}],
	"images": [{
		"url": "https://firebasestorage.googleapis.com/v0/b/tornglinchen-1c554.appspot.com/o/moreCat01.jpg?alt=media&token=08db36cf-2878-499a-963d-09e9c741b069"
	}, {
		"url": "https://firebasestorage.googleapis.com/v0/b/tornglinchen-1c554.appspot.com/o/moreCat02.jpg?alt=media&token=b0be924f-e2df-4005-a93c-ba9f2a816c0c"
	}, {
		"url": "https://firebasestorage.googleapis.com/v0/b/tornglinchen-1c554.appspot.com/o/moreCat03.jpg?alt=media&token=3252f99d-914f-42f2-9d3c-05c8db941ee0"
	}],
	"links": {
		"github": "github.com/maxww/morecat",
		"youtube": "http://www.gracehopper.com/student-projects/morecat"
	}
}]
