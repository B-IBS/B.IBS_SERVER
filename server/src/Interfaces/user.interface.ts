export interface IUser extends Document {
    firstName: String,
    lastName: String,
    email: String,
    avatar: String,
    sex: String,
    age: Number,
    token: String,
    job: String,
}
