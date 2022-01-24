const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const mode = 'development';
const srcDir = path.resolve(__dirname, 'src');
const outDir = path.resolve(__dirname, '../', 'dist');
const indexHtmlPath = path.resolve(__dirname, 'public', 'index.html');

class RuleBuilder {
    constructor() {}
    setTest(regExp) {
        this.test = regExp;
        return this;
    }
    setExclude(regExp) {
        this.exclude = regExp;
        return this;
    }
    setUse(loader) {
        if (typeof loader === 'string') 
            this.use = loader;
        else 
            this.use = {...loader};
        return this;
    }
}
const TSXRule = new RuleBuilder()
    .setTest(/\.tsx?$/)
    .setExclude(/node_modules/)
    .setUse('ts-loader');
// {
//     test: /\.tsx?$/,
//     exclude: /node_modules/,
//     use: 'ts-loader'
// }
const JSXRule = new RuleBuilder()
    .setTest(/\.jsx$/)
    .setExclude(/node_modules/)
    .setUse({
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
        }
    });
// {
//     test: /\.jsx$/,
//     exclude: /node_modules/,
//     use: {
//         loader: 'babel-loader',
//         options: {
//             presets: ['@babel/preset-react', '@babel/preset-env']
//         }
//     }
// }

module.exports = {
    context: srcDir,
    mode: mode,
    entry: ['@babel/polyfill', './index.jsx'],
    output: {
        path: outDir,
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.tsx', '.jsx', '.js', '.ts']
    },
    module: {
        rules: [JSXRule, TSXRule]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: indexHtmlPath,
        }),
        new CleanWebpackPlugin(),
    ]
}