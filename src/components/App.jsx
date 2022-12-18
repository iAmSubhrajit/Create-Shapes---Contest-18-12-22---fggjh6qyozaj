import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
 const [value, setValue] = useState('')
 const [className, setClassName] = useState('square')
 const [count ,setCount] = useState(0)
 const [shapeList, setShapeList] = useState([])
function handleChange(){
  setClassName(value)
  setCount(count+1)
  setShapeList([...shapeList,count])
}
  return (
    <div id="main">
      <div id="shape-creator">
        <select onChange={(e)=>{setValue(e.target.value)}}>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>
        <button onClick={handleChange}>Add shape</button>
      </div>
      <div id="shapes-holder" >
        {shapeList.map((element,idx)=> {return <div className={className}>{idx}</div>})}
      </div>
    </div>
  )
}


export default App;
