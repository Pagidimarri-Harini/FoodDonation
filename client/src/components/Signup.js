
import React, { useState, useEffect, useCallback } from 'react';
import '../styles/Signup.css';
import { useNavigate } from 'react-router-dom';
import isoCountries from 'i18n-iso-countries';
import 'i18n-iso-countries/langs/en.json'; // Make sure to provide the correct path to your CSS file
import { postSignupData } from '../service/api.js'; // Update the path to api.js as needed
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    userType: '',
    organisationName: '',
    name: '',
    email: '',
    password: '',
    address: {
      street: '',
      city: '',
      state: '',
      postalCode: '',
      country: '',
      latitude: '',
      longitude: '',
    },
    typeOfOrganisation: '',
    phoneNumber: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    isoCountries.registerLocale(require('i18n-iso-countries/langs/en.json'));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name.startsWith('address.')) {
      setFormData((prevState) => ({
        ...prevState,
        address: {
          ...prevState.address,
          [name.split('.')[1]]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    formData.userType = userType;
    try {
      const response = await postSignupData(formData);
      console.log('Response:', response);
      if (response.success) {
        console.log("yes")
        // Redirect to different pages based on userType
        if (userType === 'beneficiary') {
          navigate('/beneficiary-home', { state: { formData} });
        } else if (userType === 'donor') {

          navigate('/donor-home', { state: { formData} }); // Change the route to the donor homepage
        }
      } else {
        setErrorMessage(response.message);
        // Handle unsuccessful signup
      }
  }
      // TODO: Handle the response as needed (e.g., show a success message)
    catch (error) {
      console.error('Error:', error);
      // TODO: Handle the error (e.g., show an error message)
    }
  }, [formData, userType, navigate]);

  const handleUserTypeSelection = (type) => {
    setUserType(type);
  };
   const countryCodes = isoCountries.getNames('en', { select: 'official' });
  
  return (
    <div className="initial-signup">
      <h2>Sign Up Here</h2>
      {userType === 'beneficiary' ? (
        <div className="signup-container">
          {errorMessage && <p className="error-message">You already have an account, please login</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="organisationName"
                placeholder='Organization Name'
                value={formData.organisationName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
            <select
  name="typeOfOrganisation"
  value={formData.typeOfOrganisation}
  onChange={handleInputChange}
  placeholder='Type of Organization'
  required
>
<option value="" disabled selected hidden>
    Select an organization type
  </option>
  <option value="Charitable Organizations">Charitable Organizations</option>
  <option value="Animal Farms">Animal Shelters</option>
</select>

            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder='Email'
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder='Password'
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
                <input
              type="text"
              name="address.street"
              placeholder="Street Address"
              value={formData.address.street}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
          <input
            type="text"
            name="address.city"
            placeholder="City"
            value={formData.address.city}
            onChange={handleInputChange}
            required
          />
            </div>
            <div className="form-group postalcode">
            <input
            type="text"
            name="address.state"
            placeholder="State"
            value={formData.address.state}
            onChange={handleInputChange}
            required
          />
            <input
              type="text"
              name="address.postalCode"
              placeholder="Postal Code"
              value={formData.address.postalCode}
              onChange={handleInputChange}
              required
            />
            
          </div>
            <div className="form-group country-phone">

              <select
                name="address.country"
                value={formData.address.country}
                onChange={handleInputChange}
                required
              >
                <option value="">Country</option>
                {Object.entries(countryCodes).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
              </select>
              <input
                type="tel"
                name="phoneNumber"
                placeholder='Phone number'
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Sign Up</button>
            <hr></hr>
            <Link to="/login" className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
    Alreaddy have an account? Login here
  </Link>
          </form>
        </div>
      ) : userType === 'donor' ? (
        <div className="signup-container">
          {errorMessage && <p className="error-message">You already have an account, please login</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder='Name'
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder='Email'
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder='Password'
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* <div className="form-group">
              <input
                type="text"
                name="address"
                placeholder='Address'
                value={formData.adress}
                onChange={handleInputChange}
                required
              />
            </div> */}
            <div className="form-group country-phone">

              <select
                name="address.country"
                value={formData.address.country}
                onChange={handleInputChange}
                required
              >
                <option value="">Country</option>
                {Object.entries(countryCodes).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
              </select>
              <input
                type="tel"
                name="phoneNumber"
                placeholder='Phone number'
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Sign Up</button>
            <hr></hr>
            <Link to="/login" className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
    Already have an account? Login here
  </Link>
          </form>
        </div>
      ) : (
        <div className="user-type-selection">
          <div className="user-card left-card">
            <h3>
              Become a vital part of a compassionate community, enabling support
              for various causes and fostering positive change in the world.
            </h3>
            <button onClick={() => handleUserTypeSelection('donor')}>
              Register as a donor
            </button>
          </div>
          <div className="user-card right-card">
            <h3>
              Access diverse sources of support from individuals and businesses,
              empowering them to receive essential supplies and assistance.
            </h3>
            <button onClick={() => handleUserTypeSelection('beneficiary')}>
              Register as a beneficiary
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;

