import { database_c } from '../database/database'
import Categories from '../database/schemas/schema_category'

export class repository_categories {
    
    private db_instance

    public restaurante: {
        a_result: 's',
        b_result: 3
    }

    constructor (){
        this.db_instance = Categories
    }

    public async create() {
        this.db_instance.sync()
        const category = await this.db_instance.
        return 
    } 

    public async read() {

    } 

    public async update() {
   
    } 
    
    public async delete() {
        
    } 
}