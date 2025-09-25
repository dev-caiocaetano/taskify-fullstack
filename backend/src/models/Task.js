import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    description: { type: String, required: true },
    priority: { type: String, required: true, enum: ['Baixa', 'Média', 'Alta'] },
    status: { type: String, required: true, enum: ['Pendente', 'Concluída'] },
    dueDate: Date
  },
  {
    timestamps: true,

    toJSON: {
      transform: (doc, ret) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      }
    }
  }
);

const TaskModel = mongoose.model('Task', TaskSchema);

export default TaskModel;


