import e from 'express';

namespace Types {
    export interface User {
        id: string,
        name: string,
        surname: string,
        email: string,
        password: string
    };
    export interface UserController {
        getUserById: (req: e.Request, res: e.Response) => Promise<any>,
        getAllUsers: (req: e.Request, res: e.Response) => Promise<any>,
        addUser: (req: e.Request, res: e.Response) => Promise<any>,
        deleteUser: (req: e.Request, res: e.Response) => Promise<any>,
    };
}

export default Types;