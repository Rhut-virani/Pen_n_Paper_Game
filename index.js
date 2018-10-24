const express = require('express');
      app = express();
      request = require("request"),
      bodyParser = require('body-parser');

      const PORT = process.env.PORT || 8080;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// app.use(express.static('./pen-and-paper-frontend/build'));
app.use(express.static('./pen-and-paper-frontend/build/static'));
// app.use('/static_assets', express.static('./pen-and-paper-frontend/build/static'));

let boxdata = [];

for (i=0 ; i<=100; i++){
    if(i%10 === 0 && i<100){
        boxdata.push({
            class : 'singularBox btrb ',
            side1: 'btc',
            side2: 'brc',
            side4: 'blc',
            winnercolor: ''
        });
    }
        else if (i > 90 && i < 100){
            boxdata.push({
                class : 'singularBox blbb ',
                side1: 'btc',
                side3: 'bbc',
                side4: 'blc',
                winnercolor: ''

            });
        }
        else if (i === 100) {
            boxdata.push({
                class : 'singularBox ball ',
                side1: 'btc',
                side2: 'brc',
                side3: 'bbc',
                side4: 'blc',
                winnercolor: ''
            });
        }
        else {
            boxdata.push({
                class : 'singularBox bltb ',
                side1: 'btc',
                side4: 'blc',
                winnercolor: ''
        });   
        }
}

app.get('/', (req,res)=>{
    res.send(boxdata);
})

// making sure the server is listening
app.listen(PORT, ()=>{
    console.log('server running on' + PORT);
})
