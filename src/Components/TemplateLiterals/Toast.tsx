
type HorizontalType = 'top' | 'center' | 'right' 

type VerticalType = 'top' | 'center' | 'bottom'



type Props = {
    position : Exclude<`${HorizontalType}-${VerticalType}`,'center-center'> | 'center'
}

const Toast = ({ position }: Props) => {

  return (
      <div>
          Toast Notification Position - { position }
      </div>
  )
}

export default Toast
