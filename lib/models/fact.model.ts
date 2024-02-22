import { Document, Schema, model, models } from "mongoose";

export interface IFact extends Document {
  factId: string;
  content: string;
  likedByUsers: Schema.Types.ObjectId[] | Record<string, any>[];
}

const FactSchema = new Schema<IFact>({
  factId: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
  likedByUsers: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
});

const Fact = models?.Fact || model<IFact>("Fact", FactSchema);

export default Fact;