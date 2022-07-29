import React from 'react'

type Props = {
    nameList: {
        first: string,
        last: string
    }[]
}

const  PersonList = ({nameList}: Props) => {
  return (
    <div>
        {
        nameList.map((name, index: number)=>(
          <h2 key={index}>{name}</h2>
        ))
        }
    </div>
  )
}

export default PersonList
