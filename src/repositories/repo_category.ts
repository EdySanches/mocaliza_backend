import Categories from '../database/schemas/schema_category'

export class repository_categories {
    
    private db_instance

    constructor (){
        this.db_instance = Categories
    }

    public async create(cat) {
        const category = await this.db_instance.create(cat)
        return category
    } 

    public async readAll() {
        const category = await this.db_instance.findAll()
        return category
    } 

    public async readOne(cat) {
        const category = await this.db_instance.find(cat)
        return category
    } 

    public async update(cat) {
        const category = await this.db_instance.update(cat, { where: { id: cat.id } })
        return category
    } 
    
    public async delete(cat) {
        const category = await this.db_instance.destroy({ where: { id: cat.id } })
        return category
    } 
}