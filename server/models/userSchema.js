const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userType: {
    type: String,
    enum: ['donor', 'beneficiary'],
    required: true,
  },
  organisationName: {
    type: String,
    required: function () {
      return this.userType === 'beneficiary';
    },
  },
  name: {
    type: String,
    required: function () {
      return this.userType === 'donor';
    },
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: function () {
      return this.userType === 'donor';
    },
  },
  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
    latitude: Number,
    longitude: Number,
  },
  typeOfOrganisation: {
    type: String,
    required: function () {
      return this.userType === 'beneficiary';
    },
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
