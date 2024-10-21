import mongoose, { Document, Model } from "mongoose";
const bcrypt = require("bcrypt");

interface IUser extends Document {
    username: string;
    password: string;
    tokens: { token: string }[];
    verifyPassword(password: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            }
        }
    ]
});

// Adding a method to the userSchema for verifying password
userSchema.methods.verifyPassword = async function (password: string): Promise<boolean> {
    const user = this as IUser; // Use 'this' as IUser type
    const isMatch = await bcrypt.compare(password, user.password);
    return isMatch;
};

// Creating a model for User
const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default User;
