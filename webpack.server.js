const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    mode: process.env.NODE_ENV ? process.env.NODE_ENV : "development",
    entry: "./server/index.tsx",
    target: "node",
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js)$/,
                use: [
                    // "babel-loader",
                    {
                        loader: "ts-loader",
                        options: {
                            // use the tsconfig in the server directory
                            configFile: "server/tsconfig.json",
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    // "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    },
};
