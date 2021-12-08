import React from "react";
import './App.scss';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useReducer } from "react";

import Header from './components/header';
import Form from './components/form';
import Results  from './components/results';
import Footer from './components/footer';
import {History} from './components/history';

const ACTIONS ={
  addNewSearch:"ADD_HISTORY"
}

const initialState = {
  history: [],
};
function reducer(obj) {
  return {
    type: ACTIONS.addNewSearch,
    payload: { obj },
  };
}


function searchHistoryReducer(state=initialState, action) {
  switch (action.type) {
    case ACTIONS.addNewSearch:
      const history = [...state.history, action.payload];
      return { history };
    default:
      return state;
  }
}







export default function App() {
  const [data,setData]=useState([])
  const [requestParams,setrequestParams]=useState({})
const [resultData,setresultData]=useState()
const [state, dispatch] = useReducer(searchHistoryReducer, initialState);





useEffect(() => {
  setData(`Method ---> ${requestParams.method}/  url--> ${requestParams.url}` )
  },[requestParams] );




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
      dispatch(
        reducer({
          method: method,
          url: url,
          reqBody: reqBody,
        })
      );
    }else{
      axios[method](url).then(data=>{
        setresultData(data.data);
        setrequestParams(requestParams)
      })
      dispatch(
        reducer({
          method: method,
          url: url,
        })
      );
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
    <History 

    history={state.history} handleApiCall={callApi} 

    />
    <Footer />

    
  </React.Fragment>
);

 
}



