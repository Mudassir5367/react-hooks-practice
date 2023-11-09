import React, {useState} from 'react'

const UseState = () => {
    // const name = 'Mudassir Hussain'
    // console.log(useState('mudassir'));
    const [myName, setMyName] = useState(true)
    // console.log(myName);
    const changeName = () => {
        setMyName((prevName) => !prevName)
    }
  return (
    <>
      <div style={{textAlign:'center'}}>
      <h1 style={{backgroundColor:'indigo', color:'gold'}}>{myName ? 'Mudassir':'Hussain'}</h1>
      <button onClick={changeName}>Click Me</button>
      </div>
    </>
  )
}

export default UseState
