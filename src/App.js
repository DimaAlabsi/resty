import React from "react";
import './App.scss';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import Header from './components/header';
import Form from './components/form';
import Results  from './components/results';
import Footer from './components/footer';


export default function App() {
  const [data,setData]=useState('')
  const [requestParams,setrequestParams]=useState({})
const [resultData,setresultData]=useState()

useEffect(() => {
setData(`Method ---> ${requestParams.method}/  url--> ${requestParams.url}` )
})




const callApi=(requestParams)=>{
 
    

  let url=requestParams.url
  // method: 'GET', url: 'https://pokeapi.co/api/v2/pokemon'
    let reqBody=requestParams.reqBody
    let method=requestParams.method
    if(method=='post'|| method=='put'){
      axios[method](url,reqBody).then(data=>{
       setresultData(data.data);
       setrequestParams(requestParams)


      })
    }else{
      axios[method](url).then(data=>{
        setresultData(data.data);
        setrequestParams(requestParams)
      })
    }
 
}

return (
  <React.Fragment>
    <Header />
    <div>Request Method: {requestParams.method}</div>
    <div>URL: {requestParams.url}</div>
    <section> Hello from useEffect HOOK ✌️{data}</section>
    <Form handleApiCall={callApi} />
    <Results data={resultData} />
    <Footer />
  </React.Fragment>
);

 
}



