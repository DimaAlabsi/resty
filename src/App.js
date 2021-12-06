import React from "react";

import "./App.scss";

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      requestParams: {},
      resultData:[]
    };
  }

  callApi = (requestParams) => {
    // method: 'GET', url: 'https://pokeapi.co/api/v2/pokemon'
    let reqBody=requestParams.reqBody
    let method=requestParams.method
    let url=requestParams.url
    if(method=='put'||method=='post'){
      axios[method](url,reqBody).then(data=>{
        this.setState({
          resultData:data.data,
          requestParams:requestParams
        })
      })
    }else{
      axios[method](url).then(data=>{
        this.setState({
          resultData:data.data,
          requestParams:requestParams
        })
      })
    }


  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {this.state.requestParams.method}</div>
        <div>URL: {this.state.requestParams.url}</div>
        <Form handleApiCall={this.callApi} />
        <Results data={this.state.resultData} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;