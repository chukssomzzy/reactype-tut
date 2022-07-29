 import { useState, useRef } from 'react'

type Props = {}
  
const DomRef = (props: Props) => { 
    const inputRef = useRef(null)

    useEffect(() => {
      inputRef.current.focus()
    }, [])

  return (
    <div>
        
    </div>
  )
}

export default DomRef
