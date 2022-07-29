import React from 'react'

type Props = {
    status: 'loading' | 'success' | 'error'
}

const Status = ({ status }: Props) => {
   

    let message
    if(status === 'loading') 
        message = 'Loading ...'
      else if(status === 'success')
          message = 'Data fetched Successfully'
      else if ( status === 'error')
          message = 'an error occurred'
        
  return (
    <div>
        <h2>{message}</h2>
    </div>
  )
}

export default Status
