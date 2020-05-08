/** Model representing a teachers address/location */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import mongoose from 'mongoose';

const { Schema } = mongoose;

export const Addschema = new Schema({
  number: {
    type: Number
  },
  street: {
    type: Number,
    required: true
  },
  state: {
    type: Number,
    required: true
  }
});

const AddressModel = mongoose.model('AddressModel', Addschema);

export default AddressModel;
