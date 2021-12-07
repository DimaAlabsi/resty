import React from "react";
import './result.scss';
import Loading from '../loadingStatus';

function Result(props){
    return(
        <section id ="section">
        <pre data-testid="resultTest">{props.data ? JSON.stringify(props.data, undefined, 2) : <Loading />}</pre>

        </section>
    );
}

export default Result;