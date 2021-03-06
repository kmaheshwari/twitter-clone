module.exports = {
    entry: "./app/assets/frontend/main.jsx",
    output: {
        path: __dirname + "/app/assets/javascripts",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
              test: /\.jsx$/,
              loader: "babel-loader",
              exclude: /node_modules/,
              query:{presets:['es2015','react']}
            }
        ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
};
