const path = require('path');
module.exports = {
    entry:{
        app:"./resource/assets/js/app.js"
    },
    output:{
        path: __dirname + "/public/assets/js/",
        filename:"[name].js"
    },
    module:{
        rules:[
            {
                test: /\.js$/,               
                exclude: /node_modules/,
                loader: 'babel-loader',                
                query:{
                    presets:'es2015'                  
                }
            }            
        ]
    }
}