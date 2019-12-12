import mongoose, { Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    avatar: { type: String },
    sex: { type: String, required: true },
    age: { type: Number, required: true },
    job: { type: String },
});

export default mongoose.model('User', UserSchema);
