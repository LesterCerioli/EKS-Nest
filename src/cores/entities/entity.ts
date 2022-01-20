export abstract class Entity {
    protected readonly _id: string
    public readonly props: T

    get id() {
        return this._id
    }

    constructir(props: T, id?: string) {
        this._id = id || uid()
        this.props = props
    }

    public equals(object?: Entity<T>): boolean {
        if (object == null || object == undefined) {
            return false

        }

        if (this == object) {
            return true
        }

        
        if (!(object instanceof Entity)) {
            return false
        }

        return this._id == object.id

    }


}