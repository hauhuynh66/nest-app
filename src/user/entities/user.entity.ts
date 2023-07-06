import { Prop, Schema, raw } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
    @Prop({required: true, type: String})
    firstname: String
    
    @Prop({required: true, type: String})
    lastname: String

    @Prop({required: true, type: String})
    username: String

    @Prop({type: Date})
    birthDate: Date

    @Prop({type: String})
    password: String

    @Prop({required: true, type: String})
    email: String

    @Prop(raw({
        firstname: {type : String},
        lastname: {type: String},
        username: {type: String},
        email: {type: String}
    }))
    raw: Record<string, any>
}
