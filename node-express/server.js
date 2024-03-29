const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
})

/*
app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
}); 
*/

app.use('/campsites', campsitesRouter);



app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});