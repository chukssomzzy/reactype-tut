
type Props<T> = {
    items: T[]
    onClick: (value: T)=> void
}

const lists =<T extends string | number> ({items, onClick}: Props<T>) => {

  return (
    <div>
        <h2>lists of Items</h2>
        {
            items.map((item , index)=>(
                <div key={index} onClick={()=> onClick(item)}>
                {item}
                </div>
            ))
        }
    </div>
  )
}

export default lists
