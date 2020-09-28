const DefinePlugin = require('webpack').DefinePlugin;
const path = require('path');

const config = {
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "./dist/"),
        port: 9000
    },
    plugins: [
        new DefinePlugin({
            'INIT_USER_VALUE': { 
                isAuthenticated: true,
                userInfo: {
                    username: JSON.stringify('prajak')  // got to stringify every string value.
                                                        // because webpack treat quote as object
                }
            }
        })
    ]
}

module.exports = config;