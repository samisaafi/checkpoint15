import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

function Profile({ fullName, bio, profession, children, handleName }) {
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

Profile.defaultProps = {
  fullName: 'Saafi sami',
  bio: 'full stack web developer',
  profession: 'student',
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string,
  children: PropTypes.element.isRequired,
  handleName: PropTypes.func.isRequired,
};

export default Profile;

