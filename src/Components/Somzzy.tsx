import React from 'react'

type Props = {
    children: React.ReactNode
}

const Somzzy = ({children}: Props) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default Somzzy
