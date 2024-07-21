import React from 'react';
import OtpInput from './components/OtpInput';

const App = () => {
  const predefinedOtp = '1234'; // Mocked OTP for verification

  const handleOtpSubmit = (enteredOtp) => {
    if (enteredOtp === predefinedOtp) {
      alert('OTP Verified Successfully');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div>
      <h1>OTP Verification</h1>
      <OtpInput length={4} onSubmit={handleOtpSubmit} />
    </div>
  );
};

export default App;
