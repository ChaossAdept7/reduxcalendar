/**
 * Created by serj on 5/23/17.
 */
import express from 'express';
import path from 'path';
import webpack from 'webpack';
import bodyParser from 'body-parser';
import * as db from './utils/DataBaseUtils';

var app = express();

const config = require('../webpack.config');
//allows us to hooking express app
var webpackDevMiddleWare = require('webpack-dev-middleware');
//allows us to hot module reloading
var webpackHotMiddleWare = require('webpack-hot-middleware');

//read config and get compiler
var compiler = webpack(config);

db.setUpConnection();

//publicPath where wp simulates our publicPath from wp config
app.use(webpackDevMiddleWare(compiler, {noInfo:true, publicPath:config.output.publicPath}))
app.use(webpackHotMiddleWare(compiler));

app.use(express.static('./dist'));
app.use(bodyParser.json());
app.get('/*', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

app.post('/users-create',(req, res)=>{
    db.createUser(req.body).then(data=>res.send(data));
});

app.post('/users-list',(req, res)=>{
    db.listUsers().then(data=>{
        return res.send(data);
    });
});


app.delete('/users-list',(req, res)=>{
    db.deleteUser(req.body.id).then(data=>res.send(data));
});

app.post('/login',(req, res)=>{
    db.login(req.body).then(data=>res.send(data));
});


var port = 3000;

app.listen(port, function(error) {
    if (error) throw error;
    console.log("Express server listening on port", port);
});
