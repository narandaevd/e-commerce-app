const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const srcDir = path.resolve(__dirname, 'src');
const outDir = path.resolve(__dirname, '../', 'dist');
const publicDir = path.resolve(__dirname, 'public');

class Rule {
    constructor() {}
    setProperty(key, value) {
        this[key] = value;
        return this;
    }
}

const TSXRule = new Rule()
    .setProperty('test', /\.tsx?$/)
    .setProperty('exclude', /node_modules/)
    .setProperty('use', 'ts-loader');
const JSXRule = new Rule()
    .setProperty('test', /\.jsx$/)
    .setProperty('exclude', /node_modules/)
    .setProperty('use', {loader: 'babel-loader',options: {presets: ['@babel/preset-react', '@babel/preset-env']}});
const CSSRule = new Rule()
    .setProperty('test', /\.css$/)
    .setProperty('use', ['style-loader', 'css-loader']);

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', path.resolve(srcDir, 'index.tsx')],
    output: {
        path: outDir,
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.tsx', '.jsx', '.js', '.ts'],
    },
    module: {
        rules: [
            TSXRule,
            CSSRule
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(publicDir, 'index.html'),
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        port: 7000,
    }
}