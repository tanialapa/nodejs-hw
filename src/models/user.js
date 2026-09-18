import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    username: { type: String, required: false, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, minlength: 8 },
  },
  { timestamps: true, versionKey: false },
);

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    void document;
    delete returnedObject.password;
    return returnedObject;
  },
});

userSchema.pre('save', function () {
  if (this.isNew && !this.username) {
    this.username = this.email;
  }
});

export const User = model('User', userSchema);
