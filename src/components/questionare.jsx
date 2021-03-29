import React from 'react';

export default function Questionare(props) {
    return (<h2
        id="question"
        dangerouslySetInnerHTML={{ __html: props.question}}
      />
    );

}






