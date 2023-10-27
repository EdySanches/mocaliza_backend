import { Sequelize, Dialect } from 'sequelize'

export class database_c {
    private static instance: database_c | null;
    private database

    constructor() {
        const driver = 'sqlite::memory:' as Dialect
        
        this.database = new Sequelize('database_name', { host: 'localhost', dialect: driver});
    }

    config_database() {

    }

    private getInstance(): database_c {
        if (database_c.instance == undefined) {
            database_c.instance = new database_c();
        }

        return database_c.instance;
    }
}