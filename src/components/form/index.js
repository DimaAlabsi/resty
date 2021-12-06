import React from "react";
import './Form.scss';

function Form(myprops) {
  const submitForm = (e) => {
    e.preventDefault();
    let reqBody = e.target.text.value;
    let method = e.target.select.value;
    let url = e.target.url.value;

    const formData = {
      reqBody: reqBody,
      method: method,
      url: url,

    };
    myprops.handleApiCall(formData);
  }

  return (
    <>
      {/* <form onSubmit={submitForm}>
        <label >
            <span>URL: </span>
            <input name='url' type='text' />
            <button type="submit">GO!</button>
          </label>
          <label className="methods">
            <span id="get">GET</span>
            <span id="post">POST</span>
            <span id="put">PUT</span>
            <span id="delete">DELETE</span>
          </label>
        </form> */}


      <form onSubmit={submitForm}>
       

        <label >
          <span>URL: </span>
          <br></br>
          <br></br>

          <input name="url"  id="url" type="text" />
          <button data-testid="button-test" type="submit">Try ❗</button>
        </label>
        <label className="methods" for="select" > select the method 😄 </label>
        <select id="select" name="select">
          <option >choose</option>
          <option id="get" value='get'>GET 📚</option>
          <option id="delete" value='delete'>DELETE❎</option>
          <option id="put" value='put'>PUT 📓</option>
          <option id="post" value='post'>POST 📑</option>
        
        </select>
        <br></br>
        <textarea id="text" name="text" ></textarea>

      </form>
    </>
  )
}

export default Form;

