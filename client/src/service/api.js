const API_BASE_URL = 'http://localhost:8000';

export const postSignupData = async (formData) => {
  try {
    const {
      userType,
      organisationName,
      name,
      email,
      password,
      address,
      typeOfOrganisation,
      phoneNumber,
    } = formData;

    // Check if the account already exists
    const checkResponse = await fetch(`${API_BASE_URL}/signupcheck`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }), // Send only the email
    });

    if (checkResponse.ok) {
      const checkData = await checkResponse.json();

      if (checkData.success && checkData.message === 'Email already exists') {
        // Account already exists, return a message
        return { success: false, message: 'Account with this email already exists. Please log in.' };
      } else if (!checkData.success) {
        // If the account doesn't exist, proceed with signup
        const response = await fetch(`${API_BASE_URL}/signupadd`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userType,
            organisationName,
            name,
            email,
            password,
            address,
            typeOfOrganisation,
            phoneNumber,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          throw new Error('Failed to post signup data');
        }
      }
    } else {
      throw new Error('Failed to check account existence');
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
export const checkLoginData = async (email) => {
  try {

    // Check if the account already exists
    const checkResponse = await fetch(`${API_BASE_URL}/signupcheck`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }), // Send only the email
    });

    if (checkResponse.ok) {
      const checkData = await checkResponse.json();
      console.log(checkData);

      if (checkData.success && checkData.message === 'Email already exists') {
        // Account already exists, return a message
        return { success: true, message: 'Account with this email already exists. Please log in.',user:checkData.user };
      } else if (!checkData.success) {
        return { success: false, message: 'You don\'t have an account. Please Signup' };

        // If the account doesn't exist, proceed with signup
        
      }
    } else {
      throw new Error('Failed to check account existence');
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
// api.js

export const updateUserData = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/updateuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), // Send the updated formData
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to update user data');
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

