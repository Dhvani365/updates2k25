import mongoose, { Schema, models, model, ObjectId } from "mongoose";

export interface IUserDetail {
  department: string;
  year: string;
  semester: string;
  userId: ObjectId;
  phoneNumber: string;
  enrollmentNo: string;
  registeredEvents: Array<ObjectId>;
}

//TODO: need to add details as required;

const userDetailSchema = new Schema<IUserDetail>(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    department: {
      type: String,
      enum: [
        "CO",
        "IT",
        "MH",
        "CL",
        "IC",
        "AIDS",
        "CH",
        "EL",
        "EC",
        "MCA",
        "TT",
        "IMCA",
      ],
      required: true,
    },
    year: {
      type: String,
      enum: ["1", "2", "3", "4"],
      required: true,
    },
    semester: {
      type: String,
      enum: ["1", "2", "3", "4", "5", "6", "7", "8"],
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    enrollmentNo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserDetail =
  models.UserDetail || model<IUserDetail>("UserDetail", userDetailSchema);

export default UserDetail;
