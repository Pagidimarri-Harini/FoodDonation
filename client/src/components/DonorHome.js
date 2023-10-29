import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {updateUserData} from '../service/api.js';

const DonorHome = () => {
  const location = useLocation();
  const formData = location.state.formData;

  const handleLocationAccess = () => {
    if (formData) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Update the formData with precise location
          const updatedFormData = {
            ...formData,
            address: {
              ...formData.address,
              latitude: latitude,
              longitude: longitude,
            },
          };
          updateUserData(updatedFormData)
            .then((response) => {
              // Handle the response if needed
              console.log('User data updated:', response);
            })
            .catch((error) => {
              // Handle errors
              console.error('Error updating user data:', error);
            });
          // Now, you can use the updatedFormData to update the state if needed.
          // For example, you can pass it to an update function or a context.
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            // Handle permission denied
          } else {
            // Handle other errors
          }
        }
      );
    }
  };

  useEffect(() => {
    if (formData) {
      // Check if the address is empty
      const { street, city, state, postalCode,country, latitude, longitude } = formData.address;
      if (!street && !city && !state && !postalCode) {

        // Address is empty, trigger location access
        handleLocationAccess();
      }
    }
  }, [formData]);

  return (
    <div>
      <h1>Donor Home</h1>
      {/* You can use formData.address.latitude and formData.address.longitude here */}
      {/* Add your donor-specific content here */}
    </div>
  );
};

export default DonorHome;
