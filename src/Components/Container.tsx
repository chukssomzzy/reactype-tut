import React from 'react'

type Props = {
    styles: React.CSSProperties
}

const Container = ({ styles}: Props) => {

  return (
    <div>
        <div style={styles}>
             text goes here
        </div>
    </div>
  )
}

export default Container
