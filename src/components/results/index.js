import React from "react";
import JSONPretty from 'react-json-pretty';
import './result.scss';
import Loading from '../loadingStatus';

function Result(props){
    return(
        <section id ="">
        <pre data-testid="resultTest">  {props.data ?      <JSONPretty id="json-pretty" data={props.data}></JSONPretty>
          :  <Loading />}</pre>






{!props.data && (
          <div className="loader">
        
          </div>
        )}













        </section>
    );
}

export default Result;