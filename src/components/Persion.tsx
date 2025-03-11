
type PersionProps = {
  name: {
    first: string
    last: string
  }
}

const Persion = (props: PersionProps) => {
  return (
    <div>
      Persion name is {props.name.first} {props.name.last}
    </div>
  );
};

export default Persion;