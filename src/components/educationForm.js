import { useState } from 'react';
import uniqid from 'uniqid';
function Education({setEducationBackground}) {
  // Functionality to implement:
  // 1. Give empty input fields for all relevant details.
  // 2. Give add button that, when clicked, updates running display of all previously added things.
  // 3. the display units for each editable piece of information is an input element.
    //  The input element is tied to a specific object in state that gets mutated when input is updated.
  // 4. Seperate the main form inputs (the one for adding things the first time) from the display inputs.
  const [editables, setEditables] = useState([]);

  const save = () => {
    // const editable = e.currentTarget;
    // setEducationBackground(prevEduc => {
    //   for (let educ of prevEduc) {
    //     if (editable.dataset.id === educ.id) {
    //       educ[editable.name] = editable.value;
    //       // editable.value = educ[editable.name];
    //       return prevEduc;
    //     };
    //   };
    // });
  };

  const submit = (e) => {
    e.preventDefault();
    const school = document.getElementById('school').value;
    const major = document.getElementById('major').value;
    const schoolFrom = document.getElementById('school-from').value;
    const schoolTo = document.getElementById('school-to').value;
    const id = uniqid();
    setEducationBackground(prevEduc => {
      return [...prevEduc, {school, major, schoolFrom, schoolTo, id}]
    });

    // Create editable input elements for new educ object.
    const schoolEdit = <input name='school' data-id={id}/>
    const majorEdit = <input name='major' data-id={id}/>
    const schoolFromEdit = <input name='schoolFrom' data-id={id}/>
    const schoolToEdit = <input name='schoolTo' data-id={id}/>
    const div = <div className='editable' key={id}>
      {[schoolEdit, majorEdit, schoolFromEdit, schoolToEdit]}
    </div>
    setEditables(prevEditables => {
      return [...prevEditables, div];
    });
    // console.log(<h1>hello</h1>)
    // editablesDisplay.appendChild(<h1>hello world</h1>)
  };
  return(
    <>
    <h2>
      Add Education Background
      <button onClick={save}>Save</button>
    </h2>
    <div className='editable'>
      <span>school</span>
      <span>major</span>
      <span>from</span>
      <span>to</span>
    </div>

    <div className='editables-display'>
      {editables}
    </div>

    <form className="form-component" onSubmit={(e) => submit(e)}>
      <div className="lable">
        <label htmlFor="school">School: </label>
        <input id="school"></input>
      </div>

      <div className="lable">
        <label htmlFor="major">Major: </label>
        <input id="major"></input>
      </div>

      <div className="lable">
        <label htmlFor="school-from">From: </label>
        <input id="school-from" type='date'></input>
      </div>

      <div className="lable">
        <label htmlFor="school-to">To: </label>
        <input id="school-to" type='date'></input>
      </div>
      <button type="submit">Add</button>
    </form>
    </>
  );
};

export default Education;
