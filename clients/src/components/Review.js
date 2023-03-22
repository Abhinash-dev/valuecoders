import React from 'react'
import { useLocation } from 'react-router-dom';
function Review(props) {
  const location = useLocation();
  console.log(location.state, "location");
  const { allOption, allQuestion } = location.state

  let question = Object.entries(allQuestion)
  let option = Object.entries(allOption)

  return (
    <div className='container'>
      <h2>Review page</h2>
      {question.map((item) => (
        <>

          <p>Question: {item[0]}</p>
          <p>Answer: {item[1]}</p>
        </>
      ))}

      {option.map((item) => (
        <>

          <p>Question: {item[0]}</p>
          <p>Answer: {item[1]}</p>
        </>
      ))}

    </div>
  )
}

export default Review