import e from 'express';

namespace Types {
    export interface APIController {
        getImage: (req: e.Request, res: e.Response) => Promise<any>;
    }
}

export default Types;