// src/components/ErrorMessage.jsx
// import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = ({ message }) => {
  return (
    <div className="bg-red-500 text-white p-4 rounded mb-4">{message}</div>
  );
};

// Add prop validation
ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired, // Validate that message is a required string
};

export default ErrorMessage;
