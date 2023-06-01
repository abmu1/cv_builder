import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';

function Form({setState, example}) {
  const [workExperience, setWorkExperience] = useState([]);
  const [educationBackground, setEducationBackground] = useState([]);
  const [skills, setSkills] = useState([]);
  
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  const addSkill = () => {
    let skill = document.getElementById('skill');
    let value = skill.value;
    setSkills(prevSkills => {
      return [...prevSkills, {skill: value, id:uniqid()}];
    });
    skill.value = '';
    skill.focus();
  };
  
  const addExperience = () => {
    const company = document.getElementById('company');
    const city = document.getElementById('city');
    const startEnd = document.getElementById('start-end');
    const position = document.getElementById('position');
    const roleDescription = document.getElementById('role-description');

    let companyValue = company.value;
    let cityValue = city.value;
    let startEndValue = startEnd.value;
    let positionValue = position.value;
    let roleDescriptionValue = roleDescription.value;
    
    company.value = '';
    city.value = '';
    startEnd.value = '';
    position.value = '';
    roleDescription.value = '';
  
    const exp = {
      company: companyValue,
      city: cityValue,
      startEnd: startEndValue,
      position: positionValue,
      roleDescription: roleDescriptionValue,
      id: uniqid()
    }
    setWorkExperience(prevExps => {
      return [...prevExps, exp];
    });
    company.focus();
  }
  
  const addEducation = () => {
    const university = document.getElementById('university');
    const location = document.getElementById('location');
    const fromTo = document.getElementById('from-to');
    const major = document.getElementById('major');

    let universityValue = university.value;
    let locationValue = location.value;
    let fromToValue = fromTo.value;
    let majorValue = major.value;
    
    university.value = '';
    location.value = '';
    fromTo.value = '';
    major.value = '';
  
    const educ = {
      university:universityValue,
      location: locationValue,
      fromTo: fromToValue,
      major:majorValue,
      id: uniqid()
    }
    setEducationBackground(prevEducs => {
      return [...prevEducs, educ];
    });
    university.focus();
  };
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const removeSkill = (e) => {
    const button = e.currentTarget;
    setSkills(prevSkills => {
      for (let i in prevSkills) {
        if (prevSkills[i].id === button.id) {
          let newSkills = [...prevSkills];
          newSkills.splice(i, 1);
          return newSkills;
        };
      };
    })
  };
  
  const removeExperience = (e) => {
    const button = e.currentTarget;
    setWorkExperience(prevExps => {
      for (let i in prevExps) {
        if (prevExps[i].id === button.id) {
          let newExps = [...prevExps];
          newExps.splice(i, 1);
          return newExps;
        };
      };
    })
  };
  
  const removeEducation = (e) => {
    const button = e.currentTarget;
    setEducationBackground(prevEducs => {
      for (let i in prevEducs) {
        if (prevEducs[i].id === button.id) {
          let newEducs = [...prevEducs];
          newEducs.splice(i, 1);
          return newEducs;
        };
      };
    })
  };

  // ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const save = (e) => {
    e.preventDefault();
    let state = {};

    let profilePic;

    const file = document.querySelector('.profile-pic').files[0];
    if (!file) {
      profilePic = null;
    }
    else{
      profilePic = URL.createObjectURL(file);
    }
    
    const singles = document.querySelectorAll('.single');
    const skillsInputs = document.querySelectorAll('.skillsInputs');
    const workInputs = document.querySelectorAll('.workInputs');
    const educationInputs = document.querySelectorAll('.educationInputs');

    state.profilePic = profilePic;

    singles.forEach(single => {
      state[single.name] = single.value;
    });

    const skills = [];
    skillsInputs.forEach(ski => {
      let skill = {
        skill: ski.value,
        id: uniqid()
      }
      skills.push(skill);
    });

    const works = [];
    workInputs.forEach(work => {
      const inputs = work.children;
      const company = inputs[0].value;
      const city = inputs[1].value;
      const startEnd = inputs[2].value;
      const position = inputs[3].value;
      const roleDescription = inputs[4].value;
      works.push({
        company, city, startEnd, position, roleDescription
      });
    });

    const educations = [];
    educationInputs.forEach(education => {
      const inputs = education.children;
      const university = inputs[0].value;
      const location = inputs[1].value;
      const fromTo = inputs[2].value;
      const major = inputs[3].value;
      educations.push({
        university, location, fromTo, major
      });
    });

    state.skills = skills;
    state.works = works;
    state.educations = educations;

    const form = document.getElementById('form');
    form.style.display = 'none';
    
    setState(state);
    document.getElementById('main-preview').style.display = 'grid';
  }
  // /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const changeBackground = (e) => {
    const file = e.currentTarget.files[0];
    const preview = document.querySelector('.profile-input');
    preview.src = URL.createObjectURL(file);
  }
  // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    const singles = document.querySelectorAll('.single')
    singles.forEach(single => {
      single.defaultValue = example[single.name];
    });
    setSkills(example.skills);
    setEducationBackground(example.educations);
    setWorkExperience(example.works);
    setState(example);

    const form = document.getElementById('form');
    form.style.display = 'none';
    document.getElementById('main-preview').style.display = 'grid';
  }, [])
  
  return (
    <form id='form' className='form'>
      <div className='sidebar'>
        <div className='image-container'>
          <label className='image-label'>
            <img src='./images/anonymous.avif' className='profile-input' alt='Photo'/>
            <input type='file' name='profilePic' className='profile-pic' onInput={changeBackground} accept="image/*, .avif"/>
            <img src='./images/camera_icon.svg' id='camera-icon'/>
          </label>
        </div>
        <div className='about'>
          <h2>ABOUT ME</h2>
          <textarea placeholder='Description' name='description' className='single'/>
        </div>
        <div className='skills'>
          <h2>SKILLS</h2>
          <div className='add'>
            <h3>Add Skill</h3>
            <input name='skill' id='skill' placeholder='Skill'/>
            <button type='button' onClick={addSkill}>Add Skill</button>
          </div>
          <div className='skills-display'>
            {skills.map(skill => {
              return (
              <div key={skill.id} >
                <input defaultValue={skill.skill} className='skillsInputs'/>
                <button type='button' id={skill.id} onClick={removeSkill}>Remove</button>
              </div>
              )
            })}
          </div>
        </div>
      </div>
  
      <div className='main'>
        <section className='personal-info'>
          <div>
            <label>
              Name
              <input name='name' placeholder='Name' className='single name' id='name'/>
            </label>
            <label>
              Title
              <input name='position' placeholder='Title' className='single position'/>
            </label>
          </div>
  
          <div className='contact'>
            <label>
              Address
              <input name='address' placeholder='Address' className='single'/>
            </label>
            <label>
              Phone
              <input name='phone' placeholder='Phone' className='single'/>
            </label>
            <label>
              Email
              <input name='email' placeholder='Email' className='single'/>
            </label>
            <label>
              Website
              <input name='website' placeholder='Website' className='single'/>
            </label>
          </div>
        </section>
  
        <section>
          <h2>WORK EXPERIENCE</h2>
          <div className='add'>
            <h3>Add Work Experience</h3>
            <input name='company' placeholder='Company' id='company'/>
            <input name='city' placeholder='City' id='city'/>
            <input name='start-end' placeholder='From-To' id='start-end'/>
            <input name='position' placeholder='Position' id='position'/>
            <textarea name='role-description' placeholder='Brief description of what you did there' id='role-description'/>
            <button type='button' onClick={addExperience}>Add Experience</button>
          </div>
          <div className='work-experience'>
            {workExperience.map(exp => {
              return (
                <div key={uniqid()} className='workInputs experience'>
                  <input name='company' defaultValue={exp.company} data-id={exp.id} className='bolder'/>
                  <input name='city' defaultValue={exp.city} data-id={exp.id}/>
                  <input name='startEnd' defaultValue={exp.startEnd} data-id={exp.id}/>
                  <input name='position' defaultValue={exp.position} data-id={exp.id}/>
                  <textarea name='roleDescription' defaultValue={exp.roleDescription} data-id={exp.id} className='bold'/>
                  <button type='button' id={exp.id} onClick={removeExperience}>Remove</button>
                </div>
              )
            })}
          </div>
        </section>
  
        <section>
          <h2>EDUCATION BACKGROUND</h2>
          <div className='add'>
            <h3>Add Education Background</h3>
            <input name='university' placeholder='University' id='university'/>
            <input name='location' placeholder='Location' id='location'/>
            <input name='start-end' placeholder='From-To' id='from-to'/>
            <input name='major' placeholder='Degree-Major' id='major'/>
            <button type='button' onClick={addEducation}>Add Education</button>
          </div>
          <div className='education-background'>
            {educationBackground.map(educ => {
              return (
                <div key={uniqid()} className='educationInputs education'>
                  <input defaultValue={educ.university} data-id={educ.id} className='bolder'/>
                  <input defaultValue={educ.location} data-id={educ.id}/>
                  <input defaultValue={educ.fromTo} data-id={educ.id}/>
                  <input defaultValue={educ.major} data-id={educ.id} className='bold'/>
                  <button type='button' id={educ.id} onClick={removeEducation}>Remove</button>
                </div>
              )
            })}
          </div>
        </section>
      </div>
      <div>
        <button type='button' className='save' id='save' onClick={save}>Preview</button>
      </div>
    </form>
  )
  
}

export default Form
