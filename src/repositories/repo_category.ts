import Categories from '../database/schemas/schema_category'

export class repository_categories_c {
    
    private db_instance

    constructor (){
        this.db_instance = Categories
        console.log(this.db_instance)
    }

    public async create(cat: any) {
        const category = await this.db_instance.create(cat)
        return category
    } 

    public async readAll() {
        const category = await this.db_instance.findAll()
        return category
    } 

    public async readOne(cat: any) {
        const category = await this.db_instance.findOne(cat)
        return category
    } 

    public async update(cat: any) {
        const category = await this.db_instance.update(cat, { where: { id: cat.id } })
        return category
    } 
    
    public async delete(cat: any) {
        const category = await this.db_instance.destroy({ where: { id: cat.id } })
        return category
    } 
}