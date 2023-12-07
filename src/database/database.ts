import { Sequelize, Dialect } from 'sequelize'

export class database_c {
    private static instance: database_c | null;
    private database: Sequelize

    constructor() {
        const driver = 'sqlite' as Dialect
        
        this.database = new Sequelize({ database:'db_mocaliza', username:'dev', password: 'dev',
                                         dialect: driver, storage: './src/database/db_mocaliza.db',
                                         host: '127.0.0.1', port: 16000 })
    }

    public static get_instance(): database_c {
        if (database_c.instance == undefined) {
            database_c.instance = new database_c();
            console.log(new Date(), "get_instance -- instancia foi criada")
        }
        return database_c.instance;
    }

    get sequelize() {
        return this.database
    }

    async sync() {
        this.database.sync({ force: true })
    }

}