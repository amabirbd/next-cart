import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
  },
  phone: {
    type: String,
    required: false,
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
  },
});

const User = models.User || model('User', userSchema);

export default User;