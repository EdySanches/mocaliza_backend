import { model_base_c } from "./model_base"

export class category_c extends model_base_c {

    private name: string

    constructor(id: number, name: string, active: boolean, updated_at: string, created_at: string) {
        super(id, active, updated_at, created_at)
        this.name = name
    }

    set set_name(name){
        this.name = name
    }

    get get_name(){
        return this.name
    }

    static from (id: number, name: string, active: boolean, updated_at: string, created_at: string) {
        return new category_c(id, name, active, updated_at, created_at)
    }


}