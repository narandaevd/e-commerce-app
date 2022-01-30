import e from 'express';

namespace Types {
    export interface UserController {
        getUserById: (req: e.Request, res: e.Response) => void;
    }
}

export default Types;