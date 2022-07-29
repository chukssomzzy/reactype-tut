import React from 'react'
import Greet from './Greet'

type Props = React.ComponentProps<typeof Greet>

const CustomComponent = (props: Props) => {
  return (
    <div>
        {
            props.name
        }
    </div>
  )
}

export default CustomComponent
