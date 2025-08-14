import mongoose from "mongoose";
import { Schema, models, model, ObjectId } from "mongoose";
import { string } from "zod";

export interface IGroup {
  ownerId: ObjectId;
  eventId: ObjectId;
}

// TODO: need to refactor as per requirements;

const groupSchema = new Schema<IGroup>(
  {
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    eventId: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Group = models.Group || model<IGroup>("Group", groupSchema);

export default Group;
