"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var PORT = process.env.PORT || 3000;
var __dirname = path_1["default"].resolve('./');
var indexHtmlUrl = path_1["default"].resolve(__dirname, '../', '../', 'dist', 'index.html');
var staticFilesDir = path_1["default"].resolve(__dirname, '../', '../', 'dist');
var app = (0, express_1["default"])();
app.use(express_1["default"].static(staticFilesDir));
app.get('/', function (req, res) {
    res.sendFile(indexHtmlUrl);
});
app.get('/data', function (req, res) {
    res.status(201).send('some data');
});
app.listen(PORT, function () {
    console.log("Server was started on port: " + PORT);
});
