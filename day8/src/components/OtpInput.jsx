import React, { useRef, useState } from 'react';

const OtpInput = ({ length, onSubmit }) => {
  const inputs = useRef([]);
  const [otp, setOtp] = useState(new Array(length).fill(''));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);


    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleKeyUp = (e, index) => {
    if (e.key === "Backspace" && e.target.previousSibling) {
      e.target.previousSibling.focus();
    }
  };

  const handleSubmit = () => {
    onSubmit(otp.join(''));
  };

  return (
    <div>
      {otp.map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputs.current[index] = el)}
          type="text"
          maxLength="1"
          value={otp[index]}
          onChange={(e) => handleChange(e.target, index)}
          onKeyUp={(e) => handleKeyUp(e, index)}
          style={{ width: '2rem', height: '2rem', textAlign: 'center', marginRight: '0.5rem' }}
        />
      ))}
      <button onClick={handleSubmit}>Verify OTP</button>
    </div>
  );
};

export default OtpInput;
