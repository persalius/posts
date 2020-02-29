module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    poweredByHeader: false,
    useFileSystemPublicRoutes: false
};

const withCSS = require('@zeit/next-css')
module.exports = withCSS();

// Sass
const withSass = require('@zeit/next-sass')
module.exports = withSass();
