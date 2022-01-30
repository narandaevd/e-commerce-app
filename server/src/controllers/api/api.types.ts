import express from 'express';

namespace Types {
    export interface APIController {
        getImage: (req: express.Request, res: express.Response) => void;
    }
}

export default Types;