import React from 'react'

function EducationPreview({educationBackground}) {
  // console.log('education background:', educationBackground);
  return (
    <div className="preview-component">
      <h2>Education</h2>
      {educationBackground.map(educ => {
        return (
        <div key={educ.id}>
          <div className="lable">
            <span>School:</span>
            <span>{educ.school}</span>
          </div>

          <div className="lable">
            <span>Major:</span>
            <span>{educ.major}</span>
          </div>

          <div className="lable">
            <span>From:</span>
            <span>{educ.schoolFrom}</span>
          </div>

          <div className="lable">
            <span>To:</span>
            <span>{educ.schoolTo}</span>
          </div>
        </div>
        )
      })}
    </div>
  )
}

export default EducationPreview