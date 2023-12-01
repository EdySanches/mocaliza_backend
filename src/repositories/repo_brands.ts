// TODO testar

import Brands from '../database/schemas/schema_brands'

export class repository_brands_c {
    
    private db_instance

    constructor (){
        this.db_instance = Brands
    }

    public async create(br) {
        const brand = await this.db_instance.create(br)
        return brand
    } 

    public async readAll() {
        const brand = await this.db_instance.findAll()
        return brand
    } 

    public async readOne(br) {
        const brand = await this.db_instance.find(br)
        return brand
    } 

    public async update(br) {
        const brand = await this.db_instance.update(br, { where: { id: br.id } })
        return brand
    } 
    
    public async delete(br) {
        const brand = await this.db_instance.destroy({ where: { id: br.id } })
        return brand
    } 
}