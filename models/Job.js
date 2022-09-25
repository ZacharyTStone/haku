import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide company"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide position"],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["interview", "followed up", "declined", "pending"],
      default: "pending",
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "remote", "internship"],
      default: "full-time",
    },
    jobLocation: {
      type: String,
      default: "my city",
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
    isDemoJob : {
      type: Boolean,
      default: false,
    },
    notes: {
      type: String,
      maxlength: 300,
      required: false,
    },
    stared: {
      type: String,
      maxlength: 20,
      default: false,
      required: false,
    },
    URL: {
      type: String,
      maxlength: 300,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);
