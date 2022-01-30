import e from 'express';

namespace Types {
    export interface UserController {
        getUserById: (req: e.Request, res: e.Response) => void,
        getAllUsers: (req: e.Request, res: e.Response) => void,
        addUser: (req: e.Request, res: e.Response) => void,
        // deleteUser: (req: e.Request, res: e.Response) => void,
    }
}

export default Types;