import React, { useState } from 'react'
import { useMemo } from 'react'

const Memo = () => {
  const [c, setC] = useState(0)  


   const r = useMemo(()=>{
    return c +2
   },[c])

   const b = () =>{
    setC(c+1)
   }
  return (
    <div>
        <button onClick={b}>fcb</button>
        {r}<br/>
        {c}
    </div>
  )
}

export default Memo
