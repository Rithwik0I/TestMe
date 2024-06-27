import React from "react";

function Profile() {
    const userProfile = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      location: 'New York City, USA',
      joinDate: 'January 1, 2020',
      profilePicture: 'profile-picture.jpg', // Assuming you have the profile picture in public folder
    };
  
    return (
      <div className="container">
        <h1>User Profile</h1>
        <div className="profile-info">
          <img src={userProfile.profilePicture} alt="Profile Picture" />
          <div className="details">
            <h2>{userProfile.name}</h2>
            <p>Email: {userProfile.email}</p>
            <p>Location: {userProfile.location}</p>
            <p>Joined: {userProfile.joinDate}</p>
          </div>
        </div>
      </div>
    );
  }


export default Profile;
