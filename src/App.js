import React, {useState} from 'react'

function App() {
  const [rating, setRating] = useState([
    {
      id: 1,
      text: 'Hello'
    },
    {
      id: 1,
      text: 'Hello'
    }
  ])
  return (
    <div >
     
     {rating.map((item) => (
      <div>{item.text}</div>
     ))}
    </div>
  );
}

export default App;
