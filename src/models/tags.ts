import mongoose, { Schema,Model} from 'mongoose';
import Notes from "../models/notes"

interface ITag extends Document{
   name:string;
   notes:mongoose.Types.ObjectId[];
}
const tagSchema :Schema= new mongoose.Schema<ITag>({
   name:{
      type:String,
      required:true,
      trim:true,
      unique:true
   },
   notes:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Notes',
   }]
})

const tag :Model<ITag>=mongoose.model<ITag>('tags',tagSchema)

export default tag;