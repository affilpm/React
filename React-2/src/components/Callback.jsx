import { useCallback, useState } from 'react';

const Callback = () => {
    const [num, setNum] = useState(0)    ;

    const c = useCallback(() =>{
        setNum(num+1)
       } );

      return (
        <div>
            <button onClick={c}>fdfcb</button>
            {num}
        </div>
      )
}

export default Callback
