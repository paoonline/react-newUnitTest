import React, { useState, useEffect } from 'react';
import { ShowText, DataList } from './components'
import { ProductList } from './functions/service'

export default function App()  {
  const [show, setShow] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    ProductList().then(val => setData(val))
  }, [])

  return (
    <div>
      <button onClick={() => setShow(!show)}>Submit</button>
      {show && <ShowText />}
      {data.length > 0 && <DataList data={data}/>}
    </div>
  )
}