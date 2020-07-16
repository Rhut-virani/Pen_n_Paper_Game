const express = require("express");
app = express();
(request = require("request")), (bodyParser = require("body-parser"));

const PORT = process.env.PORT || 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

// app.use(express.static('./pen-and-paper-frontend/build'));
app.use(express.static("./pen-and-paper-frontend/build"));
// app.use('/static_assets', express.static('./pen-and-paper-frontend/build/static'));

let boxdata = [];

for (i = 0; i <= 100; i++) {
	if (i % 10 === 0 && i < 100) {
		boxdata.push({
			id: i,
			side1: { clicked: false, color: "" },
			side2: { clicked: false, color: "" },
			side3: null,
			side4: { clicked: false, color: "" },
			winnercolor: "",
		});
	} else if (i > 90 && i < 100) {
		boxdata.push({
			id: i,
			side1: { clicked: false, color: "" },
			side2: null,
			side3: { clicked: false, color: "" },
			side4: { clicked: false, color: "" },
			winnercolor: "",
		});
	} else if (i === 100) {
		boxdata.push({
			id: i,
			side1: { clicked: false, color: "" },
			side2: { clicked: false, color: "" },
			side3: { clicked: false, color: "" },
			side4: { clicked: false, color: "" },
			winnercolor: "",
		});
	} else {
		boxdata.push({
			id: i,
			side1: { clicked: false, color: "" },
			side2: null,
			side3: null,
			side4: { clicked: false, color: "" },
			winnercolor: "",
		});
	}
}

app.get("/boxdata", (req, res) => {
	res.send(boxdata);
});

app.get("*", (req, res) => {
	res.sendFile("index.html", {
		root: __dirname + "/pen-and-paper-frontend/build",
	});
});

// making sure the server is listening
app.listen(PORT, () => {
	console.log("server running on" + PORT);
});
