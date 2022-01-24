import express from 'express';
import path from 'path';
import cors from 'cors';

const PORT: string | 3000 = process.env.PORT || 3000;

const __dirname: string = path.resolve('./');
const indexHtmlUrl: string = path.resolve(__dirname, '../', '../', 'dist', 'index.html');
const staticFilesDir: string = path.resolve(__dirname, '../', '../', 'dist');
const jsonOptions: object = {extended: true};

const app: express.Application = express();

app.use(express.static(staticFilesDir))
app.use(express.json(jsonOptions));
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
}));

app.get('/', (req: express.Request, res: express.Response): void => {
    res.sendFile(indexHtmlUrl);
})

app.get('/data', (req: express.Request, res: express.Response): void => {
    res.status(201).send({
        body: 'qweqwe'
    });
})

app.listen(PORT, (): void => {
    console.log("Server was started on port: " + PORT);
})