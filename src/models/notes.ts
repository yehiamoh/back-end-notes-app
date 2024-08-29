import mongoose, { Schema, Document, Model, now } from "mongoose";

interface INote extends Document {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  tags: mongoose.Types.ObjectId[];
}

const noteSchema: Schema = new mongoose.Schema<INote>({
  title: {
    required: true,
    type: String,
    trim: true,
    maxlength: 100,
  },
  content: {
    required: true,
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }] // Array of tag references

});

noteSchema.pre('save', function (next) {
  if (this.isModified()) {
    this.updatedAt = Date.now();
  }
  next();
});

noteSchema.pre('updateOne', function (next) {
  this.set({ updatedAt: Date.now() });
  next();
});

const Note: Model<INote> = mongoose.model<INote>('Notes', noteSchema);
export default Note;