import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';
// Define the Profile component

function Profile({ fullName, bio, profession, children, handleName }) {
   // Return the JSX representing the profile

  return (
    <div className="profile-container">
      <h2>{fullName}</h2>
      <h4>{profession}</h4>
      <p>{bio}</p>
      {children}
      <button onClick={() => handleName(fullName)}>Click me!</button>
    </div>
  );
}
// Set default prop values for the Profile component

Profile.defaultProps = {
  fullName: 'Saafi sami',
  bio: 'full stack web developer',
  profession: 'student',
};
// Define prop types for the Profile component

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string,
  children: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

export default Profile;

