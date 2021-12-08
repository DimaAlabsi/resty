import React from "react";
import { useState } from "react";
import './Form.scss';
import { Input ,Button, Select} from '@chakra-ui/react'

function Form(myprops) {

  
  const [url,seturl]=useState('');
  const [reqBody,setReqBody]=useState({});
  const [method,setmethod]=useState("get");


  
  const yrlTarget=(e)=>{
    seturl(e.target.value)
  }
  const bodyTarget=(e)=>{
    setReqBody(e.target.value)
  };
  const methodTarget=(e)=>{
    setmethod(e.target.value)
  }

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
         
          <br></br>
          <br></br>

          <Input variant='filled' placeholder='Filled'name="url" onChange={yrlTarget} id="url" type="text" />
          {/* <input  /> */}
          {/* <button >Try ❗</button> */}
          <Button data-testid="button-test" type="submit" colorScheme='pink' variant='solid'>
           TRY ❗
  </Button>
        </label>
        <label className="methods" for="select" > </label>
        {/* <select id="select" name="select"> */}
        <Select id="select"  placeholder="Choose" name="select" size='md'>
          <option id="get" value='get'>GET 📚</option>
          <option id="delete" value='delete'>DELETE❎</option>
          <option id="put" value='put'>PUT 📓</option>
          <option id="post" value='post'>POST 📑</option>
        
        </Select>
        <br></br>
        <textarea id="text" name="text"  onChange={bodyTarget} ></textarea>

      </form>
    </>
  )
}

export default Form;

