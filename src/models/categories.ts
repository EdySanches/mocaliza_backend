import { model_base_c, model_base_i } from "./model_base"

interface model_categories extends model_base_i {
    name: string
}

export class category_c extends model_base_c {

    private name: string

    constructor(category: model_categories) {
        super(category)
        this.name = category.name
    }

    set set_name(name){
        this.name = name
    }

    get get_name(){
        return this.name
    }

    static from (category: model_categories) {
        return new category_c(category)
    }


}