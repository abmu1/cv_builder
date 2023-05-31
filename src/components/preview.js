import uniqid from 'uniqid';
function preview({state}) {
  const edit = (e) => {
    document.getElementById('main-preview').style.display = 'none';
    document.getElementById('form').style.display = 'grid';
  };
  return(
    <div className="preview" id="main-preview" style={{display: 'none'}}>
      <div className="sidebar">
        <div className='image-container'>
          <img className="profile-pic" src={state.profilePic? state.profilePic : './profile.avif'} alt='profile pic'/>
        </div>
        <div className="about">
          <h2>ABOUT ME</h2>
          <p className="description">
            {state.description}
          </p>
        </div>
        <div className="skills">
          <h2>SKILLS</h2>
          <ul className='skills-display'>
            {state.skills.map(skill => {
              return <li key={skill.id}>{skill.skill}</li>
            })}
          </ul>
        </div>
      </div>

      <div className="main">
        <section className="personal-info">
          <div>
            <p className='name'>
              {state.name}
            </p>
            <p className="position">
              {state.position}
            </p>
          </div>

          <div className="contact">
            <ul>
              <li key={uniqid()}>Address: {state.address}</li>
              <li key={uniqid()}>Phone: {state.phone}</li>
              <li key={uniqid()}>Email: {state.email}</li>
              <li key={uniqid()}>Website: {state.website}</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>WORK EXPERIENCE</h2>
          <div className="work-experience">
            {state.works.map(work => {
              return(
              <div className="experience" key={uniqid()}>
                <span className="bolder">{work.company}</span>
                <span>{work.city}</span>
                <span>{work.startEnd}</span>
                <span className="bold">{work.position}</span>
                <p>
                  {work.roleDescription}
                </p>
              </div>
              )
            })}
          </div>
        </section>

        <section>
          <h2>EDUCATION</h2>
          <div className="education-background">
            {state.educations.map(education => {
              return(
              <div className="education" key={uniqid()}>
                <span className="bolder">{education.university}</span>
                <span>{education.location}</span>
                <span>{education.fromTo}</span>
                <span className="bold">{education.major}</span>
              </div>
              )
            })}
          </div>
        </section>
        <div>
          <button onClick={edit} className='edit'>EDIT</button>
        </div>
      </div>
    </div>
  )
};

export default preview;