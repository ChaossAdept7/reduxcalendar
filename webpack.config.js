//webpack waits from us object with config
var webpack = require('webpack');

module.exports = {
    //see errors in original files
    devtool:'inline-source-map',
    entry:[
        'webpack-hot-middleware/client',
        './client/client.js'
    ],
    output:{
        path:require('path').resolve('./dist'),
        filename:'bundle.js',
        publicPath:'/'
    },
    //wp plugins
    plugins:[
        //makes more efficient perfomance
        new webpack.optimize.OccurenceOrderPlugin(),
        //needs to be kindle of middleware in server
        new webpack.HotModuleReplacementPlugin(),
        //allows to replace code if there is no errors
        new webpack.NoErrorsPlugin()
    ],
    //define some tasks which i want wp to do
    module:{
        //loaders - we re loading file and we want to do with them
        loaders:[
            {
                //we want to perform loader if test is true, $ - means that we are in the end of the file
                test:/\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                //instead of babel rc, it tells us what we should do with js files
                query:{
                    presets:['react', 'es2015', 'react-hmre', 'stage-2', "es2017"],
                    plugins: [
                        ["transform-runtime", {
                            "polyfill": false,
                            "regenerator": true
                        }]
                    ]
                }
            },
            {
                test:/\.css$/,
                loader: 'style!css',
            },
            {
                test: /\.less/,
                loader: "style!css!less"
            }
        ]
    }
}

//run it with the setting up config - webpack --config webpack.config.js