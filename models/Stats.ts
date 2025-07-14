import mongoose, { Schema } from "mongoose";

const statsSchema = new Schema(
  {
    _id: {
      type: String,
      default: "metadata",
    },
    totalDownloads: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    _id: false,
  }
);

const Stats = mongoose.models.Stats || mongoose.model("Stats", statsSchema);
export default Stats;
