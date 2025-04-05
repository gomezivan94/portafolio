import React from 'react'
import picture from "../ProfilePicture/profile.jpg"

function ProfilePicture() {
  return (
    <img src={picture} width="500px" height="500px" alt="Profile Picture" />
  )
}

export default ProfilePicture