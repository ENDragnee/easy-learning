import mongoose from 'mongoose';
import db from '@/lib/mongo';

const SerializedDataSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create index for tags
SerializedDataSchema.index({ tags: 1 });

// Use existing model or create new one
const SerializedData = 
  mongoose.models.SerializedData || 
  mongoose.model('SerializedData', SerializedDataSchema);

export default SerializedData;