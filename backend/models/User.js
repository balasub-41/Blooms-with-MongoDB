import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  fatherName: {
    type: String,
    required: true
  },
  studentType: {
    type: String,
    required: true
  },
  schoolName: {
    type: String,
    required: true
  },
  classStandard: {
    type: String,
    required: true
  },
  rollNo: {
    type: String,
    required: true
  },
  section: {
    type: String,
    required: true
  },
  group: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  mobileNumber: {
    type: String,
    required: true
  },
  altMobileNumber: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);
export default User;