import express from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';

import API from './routes/api.routes';
import user from './routes/user.routes';

async function start(): Promise<any> {
    const PORT: string | 3000 = process.env.PORT || 3000;
    const __dirname: string = path.resolve('./');
    const staticFilesDir: string = path.resolve(__dirname, '../', '../', 'dist');
    const jsonOptions: object = {extended: true};
    
    const app: express.Application = express();
    
    app.use(bodyParser.json());
    app.use(express.static(staticFilesDir))
    app.use(express.json(jsonOptions));
    app.use(cors({
        origin: '*',
        methods: ['GET', 'POST'],
        credentials: true,
    }));
    
    app.use('/api', API);
    // app.use('/auth', null);
    app.use('/user', user);
    
    app.get('/', (req: express.Request, res: express.Response): void => {
        res.sendFile(path.resolve(staticFilesDir, 'index.html'));
    })
    
    app.listen(PORT, (): void => console.log("Server was started on port: " + PORT));
}

start();