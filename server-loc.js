const express = require('express');
var http = require('http');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World MIV Change');
});

app.get('/locationinfo', (req, resp) => {
  //res.send('Hello World');
	console.log('Calling loctioninfo');
        var options = {
        host: 'c-04.private.us-east.link.satellite.cloud.ibm.com',
	port: 33030,
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

app.get('/mvi', (req, resp) => {
  //res.send('Hello World');
	console.log('Calling mvi');
        var options = {
        host: 'c-04.private.us-east.link.satellite.cloud.ibm.com',
	port: 33823,
	path: '/api/dlapis/111d99ce-3bf0-4cfc-bea6-b9b2759a03c9?imageUrl=http://maximo-query-ui-git-lab-4-admin.dronelabs-ed9112eb83c761afd4c566b0882eaa3e-0000.us-south.containers.appdomain.cloud/Picture1.png',
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
