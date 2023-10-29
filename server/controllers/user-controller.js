const User = require('../models/userSchema.js');
const addAcc = (req, res) => {
    try {
      const userData = req.body;
      // Create a new User instance based on the schema
      const newUser = new User(userData);
      // Save the new user to the database
      newUser.save();
      res.status(201).json({ success: true, message: 'User created successfully' });
    } catch (error) {
      res.status(500).json({ success: false, error: 'Error creating user' });
    }
  };

  const checkAcc = async (req, res) => {
    try {
      const { email } = req.body; // Assuming you send the email in the request body
      const existingUser = await User.findOne({ email }).exec();
  
      if (existingUser) {
        // Email is in use; return the user object
        res.status(200).json({ success: true, message: 'Email already exists', user: existingUser });
      } else {
        // Email is not in use
        res.status(200).json({ success: false, message: 'Email is available' });
      }
    } catch (error) {
      res.status(500).json({ success: false, error: 'Error checking email' });
    }
  };

  
  const updateUser = async (req, res) => {
    try {
      const updatedUserData = req.body;
      const { email } = updatedUserData;
  
      const existingUser = await User.findOneAndUpdate({ email }, updatedUserData, { new: true }).exec();
  
      if (existingUser) {
        res.status(200).json({ success: true, message: 'User data updated successfully', user: existingUser });
      } else {
        res.status(404).json({ success: false, message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ success: false, error: 'Error updating user data' });
    }
  };
  module.exports = {
    addAcc,
    checkAcc,
    updateUser // Add this new endpoint
  };
  