import React from 'react';

const QuestionDetail = (props) =>{
  console.log('props: ', props);
  return (
    <h2 className="question">{props.content}</h2>
  )
}
export default QuestionDetail;