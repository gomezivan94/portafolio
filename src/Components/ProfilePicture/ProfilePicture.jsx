import React from 'react'
import picture from "../ProfilePicture/profile.jpg"

function ProfilePicture() {
  return (
    <img className='profilePic' src={picture} alt="Profile Picture" />
  )
}

export default ProfilePicture