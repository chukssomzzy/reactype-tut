import { useState, useRef, useEffect } from 'react'
type Props = {}

const MutableRef = (props: Props) => {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef<number | null>(null)

    const stopTimer = () => {
     clearInterval(intervalRef)   
    }

    useEffect(()=>{
        intervalRef.current = setInterval(()=>setTimer((time)=> timer + 1), 1000)
       return () => {
           stopTimer()
       }
    },[timer])
  return (
    <div>
        HookTimer - {timer}
        <button type='button' onClick={stopTimer}> Stop </button>
    </div>
  )
}

export default MutableRef
