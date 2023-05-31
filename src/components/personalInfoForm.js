function personalInfo({setPersonalInfo}) {
  const submit = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    setPersonalInfo({name, address, phone, email});
  };
  return (
    <form className="form-component" onSubmit={(e) => submit(e)}>
      <h2>Add Personal Info</h2>
      <div className="lable">
        <label htmlFor="name">Name: </label>
        <input id="name" required></input>
      </div>

      <div className="lable">
        <label htmlFor="address">Address: </label>
        <input id="address"></input>
      </div>

      <div className="lable"> 
        <label htmlFor="phone">Phone: </label>
        <input id="phone"></input>
      </div>

      <div className="lable">
        <label htmlFor="email">Email: </label>
        <input id="email" type='email'></input>
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

export default personalInfo;