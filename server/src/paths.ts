import path from 'path';

interface PathsType {
    readonly root: string,

    readonly client: string,
    readonly public: string,
    readonly img: string,

    readonly server: string,
}

class Paths implements PathsType {
    root: string = path.resolve('../');
    client: string = path.resolve(this.root, 'client');
    public: string = path.resolve(this.client, 'public');
    img: string = path.resolve(this.public, 'img');
    server: string = path.resolve(this.root, 'server');
}

export default new Paths();