export interface model_base_i {
    id: number
    created_at: Date
    updated_at: Date
    active: boolean
}

export class model_base_c implements model_base_i  {

    private model_base: model_base_i

    constructor ({id, active, updated_at, created_at}: model_base_i) {
        this.model_base = {} as model_base_i

        this.model_base.id = id
        this.model_base.active = active
        this.model_base.updated_at = updated_at ? updated_at : new Date()
        this.model_base.created_at = created_at ? created_at : new Date()
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
        this.model_base.updated_at = new Date()
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