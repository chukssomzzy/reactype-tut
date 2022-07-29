import React from 'react'

type Props = {
    personName: {
        first: string,
        last: string
    }
}

const person = ({personName}: Props) => {
  return (
    <div>{personName.first}{' '}{personName.last}</div>
  )
}

export default person
