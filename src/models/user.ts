import mongoose, { Schema, Model, Document } from "mongoose";

interface IUser extends Document {
   userName: string,
   password: string,
   roles: string[],
}

const userSchema: Schema = new mongoose.Schema<IUser>({
   userName: {
      required: true,
      type: String,
   },
   password: {
      required: true,
      type: String,
   },
   roles:
   {
      type: [String]
   }
   ,

});

const user: Model<IUser> = mongoose.model<IUser>('users', userSchema)

export default user;