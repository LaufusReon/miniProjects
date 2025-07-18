import { useState } from 'react'

const labStyle = {
  width:'100%',
  heigth: '10rem',
  color:'#fff',
  backgroundColor: '#202020',
  gap: '20px'
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <div style={labStyle}>
        <h2>{count}</h2>
        <button onClick={()=>{
          setCount(count+10)
        }}>Add</button>
        <button onClick={()=>{
          setCount(count-10)
        }}>Rest</button>
        <button onClick={()=>{
          setCount(0)
        }}>Reset</button>
      </div>
    </div>
  )
}

export default App
