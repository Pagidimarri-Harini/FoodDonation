import React from 'react';
import { useLocation } from 'react-router-dom';
const BeneficiaryHome = () => {
  const location = useLocation();
  const formData = location.state.formData;
  return (
    <div>
      <h1>Beneficiary Home</h1>
      {/* Add your beneficiary-specific content here */}
    </div>
  );
};

export default BeneficiaryHome;