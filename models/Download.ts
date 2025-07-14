import mongoose, { Schema } from "mongoose";

const downloadSchema = new Schema(
  {
    templateId: {
      type: String,
      required: true,
      unique: true,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Download =
  mongoose.models.Download || mongoose.model("Download", downloadSchema);
export default Download;
