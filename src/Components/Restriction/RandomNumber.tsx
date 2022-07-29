type RandomNumerType = {
    value: number
}

type PositiveNumber = RandomNumerType & {
    isPositive : boolean 
    isNegative ?: never
    isZero ?: never
}

type NegativeNumber = RandomNumerType & {
    isNegative : boolean 
    isZero ?: never 
    isPositive ?: never 

}

type ZeroNumber = RandomNumerType & {
    isZero : boolean
    isPositive?: never 
    isNegative?: never
}

type RandomNumberProps =  ZeroNumber | NegativeNumber | PositiveNumber



const RandomNumber = ({value, isPositive, isNegative,isZero}: RandomNumberProps) => {
  return (
    <div>
        {value} {' '}{isPositive && 'positive'} {isNegative && 'negative'} {isZero && 'Zero'}
    </div>
  )
}

export default RandomNumber
