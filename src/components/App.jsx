import React, { useEffect, useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [value, setValue] = useState('square')
  const [shapeList, setShapeList] = useState([])
  function handleChange() {
    setShapeList([...shapeList, value])
  }

  return (
    <div id="main">

      <div id="shape-creator">
        
        <select onChange={(e) => { setValue(e.target.value) }}>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>

        <button onClick={handleChange}>Add shape</button>

      </div>

      <div id="shapes-holder" >
        {shapeList.map((ele, idx) => ele === 'square' ? <div className='square'>{idx}</div> : <div className='circle'>{idx}</div>)}
      </div>

    </div>
  )
}


export default App;
