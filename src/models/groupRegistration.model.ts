import { Schema, models, model, ObjectId } from "mongoose";

export interface IGroupRegistration {
  userId: ObjectId;
  eventId: ObjectId;
  groupId: ObjectId;
}

//NOTE: need to refactor for get csv as we required;

const groupRegistration = new Schema<IGroupRegistration>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    eventId: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    groupId: {
      type: Schema.Types.ObjectId,
      ref: "Group",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const GroupRegistration =
  models.GroupRegistration ||
  model<IGroupRegistration>("GroupRegistration", groupRegistration);

export default GroupRegistration;
