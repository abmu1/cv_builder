import React from 'react'

function PersonalInfoPreview({personalInfo}) {
  return (
    <div className="preview-component">
        <h2>Personal Info</h2>
        <div className="lable">
          <span>Name:</span>
          <span>{personalInfo.name}</span>
        </div>

        <div className="lable">
          <span>Address:</span>
          <span>{personalInfo.address}</span>
        </div>

        <div className="lable">
          <span>Phone:</span>
          <span>{personalInfo.phone}</span>
        </div>

        <div className="lable">
          <span>Email:</span>
          <span>{personalInfo.email}</span>
        </div>
    </div>
  )
}

export default PersonalInfoPreview