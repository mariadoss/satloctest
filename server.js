const express = require('express');
var http = require('http');

// Constants
const PORT = 9888;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/locationinfo', (req, resp) => {
  //res.send('Hello World');
        var options = {
        host: '172.27.51.62',
	port: 8080,
	path: '/locationdetail',
        }
        var data = '';
        var request = http.request(options, function (res) {

                res.on('data', function (chunk) {
                        data += chunk;
                });
                res.on('end', function () {
                        console.log(data);
                        resp.send(data);
                });
        });
        request.on('error', function (e) {
                console.log(e.message);            

        });
        //request.end();
        request.end();
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);