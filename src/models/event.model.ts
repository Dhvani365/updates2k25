import { Schema, models, model } from "mongoose";

export interface IEvent {
  name: string;
  eventType: string;
  maxMember: Number;
  minMember: Number;
}

// TODO: need to refactor as per requirements;

const eventSchema = new Schema<IEvent>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    eventType: {
      type: String,
      enum: ["SOLO", "GROUP"],
      required: true,
    },
    maxMember: {
      type: Number,
    },
    minMember: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Event = models.Event || model<IEvent>("Event", eventSchema);

export default Event;
