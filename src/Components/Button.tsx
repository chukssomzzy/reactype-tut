
type Props = {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) =>  void
}

const Button = ({handleClick}: Props) => {
  return (
    <div>
        <Button onClick={handleClick} >Click</Button>
    </div>
  )
}

export default Button
