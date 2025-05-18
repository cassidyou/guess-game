import React, { useState } from 'react'

const FormBasics = () => {
  const style = { display: "block", width: "100%", padding: "5px", margin: "5px auto 20px" }


  function handleSubmit (event) {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);
      const skills = formData.getAll('skills');
      const data = Object.fromEntries(formData);
      const allData = {...data, skills }
      
      console.log(allData);
      event.currentTarget.reset();
  }


  return (
    <div>
      <h3 style={style}>Signup Form</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input style={style} type="text" name="username" id="username" placeholder='e.g. Carlx' />
        
        <label htmlFor="email">Email: </label>
        <input style={style} type="email" name="email" id="email" placeholder='e.g. cassidy@gmail.com' />
        
        <label htmlFor="password">Password: </label>
        <input style={style} type="password" name="password" id="password" />
        
        <label htmlFor="description">Description: </label>
        <textarea style={style} name="description" id="description"></textarea>

        <label htmlFor="gender">Gender</label>
        <br /><br />
        <label htmlFor="male">
          <input type="radio" id='male' name='gender' value="male" /> &nbsp; Male
        </label>
        <br />
        <label htmlFor="female">
          <input type="radio" id='female' name='gender' value="female" /> &nbsp; Female
        </label>
        <br /><br />
        <label htmlFor="skills">Skills</label>
        <fieldset>
          <legend>Select skills</legend>
          <input type="checkbox" name="skills" value="frontend" /> &nbsp; Frontend
          <br />
          <br />
          <input type="checkbox" name="skills" value="backend" /> &nbsp; Backend
        </fieldset>
        <br />
        <label htmlFor="favColor">Favourite Color</label>
        <select name="favcolor" id="favColor" style={style}>
          <option value="">--Select--</option>
          <option value="green">Green</option>
          <option value="black">Black</option>
          <option value="yellow">Yellow</option>
        </select>
        
        <button style={style}>Submit</button>
      </form>
    </div>
  )
}

export default FormBasics
