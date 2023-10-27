import { Sequelize, Dialect } from 'sequelize'

export class database_c {
    private static instance: database_c | null;
    private database: Sequelize

    constructor() {
        const driver = 'sqlite' as Dialect
        
        // this.database = new Sequelize('database_name', { host: 'localhost', dialect: driver, storage: 'memory'});
        this.database = new Sequelize({ database:'db_mocaliza', dialect: driver, storage: './database/file.sqlite' })
    }

    public static get_instance(): database_c {
        if (database_c.instance == undefined) {
            console.log(new Date(), "get_instance -- criando instancia")
            database_c.instance = new database_c();
        }
        return database_c.instance;
    }

    async sync() {
        this.database.sync({ force: true })
    }

}