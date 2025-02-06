import React from 'react'
import { useRef, useState } from 'react'

/*UseRef Hook In React */

/*Dom manupilation */

const Use_Ref = () => {

  const [name, setname] = useState('srushti')
  const reFElement = useRef('')
  const NewRefElement = useRef()

  console.log(reFElement);

  function ResetName() {
    setname('')
    reFElement.current.focus()
  }

  function ApplyBgColor() {
    NewRefElement.current.style.backgroundColor = "Orange"
  }

  return (
    <div>
      <div className='flex justify-center'>
        <div>
          <div ref={NewRefElement} className='h-96 w-96'>

            <input ref={reFElement} className="border-2 border-solid p-3" type="text" value={name} onChange={() => setname(e.target.value)} />
            <button className='btn' onClick={ResetName}>Reset</button>
            <button className='btn' onClick={ApplyBgColor}>Click Me</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Use_Ref
