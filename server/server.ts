import express from 'express';
const path: RequireResolve = require('path');

const PORT: string | number = process.env.PORT || 3000;

const app: express.Application = express();

app.get('/*', (req: express.Request, res: express.Response): void => {
    res.send('lol');
})

app.listen(PORT, (): void => {
    console.log("Server was started on port: " + PORT);
})