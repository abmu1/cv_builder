function Work({setWorkExperience}) {
  const submit = (e) => {
    e.preventDefault();
    const company = document.getElementById('company').value;
    const position = document.getElementById('position').value;
    const companyFrom = document.getElementById('company-from').value;
    const companyTo = document.getElementById('company-to').value;
    setWorkExperience(prevWork => {
      return [...prevWork, {company, position, companyFrom, companyTo}]
    })
  }
  return(
   <form className="form-component" onSubmit={(e) => submit(e)}>
    <h2>Add Work Experience</h2>
    <div className="lable">
      <label htmlFor="company">Company: </label>
      <input id="company"></input>
    </div>

    <div className="lable">
      <label htmlFor="position">Position: </label>
      <input id="position"></input>
    </div>

    <div className="lable">
      <label htmlFor="company-from">From: </label>
      <input id="company-from" type='date'></input>
    </div>

    <div className="lable">
      <label htmlFor="company-to">To: </label>
      <input id="company-to" type='date'></input>
    </div>
    <button type="submit">Add</button>
  </form>
  );
};

export default Work;