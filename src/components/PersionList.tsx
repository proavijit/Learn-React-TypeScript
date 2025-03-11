type PersionListProps = {
  names: {
    first: string,
    last: string
  }
}[]

const PersionList = (props: PersionListProps) => {
  return (
    <div>
      {
        props.names.map(name => {
          return <div key={name.first}>
            <h2>{name.first} {name.last}</h2>
          </div>
        })

      }
    </div>
  )
}

export default PersionList