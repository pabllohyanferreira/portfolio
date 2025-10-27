import React from 'react';
import EuImage from '../assets/Eu.png';
import './ProfilePhoto.css';

const ProfilePhoto: React.FC = () => {
  return (
    <div className="profile-photo-container">
      <div className="profile-photo-wrapper">
        <div className="profile-photo-border">
          <div className="profile-photo-glow"></div>
        </div>
        
        <div className="profile-photo-inner">
          <img 
            src={EuImage} 
            alt="Pabllo Hyan - Desenvolvedor" 
            className="profile-photo"
          />
        </div>
        
        <div className="profile-photo-decoration" />
      </div>
      
      <div className="profile-photo-text">
        <h3>Pabllo Hyan</h3>
        <p>Desenvolvedor Full Stack</p>
      </div>
    </div>
  );
};

export default ProfilePhoto;
