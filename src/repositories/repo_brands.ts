import Brands from '../database/schemas/schema_brands'

export class repository_brands_c {
    
    private db_instance

    constructor (){
        this.db_instance = Brands
    }

    public async create(br: any) {
        const brand = await this.db_instance.create(br)
        return brand
    } 

    public async readAll() {
        const brand = await this.db_instance.findAll()
        return brand
    } 

    public async readOne(id: number) {
        const brand = await this.db_instance.findOne({ where: { id: id } })
        return brand
    } 

    public async update(id: number, br: any) {
        const brand = await this.db_instance.update(br, { where: { id: id } })
        return brand
    } 
    
    public async delete(id: number) {
        const brand = await this.db_instance.destroy({ where: { id: id } })
        return brand
    } 
}