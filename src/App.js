import React, { useState } from 'react';
import ShowTexts from './components/showText'

export default function App() {
  const [show, setShow] = useState(false)

  return (
    <div>
      <button onClick={() => setShow(!show)}>Submit</button>
      {show && <ShowTexts />}
    </div>
  )
}