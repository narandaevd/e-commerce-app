const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const srcDir = path.resolve(__dirname, 'src');
const outDir = path.resolve(__dirname, '../', 'dist');
const publicDir = path.resolve(__dirname, 'public');

class Rule {
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

const TSXRule = new Rule()
    .setTest(/\.tsx?$/)
    .setExclude(/node_modules/)
    .setUse('ts-loader');
const JSXRule = new Rule()
    .setTest(/\.jsx$/)
    .setExclude(/node_modules/)
    .setUse({loader: 'babel-loader',options: {presets: ['@babel/preset-react', '@babel/preset-env']}});

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
        rules: [TSXRule]
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