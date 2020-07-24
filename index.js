const express = require('express');
const http = require('http');
const morgan = require('morgan')
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');;
const leaderRouter = require('./routes/leaderRouter');;

const hostname = 'localhost';
const port = process.env.PORT || 3000;

const app = express()
app.use(morgan('dev'));
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());


const server = http.createServer(app)
server.listen(port, ()=>{
    console.log(`Server running @ http://${hostname}:${port}`)
})