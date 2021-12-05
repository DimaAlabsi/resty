import React from "react";

function Result(props){
    return(
        <section>
        <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
        </section>
    );
}

export default Result;