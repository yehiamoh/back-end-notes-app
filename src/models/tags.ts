import mongoose, { Schema, Model } from 'mongoose';
import Notes from "../models/notes"

interface ITag extends Document {
   name: string;
   createdAt: Date;
   updatedAt: Date;
}
const tagSchema: Schema = new mongoose.Schema<ITag>({
   name: {
      type: String,
      required: true,
      trim: true,
      unique: true
   }, createdAt: {
      type: Date,
      default: Date.now,
   },
   updatedAt: {
      type: Date,
      default: Date.now,
   },

})
tagSchema.pre('save', function (next) {
   if (this.isModified()) {
      this.updatedAt = Date.now();
   }
   next();
});

tagSchema.pre('updateOne', function (next) {
   this.set({ updatedAt: Date.now() });
   next();
});
const tag: Model<ITag> = mongoose.model<ITag>('tags', tagSchema)

export default tag;