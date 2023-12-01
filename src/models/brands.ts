// TODO testar
import { model_base_c, model_base_i } from "./model_base"

interface model_brands extends model_base_i {
    name: string
}

export class brands_c extends model_base_c {

    private name: string

    constructor(brand: model_brands) {
        super(brand)
        this.name = brand.name
    }

    set set_name(name: string){
        this.name = name
    }

    get get_name(){
        return this.name
    }

    static from (brand: model_brands) {
        return new brands_c(brand)
    }


}