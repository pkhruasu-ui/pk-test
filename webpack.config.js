var env = process.env.NODE_ENV || "dev";
console.log(env);
const MergePlugin = require('webpack-merge');
const commonConfig = require('./build-utils/webpack.common');

getEnvironmentConfig = (env) => {
    return require(`./build-utils/webpack.${env}.js`);
}

let envConfig = getEnvironmentConfig(env);
let config = MergePlugin(commonConfig,envConfig);
// console.log(JSON.stringify(config,null,2));

// if(env == 'production'){
//     config.plugins.push(new UglifyJsPlugin())
// }


module.exports = config;