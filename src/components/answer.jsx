import React from 'react';

export default function Answer(props) {
  const answer = props.answers.map((ans,i) => (<button className="button-style">{ans}</button>));
    return answer;
}