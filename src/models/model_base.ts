interface model_base_i {
    id: number
    created_at: any
    updated_at: any
    active: boolean
}

export class model_base_c implements model_base_i  {

    private model_base: model_base_i

    constructor (id: any, active: any, updated_at: any, created_at: any) {
        this.model_base = {} as any

        this.model_base.id = parseInt(id)
        this.model_base.active = active
        this.model_base.updated_at = updated_at ? updated_at : Date.now()
        this.model_base.created_at = created_at ? created_at : Date.now()
    }

    get id() {
        return this.model_base.id
    }

    get active() {
        return this.model_base.active
    }

    get updated_at() {
        return this.model_base.updated_at
    }

    get created_at() {
        return this.model_base.created_at
    }

    refresh() {
        this.model_base.updated_at = Date.now()
    }

    is_active() {
        return this.model_base.active
    }

    enable() {
        this.model_base.active = true
    }

    disable(){
        this.model_base.active = false
    }

    
}