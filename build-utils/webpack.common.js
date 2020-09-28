const path = require('path');
const { ContextReplacementPlugin, ProvidePlugin } = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const DefinePlugin = require('webpack').DefinePlugin;

let config = {    
    entry: {
        main: './index.ts'
    },
    output: {
        path: path.join(__dirname,'../', "./dist/"),
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js"    // lazyload chunk will use file name instead of id
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            { test: /.ts$/, use: [
                    'awesome-typescript-loader',    // 3 parse therest of ts                    
                    ] },     // 1 parse any lazyload children            
        ]
    },
    plugins: [        
        new DefinePlugin({
            'ENV_PRODUCTION': !!process.env.NODE_ENV            
        })
        // new BundleAnalyzerPlugin()
    ],
    optimization: {
         splitChunks: {
            chunks: 'all'
        }
    }    
}

module.exports = config;