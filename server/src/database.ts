import Pg, {Pool} from 'pg';

const pool: Pg.Pool = new Pool({
    user: 'postgres',
    password: 'Leeshrac1734',
    host: 'localhost',
    database: 'test',
    port: 5432,
});

export default pool;