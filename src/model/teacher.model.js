/* eslint-disable linebreak-style */
/** Model implementing a teachers application */

/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import mongoose from 'mongoose';
import { Addschema } from './address.model';

const { Schema } = mongoose;

const Tschema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    // Password must be at least 8 characters, no more than 12 characters,
    // and must include at least one upper case letter, one lower case letter,
    // and one numeric digit
    match: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/,
    required: true
  },
  phonenumber: {
    type: String,
    required: true
  },
  yoe: {
    type: Number,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  study: {
    type: String,
    required: true
  },
  address: Addschema,
  approved: {
    type: Boolean,
    default: false
  },
  gradpoint: {
    type: String,
    default: '0'
  },
  tokens: {
    type: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ]
  }

}, {
  // Automatically adds a createdAt and updatedAt filed to schema
  timestamps: true
});

const TeacherModel = mongoose.model('TeacherModel', Tschema);
export default TeacherModel;
