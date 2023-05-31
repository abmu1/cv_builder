import React from 'react'

function WorkPreview({workExperience}) {
  return (
    <div>
      <h2>Work Experience</h2>
      {workExperience.map(work => {
        return (
          <div className="preview-component">
            <div className="lable">
              <span>Company:</span>
              <span>{work.company}</span>
            </div>

            <div className="lable">
              <span>Position:</span>
              <span>{work.position}</span>
            </div>

            <div className="lable">
              <span>From:</span>
              <span>{work.companyFrom}</span>
            </div>

            <div className="lable">
              <span>To:</span>
              <span>{work.companyTo}</span>
            </div>
          </div>
        )
      })}
    </div> 
  )
}

export default WorkPreview